import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {darkGreen, white} from './Constants';

const TextFields = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 20, color: darkGreen, backgroundColor:white, paddingHorizontal: 15, marginVertical:10 , width:'75%'}}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default TextFields;
