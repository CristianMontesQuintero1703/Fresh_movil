import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import iconDiente from "../../../assets/favicon.png";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Image source={iconDiente} style={styles.leftImage} />
      <Text style={styles.titleblue}> Fresh</Text>
      <Text style={styles.title}> Smile</Text>
      <Text style={styles.titleblue2}> Cmills</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "black",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    // marginLeft: 5,
    // marginRight: 5,
  },
  header2: {
    marginLeft: 20,
  },
  leftImage: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  titleblue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5FFDFF",
    marginLeft: 22,
  },
  titleblue2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5FFDFF",
  },
  rightImagesContainer: {

    right: 16,
    flexDirection: "row",
  },
  rightImage: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
});

export default Header;