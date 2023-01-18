import React from 'react';
import {View, Text} from 'react-native';
import Btn from './Btn';
import {darkGreen} from './Constants';

const Home = (props) => {
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%',}}>
      <Text
        style={{
          marginHorizontal: 40,
          marginVertical: 150,
          color: 'green',
          fontSize: 50,
          fontWeight: 'bold',
          justifyContent:'center',
          alignSelf:'center',
          textAlign:'center'
        }}>
        WelCome to App.
      </Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Btn
          bgColor={darkGreen}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor={darkGreen}
          textColor="white"
          btnLabel="Signup"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};

export default Home;
