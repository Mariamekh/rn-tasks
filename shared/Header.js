import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "../constants/defaultStyles";

import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Header = ({ isMenuButtonVisible = false }) => {
  //   const openMenu = () => {
  //     navigation.openDrawer();
  //   };
  const navigation = useNavigation();

  const getHeaderLeftIcon = () =>
    isMenuButtonVisible ? (
      <TouchableHighlight>
        <MaterialIcons
          name='menu'
          size={28}
          onPress={() => navigation.toggleDrawer()}
          style={styles.icon}
        />
      </TouchableHighlight>
    ) : (
      <TouchableHighlight
        style={styles.iconButton}
        underlayColor={defaultStyles.colors.pressLink}
        onPress={() => navigation.goBack()}>
        <Ionicons name='md-arrow-back' size={28} style={styles.icon} />
      </TouchableHighlight>
    );

  return (
    <View style={styles.header}>
      {getHeaderLeftIcon()}
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

export default Header;

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
