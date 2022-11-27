import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const FullCart = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Your cart is Full</Text>
      <Button onPress={() => navigation.navigate("Home")} title='Proceed' />
    </View>
  );
};

export default FullCart;
