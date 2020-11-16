import React from "react";
import {onPress,title, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "darkred",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      margin: 50,
      marginLeft:110,
      width:100,
    },
    appButtonText: {
      fontSize: 15,
      color: "white",
      alignSelf: "center",
      fontWeight:'bold',
    }
  });

  export default AppButton;