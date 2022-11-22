import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "../constants/defaultStyles";

const Header = ({ navigation }) => {
  //   const openMenu = () => {
  //     navigation.openDrawer();
  //   };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name='menu'
        size={28}
        // onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>Ecommerce Store</Text>
      </View>
      <Ionicons
        name='cart'
        size={28}
        // onPress={openMenu}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 70,
    padding: defaultStyles.padding.medium,
    backgroundColor: "#0E86D4",
    color: "#fff",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
  },
  icon: {
    color: "#fff",
  },
});

export default Header;
