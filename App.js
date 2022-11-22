import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  SafeAreaView,
} from "react-native";

import Header from "./shared/Header";
import Product from "./components/Product";

const App = () => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const loadProductItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const json = await response.json();

        setItems(json);
      } catch (error) {
        Alert.alert("Error", error.message, [{ text: "OK" }]);
      }
    };

    loadProductItems();
  }, []);

  console.log(items, "items");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Header />
      <FlatList
        numColumns={2}
        data={items}
        renderItem={({ item }) => <Product product={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
