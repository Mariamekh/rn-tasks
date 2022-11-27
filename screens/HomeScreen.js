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
import axios from "axios";
import { Searchbar } from "react-native-paper";

const HomeScreen = () => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = useNavigation();

  const onChangeSearch = (query) => setSearchQuery(query);

  const loadProductItems = async () => {
    setIsLoading(true);

    try {
      // const options = {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "X-Spree-Order-Token": "",
      //   },
      // };

      // const response = await fetch(
      //   "https://demo.spreecommerce.org/api/v2/storefront/products",
      //   options
      // );

      //   .then((response) => response.json())
      //   .then((response) => console.log(response))
      //   .catch((err) => console.error(err));
      // const response = await fetch(
      //   "https://stoplight.io/mocks/spark-solutions/api-v2/3124960/api/v2/storefront/products",
      //   {
      //     method: "GET",
      //     mode: "same-origin",
      //     credentials: "include",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //   }
      // );
      const response = await fetch("https://fakestoreapi.com/products/");

      const json = await response.json();

      // const data = axios({
      //   method: "GET",
      //   url: "https://demo.spreecommerce.org/api/v2/storefront/products",
      //   responseType: "json",
      //   mode: "no-cors",
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Content-Type": "application/json",
      //   },
      //   withCredentials: true,
      //   credentials: "same-origin",
      // });

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
      <Header title='Ecommerce Store' isMenuButtonVisible />
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ width: "100%", margin: 20 }}
      />
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
