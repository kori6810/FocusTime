import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={style.timingButton}>
        <RoundedButton onPress={() => onChangeTime(15)} title="15" size={75} />
      </View>
      <View style={style.timingButton}>
        <RoundedButton onPress={() => onChangeTime(30)} title="30" size={75} />
      </View>
      <View style={style.timingButton}>
        <RoundedButton onPress={() => onChangeTime(45)} title="45" size={75} />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});
