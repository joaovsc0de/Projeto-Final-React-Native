import React { useEffect, useRef } from "react";
import { Animated, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { styles } from "./style";
export default function Splash() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      usenativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View style={{ opacity: fadeAnim }}>
      <LottieView
        source={require("../../assets/splash.json")}
        style={styles.splash}
        autoPlay
        loop
      />
    </Animated.View>
    </View>
  );
}
