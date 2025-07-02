import {
  View,
  Text,
  Alert,
  Keyboard,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import { useEffect } from "react";
import api from "../../services/api";
import { useTheme } from "../../context";
import { useNavigation } from "@react-navigation/native";
import Connection from "../../components/Connection";
import { styles } from "../../services/styles/style";

type FilmeType = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
};

type ResultType = {
  page: number;
  total_pages: number;
  total_results: number;
};

export default function Filmes() {
  const { colors }: any = useTheme();
  const [nome, setNome] = useState("");
  const [filmes, setFilme] = useState<FilmeType[]>([]);
  const [busca, setBusca] = useState<boolean>(false);
  const [resultadoPesquisa, setResult] = useState<ResultType>({
    page: 0,
    total_pages: 0,
    total_results: 0,
  });

  const navigation = useNavigation();

   // Animação de pulsação
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.4,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const buscar = async () => {
    if (nome.length === 0) {
      Alert.alert("Preencha o campo nome do filme.");
      return;
    }

    try {
      const response = await api.get("/search/movie", {
        params: { query: nome },
      });

      if (response.data.total_results === 0) {
        setBusca(true);
      } else {
        setFilme(response.data.results);
        setResult({
          page: response.data.page,
          total_pages: response.data.total_pages,
          total_results: response.data.total_results,
        });
        setBusca(true);
      }
      Keyboard.dismiss();
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  function limpar(): void {
    setNome("");
    setFilme([]);
    setResult({ page: 0, total_pages: 0, total_results: 0 });
    setBusca(false);
    Keyboard.dismiss();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.background }}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <Connection />

        

        {/* Imagem central com animação */}
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Animated.Image
            source={require("../../../assets/image1.png")}
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
              transform: [{ scale: pulseAnim }],
            }}
          />
        </View>
        
        {/* Campo de busca */}
        <View style={{ alignItems: "center", padding: 16 }}>
          <Text style={[styles.text, { color: colors.text }]}>
            Pesquisar filme:
          </Text>
          <TextInput
            style={[
              styles.input,
              { color: colors.text, borderColor: colors.border },
            ]}
            value={nome}
            onChangeText={(text) => setNome(text)}
            placeholder="Digite o nome do filme"
            placeholderTextColor={colors.border}
          />
        </View>

            
        {/* Botões */}
        <View style={[styles.areaBtn, { marginBottom: 10 }]}>
          <TouchableOpacity
            style={[styles.botao, { backgroundColor: "#651ef7" }]}
            onPress={buscar}
          >
            <Text style={[styles.botaoText, { color: colors.buttonText }]}>
              Buscar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botao, { backgroundColor: "#651ef7" }]}
            onPress={limpar}
          >
            <Text style={[styles.botaoText, { color: colors.buttonText }]}>
              Limpar
            </Text>
          </TouchableOpacity>
        </View>

        {/* Resultado de busca */}
        {busca && (
          <View style={{ paddingHorizontal: 16 }}>
            {resultadoPesquisa.total_results > 0 ? (
              <Text style={[styles.cardTitle, { color: colors.text }]}>
                Total de resultados: {resultadoPesquisa.total_results}
              </Text>
            ) : (
              <Text style={[styles.cardTitle, { color: colors.text }]}>
                Nenhum resultado encontrado.
              </Text>
            )}
          </View>
        )}

        {/* Lista de filmes */}
        <FlatList
          data={filmes}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false} // FlatList dentro de ScrollView
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: colors.sectionBackground }]}
              onPress={() => navigation.navigate("detalheFilmes", { id: item.id })}
            >
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.poster}
              />
              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={[styles.cardTitle, { color: colors.text }]}>
                  {item.title}
                </Text>
                <Text style={[styles.cardSubtitle, { color: colors.text }]}>
                  Lançamento: {item.release_date}
                </Text>
                <Text
                  numberOfLines={3}
                  style={[styles.cardOverview, { color: colors.text }]}
                >
                  {item.overview}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
