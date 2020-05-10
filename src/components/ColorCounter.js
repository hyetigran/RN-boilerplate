import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = (props) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button title="Increase" onPress={props.onIncrease} />
      <Button title="Decrease" onPress={props.onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
