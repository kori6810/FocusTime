import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          style={style.textinput}
          onChangeText={setSubject}
          label="What do you want to focus?"
        />
        <View style={style.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  button: {
    justifyContent: "center",
  },
  textinput: {
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    padding: 25,
    flexDirection: "row",
  },
});
