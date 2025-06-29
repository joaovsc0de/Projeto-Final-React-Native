
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";


import api from "../../services/api"; 
import { useTheme } from "../../context";

const POSTER_URL = "https://image.tmdb.org/t/p/w500";

export default function Home({ navigation }) {
  const { colors } = useTheme();

  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

 
  useEffect(() => {
    (async () => {
      try {
        const [popRes, topRes, upRes] = await Promise.all([
          api.get("movie/popular", { params: { page: 1 } }),
          api.get("movie/top_rated", { params: { page: 1 } }),
          api.get("movie/upcoming", { params: { page: 1 } }),
        ]);

        setPopular(popRes.data.results);
        setTopRated(topRes.data.results);
        setUpcoming(upRes.data.results);
      } catch (e) {
        console.error("Erro ao buscar filmes:", e.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const renderPoster = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Details", { id: item.id })}
    >
      <Image source={{ uri: POSTER_URL + item.poster_path }} style={styles.poster} />
      <LinearGradient colors={["transparent", "rgba(0,0,0,0.9)"]} style={styles.overlay} />
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={[colors.background, "#000"]} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: colors.text }]}>Início</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Ionicons name="search" size={26} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Loader / Error */}
      {loading && (
        <ActivityIndicator size="large" color={colors.primary || "#e50914"} style={styles.loader} />
      )}
      {!loading && error && (
        <Text style={[styles.errorText, { color: colors.text }]}>Não foi possível carregar os filmes.</Text>
      )}

      {/* Conteúdo */}
      {!loading && !error && (
        <ScrollView>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Populares</Text>
          <FlatList
            data={popular}
            renderItem={renderPoster}
            horizontal
            keyExtractor={(item) => String(item.id)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />

          <Text style={[styles.sectionTitle, { color: colors.text }]}>Mais Bem Avaliados</Text>
          <FlatList
            data={topRated}
            renderItem={renderPoster}
            horizontal
            keyExtractor={(item) => String(item.id)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />

          <Text style={[styles.sectionTitle, { color: colors.text }]}>Em Breve</Text>
          <FlatList
            data={upcoming}
            renderItem={renderPoster}
            horizontal
            keyExtractor={(item) => String(item.id)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />
        </ScrollView>
      )}
    </LinearGradient>
  );
}

// --------------------------- ESTILOS ---------------------------
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    marginTop: 50,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: { fontSize: 22, fontWeight: "700" },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { textAlign: "center", marginTop: 20 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 10,
  },
  flatList: { paddingHorizontal: 8 },
  card: {
    width: 120,
    height: 180,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
  },
  poster: { width: "100%", height: "100%" },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
  },
  title: {
    position: "absolute",
    bottom: 4,
    left: 4,
    right: 4,
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
