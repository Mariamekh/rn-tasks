import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import ProductDetailsScreen from "./ProductDetailsScreen";
import DrawerNavigation from "../components/DrawerNavigation";
import MyCart from "./MyCart";
import { ThemeProvider } from "react-native-elements";

const queryClient = new QueryClient();
// Root Stack
const Stack = createNativeStackNavigator();

// Auth Stack includes screens presented to non authenticated user
const AuthStack = createNativeStackNavigator();

// Home stack includes authenticated stack for the uesr
const HomeStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='LoginScreen' component={LoginScreen} />
      <AuthStack.Screen name='RegisterScreen' component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

const Application = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
      <Stack.Screen name='MyCart' component={MyCart} />
    </HomeStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Auth' component={Auth} />
            <Stack.Screen name='Application' component={Application} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Navigation;
