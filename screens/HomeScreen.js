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
import NetInfo from "@react-native-community/netinfo";

import Header from "../shared/Header";
import Product from "../components/Product";
import Loading from "../components/Loading";
import axios from "axios";
import { Searchbar } from "react-native-paper";
import ProductModal from "../components/ProductModal";

const HomeScreen = () => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [offlineStatus, setOfflineStatus] = useState(false);

  const navigation = useNavigation();

  const onChangeSearch = (query) => setSearchQuery(query);

  const loadProductItems = async () => {
    try {
      setIsLoading(true);
      axios
        .get("https://demo.spreecommerce.org/api/v2/storefront/products")
        .then(({ data }) => {
          setItems(data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      Alert.alert("Error", error.message, [{ text: "OK" }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const offline = !(state.isConnected && state.isInternetReachable);

      setOfflineStatus(offline);
    });

    loadProductItems();

    return () => removeNetInfoSubscription();
  }, []);

  console.log(items, offlineStatus, "items");

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
      {offlineStatus ? (
        <ProductModal
          modalType='warning'
          description='Your Internet Connection was lost'
          buttonTitle='Try again...'
          isButtonVisible
          setIsVisible={setOfflineStatus}
          isVisible={offlineStatus}
        />
      ) : null}
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
        keyExtractor={(item) => item.id}
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
