import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";
import ProductDetailsScreen from "./ProductDetailsScreen";

const Stack = createNativeStackNavigator();

// <Routes>....</Routes> => Stack.Navigator

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{ title: "Product" }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
