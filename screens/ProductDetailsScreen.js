import React, { useEffect, useState } from "react";

import { View, Button, Text } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

import Loading from "../components/Loading";
import ProductDetails from "../components/ProductDetails";
import ProductModal from "../components/ProductModal";
import Header from "../shared/Header";

const ProductDetailsScreen = ({ route }) => {
  const [item, setItem] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProductItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
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

  const onAddToCartHandler = () => {
    setIsModalVisible(true);
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
      })
    );
  };

  return (
    <>
      <Header />
      <ProductDetails item={item} />
      <Button
        onPress={onAddToCartHandler}
        style={{ backgroundColor: "#0E86D4" }}
        title='Add to Cart'
      />
      <ProductModal
        modalType='success'
        description='Product Added To Your Cart'
        buttonTitle='OK'
        isButtonVisible
        setIsVisible={setIsModalVisible}
        isVisible={isModalVisible}
      />
    </>
  );
};

export default ProductDetailsScreen;
