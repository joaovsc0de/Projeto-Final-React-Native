import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import api from "../../services/api";
import { useTheme } from "../../context";
import { styles } from "./styles";

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
    <LinearGradient
      colors={['#f5f7fa', '#c3cfe2']}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {details.backdrop_path && (
          <Image
            source={{ uri: BACKDROP_URL + details.backdrop_path }}
            style={styles.backdrop}
          />
        )}

        <View style={styles.headerContent}>
          <Image
            source={{ uri: POSTER_URL + details.poster_path }}
            style={styles.poster}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{details.title}</Text>
            <View style={styles.row}>
              <Ionicons name="star" size={16} color="#ffd700" />
              <Text style={styles.vote}>
                {details.vote_average.toFixed(1)} ({details.vote_count})
              </Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.runtime}>{details.runtime} min</Text>
            </View>
            <Text style={styles.genres}>
              {details.genres.map((g) => g.name).join(", ")}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Sinopse</Text>
          <Text style={styles.overview}>{details.overview}</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
