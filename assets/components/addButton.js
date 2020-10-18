import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function AddButton({ value, changeHandler }) {

  return(
    <TextInput
      style={styles.item}
      onChangeText={(value) => changeHandler(value)}
      value={value}
      placeholder="Add activity"
    />
  )
}

const styles = StyleSheet.create({
  item:{
    padding: 16,
    marginTop: 16,
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
  }
})