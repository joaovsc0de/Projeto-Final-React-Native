import { View, Text } from 'react-native'
import LottieView from "lottie-react-native";

export default function Splash() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <LottieView
      source={require("../../assets/splash.json")}
      style={{width: "90%", height: "90%"}}
      autoPlay
      loop
    />
    </View>
  )
}