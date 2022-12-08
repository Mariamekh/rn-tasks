import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, Card, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "react-query";
import { TextInput } from "react-native-paper";

import { register } from "../utils/services";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const mutation = useMutation(register, {
    onSuccess: () => {
      navigation.navigate("LoginScreen");
    },
  });

  return (
    <View>
      <Card>
        <Text
          style={{
            textAlign: "center",
            color: "#0E86D4",
            fontSize: 48,
            fontWeight: "bold",
          }}>
          Ecommerce Store
        </Text>
        {mutation.iserror && (
          <Text>An error Occured: {mutation.error.message}</Text>
        )}
        <TextInput
          label='Email'
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          mode='outlined'
          label='Username'
          placeholder='Username'
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          mode='outlined'
          secureTextEntry
          label='Password'
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          mode='outlined'
          label='Confirm password'
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <Button
          title='Register'
          onPress={() =>
            mutation.mutate({
              email,
              username,
              password,
              confirmPassword,
            })
          }
          style={{ marginTop: 20, marginBottom: 20 }}
          disabled={!username || !email || password !== confirmPassword}
          loading={mutation.isLoading}
        />
        <Button
          title='Already have account? Sign in'
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </Card>
    </View>
  );
};

export default RegisterScreen;
