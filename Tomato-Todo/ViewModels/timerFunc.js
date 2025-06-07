import { useState } from "react";
import { Text, Button } from "react-native";
const TimerFunc = (props) => {
  var timerNumber = props.currentTime;

  const [isTimerStart, setTimer] = useState(false);

  const startTimer = () => {
    setTimer(!isTimerStart);
  };

  const timerRuning = () => {
    timerNumber = props.currentTime;
    if (isTimerStart == false) {
      setTimer();
      const interval = setInterval(() => {
        if (timerNumber >= 0) {
          console.log("Current time is " + timerNumber);
          timerNumber--;
        } else {
          console.log("You dont have  time");
          clearInterval(interval);
          setTimer();
        }
      }, 1000);
    }
  };

  return (
    <>
      <Text>{timerNumber}</Text>
      <Button title="Start" onPress={timerRuning} />
    </>
  );
};

export default TimerFunc;
