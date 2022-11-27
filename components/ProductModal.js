import {
  Modal,
  View,
  Text,
  Pressable,
  Vibration,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { defaultStyles } from "../constants/defaultStyles";

const ProductModal = ({
  modalType,
  description,
  buttonTitle,
  isVisible,
  setIsVisible,
  onPress,
  isBackButtonBlock,
  isButtonVisible,
}) => {
  // const vibratePattern = [1000, 2000, 3000];

  const getModalColor = () => {
    switch (modalType) {
      case "warning":
        return defaultStyles.colors.orange;
      case "success":
        return defaultStyles.colors.green;
      case "error":
        return defaultStyles.colors.red;
      default:
        return defaultStyles.colors.black;
    }
  };

  // useEffect(() => {
  //   if (isVisible) Vibration.vibrate(vibratePattern);
  // }, [isVisible]);

  return (
    <Modal animationType='fade' visible={isVisible} transparent>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={[styles.title, { color: getModalColor() }]}>
            {`${modalType}!`}
          </Text>
          <Text style={styles.description}>{description}</Text>
          {isButtonVisible && (
            <Pressable
              style={styles.button}
              onPress={() => {
                setIsVisible(false);
              }}>
              <Text style={styles.buttonText}>{buttonTitle}</Text>
            </Pressable>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ProductModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  wrapper: {
    width: 225,
    height: 225,
    borderRadius: 10,
    padding: defaultStyles.padding.medium,
    backgroundColor: defaultStyles.colors.white,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
  },

  title: {
    margin: defaultStyles.margin.medium,
    fontWeight: "bold",
    fontSize: defaultStyles.fontSize.large,
  },

  description: {
    fontSize: defaultStyles.fontSize.small,
    color: defaultStyles.colors.black,
    textAlign: "center",
  },

  button: {
    width: 200,
    backgroundColor: defaultStyles.colors.blue,
    margin: defaultStyles.margin.medium,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },

  buttonText: {
    color: defaultStyles.colors.white,
    textTransform: "uppercase",
    fontSize: defaultStyles.fontSize.medium,
    fontWeight: "bold",
  },
});
