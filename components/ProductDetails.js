import React, { useEffect, useState } from "react";

import { View, Text } from "react-native";
import styled from "styled-components/native";

const ProductImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const ProductText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

const ProductDetails = ({ item }) => {
  return (
    <View>
      <ProductImage source={{ uri: item.image }} />
      <ProductText>{item.description}</ProductText>
    </View>
  );
};

export default ProductDetails;
