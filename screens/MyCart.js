import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import FullCart from "../components/FullCart";

const MyCart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart, "cart");
  return <View>{cart.length ? <FullCart /> : <EmptyCart />}</View>;
};

export default MyCart;
