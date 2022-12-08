import { View, Text } from "react-native";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { Button, Card, Input } from "react-native-elements";
import { login } from "../utils/services";
import { TextInput } from "react-native-paper";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const mutation = useMutation(login, {
    onSuccess: () => navigation.navigate("HomeScreen"),
  });
  console.log(username, password);
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          color: "#0E86D4",
          fontSize: 48,
          fontWeight: "bold",
        }}>
        Ecommerce Store
      </Text>
      <Card>
        {mutation.isError && (
          <Text>An error occurred: {mutation.error.message}</Text>
        )}
        <TextInput
          mode='outlined'
          label='Username'
          placeholder='Username'
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          mode='outlined'
          label='Password'
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title='Sign in'
          onPress={() =>
            mutation.mutate({
              username,
              password,
            })
          }
          disabled={false}
          loading={mutation.isLoading}
          style={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: mutation.isLoading && 40,
            marginRight: mutation.isLoading && 40,
          }}
        />
        <Button
          title='New here? Sign Up'
          onPress={() => navigation.navigate("RegisterScreen")}
        />
      </Card>
    </View>
  );
};

export default LoginScreen;
