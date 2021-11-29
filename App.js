import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const App = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {/*React native default button*/}
        <Button onPress={() => alert("button")} title="presse me" />

        {/*React native custom buttom with color*/}
        <Button
          onPress={() => alert("button")}
          title="presse me"
          color="#f194ff"
        />
      </View>

      {/*use disabled props with react hooks*/}
      <View style={styles.body_row}>
        <Button
          onPress={() => alert("now i am free")}
          title="button 1"
          disabled={disabled}
        />
        <Button
          onPress={() => alert("button")}
          title="enable button 1"
          onPress={() => setDisabled(false)}
        />
      </View>
    </View>
  );
};

export default App;

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
  body_row: {
    width: "60%",
    height: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
