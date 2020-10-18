import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function AddButton({ item, pressHandler }) {
  return(
    <TextInput style={styles.item} value={'Breakfast'}/>
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