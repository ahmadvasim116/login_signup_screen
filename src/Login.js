import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {black, white} from './Constants';
import TextFields from './TextFields';
import Btn from './Btn';

const Login = (props) => {
    return (
        <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 40,
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'green'}}>
              Login
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'green',
              height: 700,
              width: '100%',
              borderTopLeftRadius: 150,
              paddingVertical: 100,
              alignItems: 'center',
          
            }}>
            <Text style={{fontSize: 30, color: white, fontWeight: 'bold', marginBottom:50 }}>
              Login to Your Account
            </Text>
            <TextFields placeholder= "Enter Email / username" keyboardType={'email-address'}/>
            <TextFields placeholder= "Password" secureTextEntry={true}/>
            <View style={{alignItems:'flex-end', width:'70%'}}>
              <Text style={{color:white, fontWeight:'bold', fontSize:17}}>Forgot Password</Text>
            </View>
            <Btn textColor='green' bgColor={white} btnLabel="Login" Press={() => {alert('Login Successfully'); props.navigation.navigate('WelcomeScreen')}} />
            
            <View style={{flexDirection:'row', marginVertical:40}}>
            <Text style={{color:white, fontSize:20, fontWeight:'300', }}>Don't have an account ? </Text>   
            <TouchableOpacity Press={() => props.navigation.navigate('Signup')}>
            <Text style={{color: black, fontSize:20, fontWeight:'bold',}}>Signup</Text>
        </TouchableOpacity>
            </View>
          </View>
          
        </View>
      );
    }

export default Login;
