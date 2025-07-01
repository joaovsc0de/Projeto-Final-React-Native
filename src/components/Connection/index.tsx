import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { styles } from "./style";

export default function Connection() {
  const [conexao, setConexao] = useState<boolean>(false);
  const [tipoConexao, setTipoConexao] = useState<string>("");

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      setTipoConexao(state.type);
      setConexao(state.isConnected ?? false);
    });
  });
  return (
    <View style={styles.container}>
      {conexao ? (
        <Text style={styles.text}>
          Conectado. Tipo de conexão: {tipoConexao}{" "}
        </Text>
      ) : (
        <Text>Sem conexão</Text>
      )}
    </View>
  );
}
