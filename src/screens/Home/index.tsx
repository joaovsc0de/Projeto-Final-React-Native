import React, { useEffect, useState } from "react";
import {
  View,
  Text,
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
import Connection from "../../components/Connection";
import { styles } from "./style";

const POSTER_URL = "https://image.tmdb.org/t/p/w500";

export default function Home({ navigation }: any) {
  const { colors }: any = useTheme();

  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // 🔄 Requisição de dados
  useEffect(() => {
    (async () => {
      try {
        const [popularRes, topRatedRes, upcomingRes] = await Promise.all([
          api.get("movie/popular", { params: { page: 1 } }),
          api.get("movie/top_rated", { params: { page: 1 } }),
          api.get("movie/upcoming", { params: { page: 1 } }),
        ]);

        setPopularMovies(popularRes.data.results);
        setTopRatedMovies(topRatedRes.data.results);
        setUpcomingMovies(upcomingRes.data.results);
      } catch (err: any) {
        console.error("Erro ao carregar filmes:", err.message);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // 🎞️ Renderiza cada pôster de filme
  const renderPoster = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Details", { id: item.id })}
    >
      <Image
        source={{ uri: POSTER_URL + item.poster_path }}
        style={styles.poster}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={styles.overlay}
      />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={[colors.background, "#000"]} style={styles.container}>
      <Connection />

      {/* 🔝 Cabeçalho */}
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: colors.text }]}>Início</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Filmes")}>
          <Ionicons name="search" size={26} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* ⏳ Carregando */}
      {isLoading && (
        <ActivityIndicator
          size="large"
          color={colors.primary || "#e50914"}
          style={styles.loader}
        />
      )}

      {/* ❌ Erro ao carregar */}
      {!isLoading && hasError && (
        <Text style={[styles.errorText, { color: colors.text }]}>
          Oops! Algo deu errado ao carregar os filmes. 😢
        </Text>
      )}

      {/* ✅ Conteúdo Principal */}
      {!isLoading && !hasError && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>🔥 Populares</Text>
          <FlatList
            data={popularMovies}
            renderItem={renderPoster}
            horizontal
            keyExtractor={(item: any) => String(item.id)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />

          <Text style={[styles.sectionTitle, { color: colors.text }]}>🏆 Mais Bem Avaliados</Text>
          <FlatList
            data={topRatedMovies}
            renderItem={renderPoster}
            horizontal
            keyExtractor={(item: any) => String(item.id)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />

          <Text style={[styles.sectionTitle, { color: colors.text }]}>🎥 Em Breve</Text>
          <FlatList
            data={upcomingMovies}
            renderItem={renderPoster}
            horizontal
            keyExtractor={(item: any) => String(item.id)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />
        </ScrollView>
      )}
    </LinearGradient>
  );
}
