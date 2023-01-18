import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Btn = ({bgColor, btnLabel, textColor, Press}) => {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 20,
        alignItems: 'center',
        width:'75%',
        marginTop:40,
      }}>
      <Text style={{color: textColor, fontSize:25, fontWeight:'bold',padding:8}}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
