import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TimerFunc from "../ViewModels/timerFunc";

const Clock = () => {
  const currentTime = 1500;

  return (
    <View style={styles.container}>
      <View>
        <Text>This is the progress bar shows</Text>
        <TimerFunc setTime={currentTime} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
    height: "45%",
    width: "98%",
    borderWidth: 0.2,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {},
});

export default Clock;
