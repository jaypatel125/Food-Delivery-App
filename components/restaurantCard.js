import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({ restaurant }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...restaurant })}
    >
      <View
        style={{ shadowColor: themeColors.bgColor(0.2), shadowRadius: 7 }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={restaurant.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{restaurant.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/staricon.png")}
              className="h-4 w-4"
            />
            <Text className="text-gray-700">{restaurant.rating}</Text>
            <Text className="text-gray-700">
              ({restaurant.reviews} reviews)
              <Text className="font-semibold"> {restaurant.categories}</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin height="20" width="20" color="gray" />
            <Text className="text-gray-700 text-xs">
              Nearby {restaurant.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
