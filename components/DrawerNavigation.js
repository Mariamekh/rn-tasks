import HomeScreen from "../screens/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView style={{ padding: 25 }} {...props}>
      <Text
        style={{
          color: "#0E86D4",
          fontSize: 36,
          paddingBottom: 50,
          fontWeight: "bold",
        }}>
        Ecommerce Store
      </Text>
      <Text
        style={{
          paddingBottom: 10,
          color: "gray",
          fontSize: 18,
          fontWeight: "bold",
        }}>
        My account
      </Text>
      <DrawerItemList {...props} />
      <DrawerItem label='Home' />
      <DrawerItem
        onPress={() => navigation.navigate("HomeScreen")}
        label='My Wish List'
      />
      <DrawerItem
        onPress={() => navigation.navigate("HomeScreen")}
        label='My Cart'
      />
      <DrawerItem
        onPress={() => navigation.navigate("HomeScreen")}
        label='My Orders'
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      // useLegacyImplementation={false}
      initialRouteName='Home'
      backBehavior='history'
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='My Profile' component={HomeScreen} />
      {/*
      // <Drawer.Screen name='My Wish List' component={HomeScreen} />
      // <Drawer.Screen name='My Cart' component={ProductDetailsScreen} />
      // <Drawer.Screen name='My Orders' component={HomeScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
