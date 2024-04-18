import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../themes";
import * as Icon from "react-native-feather";
import { useDispatch } from "react-redux";
import { emptyCart } from "../slices/cartSlice";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { restaurant } = route.params;

  const cancelOrder = () => {
    navigation.navigate("Home");
    dispatch(emptyCart());
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Map View  */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{ flex: 1 }}
        mapType="standard"
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.lng }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#555" }}>
            Estimated Arrival
          </Text>
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "#555" }}>
            20-30 mins
          </Text>
          <Text style={{ marginTop: 5, fontWeight: "bold", color: "#555" }}>
            Your order is on its way
          </Text>
        </View>
        <Image
          source={require("../assets/images/bikeguy2.png")}
          style={{ height: 100, width: 100 }}
        />
      </View>
      <View
        style={{
          backgroundColor: themeColors.bgColor(0.8),
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
          marginHorizontal: 5,
          borderRadius: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.4)",
            padding: 5,
            borderRadius: 50,
          }}
        >
          <Image
            style={{ height: 70, width: 70, borderRadius: 35 }}
            source={require("../assets/images/unknown.png")}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
            John Doe
          </Text>
          <Text style={{ fontWeight: "bold", color: "#fff" }}>Your Rider</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "#fff", padding: 10, borderRadius: 20 }}
          >
            <Icon.Phone
              fill={themeColors.bgColor(1)}
              stroke={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={cancelOrder}
            style={{
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 20,
              marginLeft: 10,
            }}
          >
            <Icon.X stroke={"red"} strokeWidth={4} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
