import React, { useEffect, useState } from "react";

import { View, Text } from "react-native";
import styled from "styled-components/native";
import { defaultStyles } from "../constants/defaultStyles";

const ProductImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const ProductText = styled.Text`
  font-size: 18px;
  line-height: 24px;
  padding-top: 4 ,
  paddingBottom: 4,
  marginBottom: 30,
  fontSize: 16,
`;

const ProductTitles = styled.Text`
  font-weight: bold,
  font-size: 18
`;

const ProductDetails = ({ item }) => {
  return (
    <View>
      <ProductImage source={{ uri: item.image }} />
      <Text>{item.title}</Text>
      <Text
        style={{
          fontSize: defaultStyles.fontSize.medium,
          fontWeight: "bold",
        }}>
        {item.price}
      </Text>
      <ProductTitles>Select Color</ProductTitles>
      <ProductTitles>Description</ProductTitles>
      <ProductText>{item.description}</ProductText>
    </View>
  );
};

export default ProductDetails;
