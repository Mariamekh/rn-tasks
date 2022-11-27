import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";
import ProductDetailsScreen from "./ProductDetailsScreen";
import DrawerNavigation from "../components/DrawerNavigation";
import MyCart from "./MyCart";

const Stack = createNativeStackNavigator();

// <Routes>....</Routes> => Stack.Navigator

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Home' component={DrawerNavigation} />
        <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
        <Stack.Screen name='Cart' component={MyCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
