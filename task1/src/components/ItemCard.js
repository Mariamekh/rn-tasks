import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {products} from '../mocks/products';

const ItemCard = () => {
  return (
    <View>
      <View>
        <Image source={products[0].items[0].images[0].source} />
      </View>
      {/* {isExtend && (
        <View>
          <Text>In Stock</Text>
        </View>
      )} */}
      <Text>{products[0].items[0].name}</Text>
      <View>
        <Text>{products[0].items[0].price}</Text>
        <Text>{products[0].items[0].oldPrice}</Text>
        <Text>{`${products[0].items[0].discount}% Off`}</Text>
      </View>
    </View>
  );
};

export default ItemCard;
