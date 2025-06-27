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
      console.log(response.data);

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
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Pesquisar filme: </Text>
        <TextInputType
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
          ref={inputRef}
          keyboardType="ascii-capable"
          placeholder="Digite o nome do filme"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#651ef7" }]}
          onPress={buscar}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#0085d1" }]}
          onPress={limpar}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {filme.length > 0 && (
        <FlatList
          data={filme}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.poster}
              />
              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardSubtitle}>
                  Lançamento: {item.release_date}
                </Text>
                <Text numberOfLines={3} style={styles.cardOverview}>
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
