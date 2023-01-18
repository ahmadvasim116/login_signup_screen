import { View, Text } from 'react-native'
import React from 'react'
import { green } from '../Constants'

const WelcomeScreen = () => {
  return (
    <View style={{justifyContent:'center', alignItems:'center', marginVertical: 50}}>
      <Text style={{color:green, fontWeight:'bold', fontSize:40 }}>WelcomeScreen</Text>
    </View>
  )
}

export default WelcomeScreen