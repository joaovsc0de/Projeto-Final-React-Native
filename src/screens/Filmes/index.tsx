import {
  View,
  Text,
  Alert,
  Keyboard,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import api from "../../services/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput as TextInputType } from "react-native-gesture-handler";
import { styles } from "../../services/styles/style";
import { useTheme } from "../../context";

type FilmeType = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
};

export default function Filmes() {
  const [nome, setNome] = useState("");
  const inputRef = useRef<TextInputType>(null);
  const [filme, setFilme] = useState<FilmeType[]>([]);

  const { colors } = useTheme(); // ✅ pega as cores do tema

  const buscar = async () => {
    if (nome.length === 0) {
      Alert.alert("Preencha o campo nome do filme.");
      return;
    }

    try {
      const response = await api.get("/search/movie", {
        params: {
          query: nome,
        },
      });

      if (response.data.results.length === 0) {
        Alert.alert("Filme não encontrado.");
      } else {
        setFilme(response.data.results);
      }
      Keyboard.dismiss();
    } catch (error) {
      console.error("Erro:", error);
      Alert.alert("Erro ao buscar filme.");
    }
  };

  function limpar(): void {
    setNome("");
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ alignItems: "center", padding: 16 }}>
        <Text style={[styles.text, { color: colors.text }]}>Pesquisar filme:</Text>
        <TextInputType
          style={[styles.input, { color: colors.text, borderColor: colors.border }]}
          value={nome}
          onChangeText={(text) => setNome(text)}
          ref={inputRef}
          keyboardType="ascii-capable"
          placeholder="Digite o nome do filme"
          placeholderTextColor={colors.border}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: colors.button }]}
          onPress={buscar}
        >
          <Text style={[styles.botaoText, { color: colors.buttonText }]}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: colors.button }]}
          onPress={limpar}
        >
          <Text style={[styles.botaoText, { color: colors.buttonText }]}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {filme.length > 0 && (
        <FlatList
          data={filme}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.card, { backgroundColor: colors.sectionBackground }]}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.poster}
              />
              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={[styles.cardTitle, { color: colors.text }]}>{item.title}</Text>
                <Text style={[styles.cardSubtitle, { color: colors.text }]}>
                  Lançamento: {item.release_date}
                </Text>
                <Text numberOfLines={3} style={[styles.cardOverview, { color: colors.text }]}>
                  {item.overview}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
