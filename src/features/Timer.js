import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { CountDown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";
import { Timing } from "./Timing";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={style.timerContainer}>
      <View style={style.countdown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={style.title}>Focusing on</Text>
          <Text style={style.task}> {focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={style.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={style.buttonWraper}>
        {!isStarted && (
          <RoundedButton onPress={() => setIsStarted(true)} title="start" />
        )}
        {isStarted && (
          <RoundedButton onPress={() => setIsStarted(false)} title="pause" />
        )}
      </View>
      <View style={style.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  timerContainer: {
    flex: 1,
    // backgroundColor: "green",
  },
  countdown: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxl,
    flexDirection: "row",
    // backgroundColor: "blue",
  },
  clearSubjectWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonWraper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    textAlign: "center",
    color: colors.white,
  },
});
