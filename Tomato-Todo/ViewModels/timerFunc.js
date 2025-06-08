import { useState, useEffect, use } from "react";
import { Text, Button } from "react-native";
import CountDown from "react-native-countdown-component";

const TimerFunc = (props) => {
  const currentTime = props.setTime;
  const [isRunning, setRunning] = useState(false);
  const [isReset, setReset] = useState(false);

  const timerSwitch = () => {
    setRunning(!isRunning);
  };

  const resetTimer = () => {
    setReset;
  };


  return (
    <>
      <CountDown until={currentTime} running={isRunning} onPress={() => {}} />
      <Button title="Start" onPress={timerSwitch} />
    </>
  );
};

export default TimerFunc;
