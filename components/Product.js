import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { defaultStyles } from "../constants/defaultStyles";

const Product = ({ product }) => {
  //   const openMenu = () => {
  //     navigation.openDrawer();
  //   };

  const truncateTitle = (title) => {
    if (title.length >= 20) {
      return title.substring(0, 20) + "...";
    }

    return title;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{truncateTitle(product.title)}</Text>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.oldPrice}>{product.rating.rate}</Text>
        <Text style={styles.discount}>{`${product.rating.count}% Off`}</Text>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: defaultStyles.padding.medium,
    marginBottom: defaultStyles.margin.small,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: defaultStyles.colors.transparent,
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    marginTop: defaultStyles.margin.small,
  },
  image: {
    height: 120,
    width: 100,
  },
  title: {
    fontSize: defaultStyles.fontSize.small,
  },
  priceWrapper: {
    flexDirection: "row",
  },
  price: {
    fontWeight: "bold",
  },
  oldPrice: {
    marginLeft: defaultStyles.margin.medium,
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
  discount: {
    marginLeft: defaultStyles.margin.medium,
    color: defaultStyles.colors.blue,
    fontWeight: "bold",
  },
});
