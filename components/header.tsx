import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.view}>
      <Text style={styles.textStile}>Header App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "lightblue",
    padding: 20,
  },
  textStile: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
  },
});
