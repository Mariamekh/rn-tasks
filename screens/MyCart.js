import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import FullCart from "../components/FullCart";
import Header from "../shared/Header";

const MyCart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart, "cart");
  return (
    <View>
      <Header title='My Cart' />
      {cart ? <FullCart /> : <EmptyCart />}
    </View>
  );
};

export default MyCart;
