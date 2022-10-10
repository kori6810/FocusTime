import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={style.title}>We've not focused yet! ㅠㅠ</Text>;
  const renderItem = ({ item }) => <Text style={style.item}> - {item}</Text>;
  return (
    <View style={style.conatiner}>
      <Text style={style.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const style = StyleSheet.create({
  conatiner: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: "boldS",
    // textAlign: "center",
  },
});
