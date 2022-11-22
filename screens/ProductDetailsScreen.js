import React, { useEffect, useState } from "react";

import { View, ActivityIndicator, Text } from "react-native";
import Loading from "../components/Loading";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsScreen = ({ route }) => {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const { id } = route.params;
  // console.log(id, "id");
  useEffect(() => {
    const loadProductItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/1");
        const json = await response.json();

        setItem(json);
      } catch (error) {
        Alert.alert("Error", error.message, [{ text: "OK" }]);
      } finally {
        setIsLoading(false);
      }
    };

    loadProductItems();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  console.log(item, "item");
  return (
    <View>
      <ProductDetails item={item} />
    </View>
  );
};

export default ProductDetailsScreen;
