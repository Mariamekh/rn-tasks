import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../shared/Header";
import Product from "../components/Product";
import Loading from "../components/Loading";

const HomeScreen = () => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const loadProductItems = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const json = await response.json();

      setItems(json);
    } catch (error) {
      Alert.alert("Error", error.message, [{ text: "OK" }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProductItems();
  }, []);

  console.log(items, "items");

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header isMenuButtonVisible />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={loadProductItems} />
        }
        numColumns={2}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetails", {
                id: item.id,
              })
            }>
            <Product product={item} />
          </TouchableOpacity>
        )}
        // keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
