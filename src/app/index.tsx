import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";

import Header from "../../components/header";
import Body from "../../components/body";

export default class Index extends React.Component {
  mostrarHeader: boolean;
  mostrarBtn: boolean;
  plataforma: string;

  constructor(props: boolean) {
    super(props);
    this.mostrarHeader = true;
    this.mostrarBtn = true;
    this.plataforma = Platform.OS;
  }

  showContent() {
    var conteudo = "";
    if (Platform.OS == "android") {
      conteudo = "Olá, você esta utilizando Android!";
    } else {
      conteudo = "Olá, você é usuário IOS!";
    }

    if (this.mostrarHeader) {
      return (
        <ScrollView style={styles.container}>
          <Header />
          <Text>{conteudo}</Text>
          <Body />
        </ScrollView>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <Body />
        </ScrollView>
      );
    }
  }

  render() {
    return (
      <ScrollView>
        <StatusBar hidden />
        {this.showContent()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});

