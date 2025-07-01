import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { styles } from "./style";
export default function Splash() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        source={require("../../assets/splash.json")}
        style={styles.splash}
        autoPlay
        loop
      />
    </View>
  );
}
