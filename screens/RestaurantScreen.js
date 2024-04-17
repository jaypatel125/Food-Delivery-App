import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import { useNavigation } from "@react-navigation/native";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import { StatusBar } from "expo-status-bar";

export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  let restaurant = params;

  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={restaurant.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className=" text-3xl font-bold">{restaurant.name}</Text>
            <View className="flex-row space-x-1 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/staricon.png")}
                  className="h-4 w-4"
                />
                <Text className="text-gray-700">{restaurant.rating}</Text>
                <Text className="text-gray-700">
                  ({restaurant.reviews} reviews)
                  <Text className="font-semibold">
                    {" "}
                    {restaurant.categories}
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin height="20" width="20" color="gray" />
                <Text className="text-gray-700 text-xs">
                  Nearby {restaurant.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{restaurant.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {restaurant.dishes.map((dish, index) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
