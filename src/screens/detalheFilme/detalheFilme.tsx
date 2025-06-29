// MovieDetails.js – tela de detalhes do filme
// -------------------------------------------------------------
// • Recebe o parâmetro `id` via navigation (Stack)
// • Busca detalhes do TMDB usando o axios configurado (services/api.ts)
// • Exibe pôster grande, título, avaliação, gêneros, duração e sinopse
// • Compatível com Expo (usa expo-linear-gradient e @expo/vector-icons)

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

import api from "../../services/api"; // ajuste o caminho se precisar
import { useTheme } from "../../context";

const POSTER_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_URL = "https://image.tmdb.org/t/p/w780";

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
        console.error("Erro ao buscar detalhes:", e.message);
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
        <Text style={{ color: colors.text }}>Não foi possível carregar as informações.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Backdrop */}
      {details.backdrop_path && (
        <Image source={{ uri: BACKDROP_URL + details.backdrop_path }} style={styles.backdrop} />
      )}
      {/* Poster sobre a backdrop */}
      <View style={styles.posterWrapper}>
        <Image source={{ uri: POSTER_URL + details.poster_path }} style={styles.poster} />
      </View>

      {/* Título e infos principais */}
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>{details.title}</Text>

        <View style={styles.row}>
          <Ionicons name="star" size={16} color="#ffd700" />
          <Text style={[styles.vote, { color: colors.text }]}>
            {details.vote_average.toFixed(1)} ({details.vote_count})
          </Text>
          <Text style={[styles.dot, { color: colors.text }]}>•</Text>
          <Text style={[styles.runtime, { color: colors.text }]}> {details.runtime} min</Text>
        </View>

        {/* Gêneros */}
        <Text style={[styles.genres, { color: colors.text }]}> {details.genres.map(g => g.name).join(', ')} </Text>

        {/* Sinopse */}
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Sinopse</Text>
        <Text style={[styles.overview, { color: colors.text }]}>{details.overview}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backdrop: { width: '100%', height: 200 },
  posterWrapper: {
    position: 'absolute',
    top: 140,
    left: 16,
    elevation: 4,
  },
  poster: { width: 120, height: 180, borderRadius: 8 },
  content: { marginTop: 100, paddingHorizontal: 16 },
  title: { fontSize: 24, fontWeight: '700' },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  vote: { marginLeft: 4, fontSize: 14 },
  dot: { marginHorizontal: 6 },
  runtime: { fontSize: 14 },
  genres: { marginTop: 4, fontStyle: 'italic' },
  sectionTitle: { marginTop: 16, fontSize: 18, fontWeight: '600' },
  overview: { marginTop: 8, lineHeight: 20, textAlign: 'justify' },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
