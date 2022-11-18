import React from 'react';
import {StyleSheet, ScrollView, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {products} from '../mocks/products';

import {ItemCard} from './ItemCard';

const ItemDetail = () => {
  return (
    <ScrollView>
      {/* <ItemCard product={products[0].items[0]} isExtend /> */}
      <Text>{products[0].items[0].description}</Text>
    </ScrollView>
  );
};

export default ItemDetail;
