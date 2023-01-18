import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {black, white} from './Constants';
import TextFields from './TextFields';
import Btn from './Btn';

const Signup = props => {
  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 15,
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'green'}}>
          Register
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          height: 700,
          width: '100%',
          borderTopLeftRadius: 150,
          paddingVertical: 50,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: white,
            fontWeight: 'bold',
            marginBottom: 15,
          }}>
          Create New Account
        </Text>
        <TextFields placeholder="Full Name" />
        <TextFields placeholder="Enter Email" keyboardType={'email-address'} />
        <TextFields placeholder="Contact Number" keyboardType={'number'} />

        <TextFields placeholder="Password" secureTextEntry={true} />
        <TextFields placeholder="Confirm Password" secureTextEntry={true} />
        <View style={{flexDirection: 'row', width: '70%', marginTop:5, justifyContent:'center'}}>
          <Text style={{color: white}}>
            Sing in with
          </Text>
          <Text style={{color: black, fontWeight:'bold',}}> Terms & Condition</Text>
          
        </View>
        <View style={{flexDirection: 'row', width: '70%', marginTop:8, justifyContent:'center'}}>
          <Text style={{color: white}}>
            and
          </Text>
          <Text style={{color:black, fontWeight:'bold',}}> Privacy Policy.</Text>
          
        </View>
        <Btn
          textColor="green"
          bgColor={white}
          btnLabel="Signup"
          
          Press={() => { alert('Account Created'); props.navigation.navigate('Login')}}
        />

        <View style={{flexDirection: 'row', marginVertical: 8}}>
          <Text style={{color: white, fontSize: 20, fontWeight: '300'}}>
            Already have an account ?{' '}
          </Text>
          <TouchableOpacity Press={() => props.navigation.navigate('Login')}>
            <Text style={{color: black, fontSize: 20, fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
