import {
  View,
  Text,
  Alert,
  Keyboard,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import  { useRef, useState } from "react";
import api from "../../services/api";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput as TextInputType } from "react-native-gesture-handler";
import { styles } from "../../services/styles/style";
import { useTheme } from "../../context";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

type FilmeType = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  vote_rating: string;
};

type ResultType = {
  page: number
  total_pages: number
  total_results: number
};
type StackParamList = {
  Details: { id: number };
};

export default function Filmes() {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const [nome, setNome] = useState("");
  const inputRef = useRef<TextInputType>(null);
  const [filmes, setFilme] = useState<FilmeType[]>([]);
  const [busca, setBusca] = useState<boolean>(false);
  const [resultadoPesquisa, setResult] = useState<ResultType>({
    page: 0,
    total_pages: 0,
    total_results: 0
  });


  const { colors }:any = useTheme(); // ✅ pega as cores do tema

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

      if (response.data.total_results === 0) {
        setBusca(true);
      } else {
        setFilme(response.data.results);
        setResult(
          {
            page: response.data.page,
            total_pages: response.data.total_pages,
            total_results: response.data.total_results
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
    setResult({
      page: 0,
      total_pages: 0,
      total_results: 0
    })
    setBusca(false);
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      
      <View style={{ alignItems: "center", padding: 16 }}>
        <Text style={[styles.text, { color: colors.text }]}>Pesquisar filme:</Text>
        <Image 
      source={require('../../../assets/image1.png')}
      style={styles.img} />
        <TextInputType
          style={[styles.input, { color: colors.text, borderColor: colors.border }]}
          value={nome}
          onChangeText={(text) => setNome(text)}
          ref={inputRef}
          keyboardType="ascii-capable"
          placeholder="Digite o nome do filme"
          placeholderTextColor={colors.border}
          onPress={limpar}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#651ef7' }]}
          onPress={buscar}
        >
          <Text style={[styles.botaoText, { color: colors.buttonText }]}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: '#651ef7' }]}
          onPress={limpar}
        >
          <Text style={[styles.botaoText, { color: colors.buttonText }]}>Limpar</Text>
        </TouchableOpacity>
      </View>
      {resultadoPesquisa.total_pages > 0 && nome.length > 0 ?
        <View>
          <Text style={[styles.cardTitle, { color: colors.text, marginLeft: 20, marginTop: 10, marginBottom: 20 }]}>Total de resultados:{resultadoPesquisa.total_results} </Text>
        </View>
        : resultadoPesquisa.total_pages == 0 && busca == true ?
          <Text style={[styles.cardTitle, { color: colors.text, marginLeft: 20, marginTop: 10, marginBottom: 20 }]}>Não foram encotrados resultados para sua pesquisa.</Text>
          : <Text></Text>
      }
      {filmes.length > 0 && (
        <FlatList
          data={filmes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
            style={[styles.card, { backgroundColor: colors.sectionBackground }]}
            //  onPress={() => navigation.navigate("Details", { id: item.id })}
            >
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
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}