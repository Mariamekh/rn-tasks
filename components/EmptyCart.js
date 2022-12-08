import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const EmptyCart = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Your cart is Empty</Text>
      <Text>Add product in your cart now</Text>
      <Button
        onPress={() => navigation.navigate("HomeScreen")}
        title='Shop Now'
      />
    </View>
  );
};

export default EmptyCart;
