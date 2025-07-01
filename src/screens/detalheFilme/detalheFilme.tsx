import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useTheme } from "../../context";
import { Ionicons } from "@expo/vector-icons";

const POSTER_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_URL = "https://image.tmdb.org/t/p/w780";
const { width } = Dimensions.get("window");

export default function MovieDetails() {
  const { colors } = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`movie/${id}`);
        setDetails(res.data);
        navigation.setOptions({ title: res.data.title });
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.primary || "#e50914"} />
      </View>
    );
  }

  if (error || !details) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={{ color: colors.text }}>
          Não foi possível carregar as informações.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Backdrop */}
      {details.backdrop_path && (
        <Image
          source={{ uri: BACKDROP_URL + details.backdrop_path }}
          style={styles.backdrop}
        />
      )}

      {/* Poster e Infos */}
      <View style={styles.headerContent}>
        <Image
          source={{ uri: POSTER_URL + details.poster_path }}
          style={styles.poster}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: colors.text }]}>
            {details.title}
          </Text>
          <View style={styles.row}>
            <Ionicons name="star" size={16} color="#ffd700" />
            <Text style={[styles.vote, { color: colors.text }]}>
              {details.vote_average.toFixed(1)} ({details.vote_count})
            </Text>
            <Text style={[styles.dot, { color: colors.text }]}>•</Text>
            <Text style={[styles.runtime, { color: colors.text }]}>
              {details.runtime} min
            </Text>
          </View>
          <Text style={[styles.genres, { color: colors.text }]}>
            {details.genres.map((g) => g.name).join(", ")}
          </Text>
        </View>
      </View>

      {/* Sinopse */}
      <View style={[styles.card, { backgroundColor: colors.sectionBackground }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Sinopse</Text>
        <Text style={[styles.overview, { color: colors.text }]}>
          {details.overview}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backdrop: { width: "100%", height: 220, resizeMode: "cover" },
  headerContent: {
    flexDirection: "row",
    marginTop: -60,
    paddingHorizontal: 16,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#ccc",
  },
  textContainer: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: "center",
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 6 },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  vote: { marginLeft: 4, fontSize: 14 },
  dot: { marginHorizontal: 6 },
  runtime: { fontSize: 14 },
  genres: { fontStyle: "italic", fontSize: 14 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  overview: { fontSize: 14, lineHeight: 20, textAlign: "justify" },
  card: {
    marginTop: 20,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
