import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

import {Header, SearchBar} from 'react-native-elements';
import styled from 'styled-components/native';
import {NativeBaseProvider} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemCard from './components/ItemCard';
import ItemDetail from './components/ItemDetail';

import {products} from './mocks/products';

const HeaderTitle = styled.Text`
  color: white;
  font-size: 20px;
`;

const App = () => {
  const [items, setItems] = React.useState([]);

  // React.useEffect(() => {
  //   axios
  //     .get('https://demo.spreecommerce.org/api/v2/storefront/products/')
  //     .then(({data}) => {
  //       setItems(data);
  //     })
  //     .catch(error => Alert.alert('Error', error.message, [{text: 'OK'}]));
  // }, []);

  React.useEffect(() => {
    const loadAsyncStuff = async () => {
      try {
        const response = await fetch(
          'https://demo.spreecommerce.org/api/v2/storefront/products/',
          {method: 'GET', headers: {'Content-type': 'application/json'}},
        );
        const json = await response.json();

        setItems(json);
      } catch (error) {
        Alert.alert('Error', error.message, [{text: 'OK'}]);
      }
    };

    loadAsyncStuff();
  }, []);
console.log(items, 'items')
  return (
    <NativeBaseProvider>
      <StatusBar theme="auto" />
      <Header>
        <Ionicons name="menu" color="rgba(255, 255, 255, .9)" size={24} />
        <HeaderTitle>Ecommerce Store</HeaderTitle>
        <Ionicons name="cart" color="rgba(255, 255, 255, .9)" size={24} />
      </Header>
      <SearchBar />
      <ItemCard />
      {/* <ItemDetail /> */}
    </NativeBaseProvider>
  );
};

export default App;
