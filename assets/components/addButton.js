import React from 'react';
import {StyleSheet,View,Button, TextInput} from 'react-native';

export default function AddButton({ value, changeHandler, buttonHandler }) {

  return(
    <View>
      <TextInput
        style={styles.item}
        onChangeText={(value) => changeHandler(value)}
        value={value}
        placeholder="Add activity"
      />
      <Button
        title="Add"
        onPress={() => buttonHandler(value)}
      />
    </View>
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