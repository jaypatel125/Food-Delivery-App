import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

export default function OrderPrepairingScreen() {
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate("Home");
    }, 3000);
  }, []);
  return <View className="flex-1 bg-white justify-center items-center"></View>;
}
