import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import styleExterno from "../styles";

export default function Body() {
  return (
    <View style={styles.view}>
      <View style={styleExterno.radius}>
      <Text style={styleExterno.fontStyle}>Lorem Title</Text>

      </View>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut iusto
        aliquam dolor officia, iste deleniti, nam minus porro cum culpa nesciunt
        commodi accusamus asperiores placeat, expedita dicta deserunt amet?
        Consequuntur, cum quisquam. Laborum quis obcaecati amet aspernatur
        perspiciatis explicabo rem ducimus incidunt necessitatibus eveniet,
        voluptates sequi facilis suscipit sit quae, quidem, sunt tenetur debitis
        quaerat officia eos doloremque dolorum! Excepturi aut tempora corrupti
        nemo dignissimos. Ipsa quod reiciendis quasi cupiditate. Veritatis et
        nam exercitationem, consequatur delectus repellat, porro laudantium
        cupiditate obcaecati autem a, culpa necessitatibus optio quidem debitis!
        Esse?
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://via.assets.so/game.png?id=666&q=95&w=200&h=150&fit=fill",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    width: "100%",
    padding: 20,
  },
});
