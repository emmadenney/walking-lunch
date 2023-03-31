import CountDown from "react-native-countdown-component";
import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Alert } from "react-native";

export default function StartTimer({
  setSecondsLeft,
  totalDuration,
  secondsLeft,
  lastLegWalkingDuration,
}) {
  useEffect(() => {
    setSecondsLeft(totalDuration);
  }, []);

  useEffect(() => {
    if (secondsLeft === lastLegWalkingDuration * 60) {
      Alert.alert(
        `You should start walking back to the office now, you have ${lastLegWalkingDuration} minutes left!`
      );
    }
  }, [secondsLeft, lastLegWalkingDuration]);

  // const handleReset = () => {
  //   setTotalDuration(0);
  //   setShowSetMinsForm(true);
  //   setShowTimer(false);
  //   setSecondsLeft(0);
  //   setSliderValue(0);
  // };
  // ^^ NOT BEING USED YET

  return (
    <View>
      <Text>Time left: </Text>
      <CountDown
        until={totalDuration}
        timeToShow={["M", "S"]}
        onChange={() => setSecondsLeft((currSecs) => currSecs - 1)}
        size={20}
      />
      {/* <Button title={“Reset timer”} onPress={handleReset}></Button> */}
    </View>
  );
}
