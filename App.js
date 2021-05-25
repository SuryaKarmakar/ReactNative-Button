import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Button onPress={() => alert("button")} title="presse me" />
        <Button
          onPress={() => alert("button")}
          title="presse me"
          color="#f194ff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: "60%",
    height: "10%",
    justifyContent: "space-between",
  },
});
