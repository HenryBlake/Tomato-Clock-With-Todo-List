import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TimerFunc from "../ViewModels/timerFunc";

const Clock = () => {
  return (
    <View style={styles.container}>
      {/* User will see the time pass by here */}
      <View>
        <Text>This is the progress bar shows</Text>
        <TimerFunc currentTime={5}/>
      </View>
      {/* User change their time setting here */}
      <Text>This is the time shows</Text>
      {/* Buttons control timer starts and ends */}
      {/* <Text>{isTimerStart}</Text> */}
      <View>
        {/* <Button title="start" /> */}
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
