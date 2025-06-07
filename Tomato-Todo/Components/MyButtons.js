import React, { useState } from 'react';
import { Button, View, StyleSheet,Text } from "react-native";


const MyButtons = () => {
  const [number, setNumber] = useState(0);

  return (
    <View>
      <Text>{number}</Text>
      <Button onPress={()=>setNumber(number+1)} title='Click' />
      <Button title='Reset' onPress={()=>setNumber(0)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 20,
  },
});

export default MyButtons;
