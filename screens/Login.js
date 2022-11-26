import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Inputfield from './../components/Inputfield';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation=useNavigation();
  return (

    <View style={styles.container}>
    {/* <View style={styles.container}> */}
        <View style={styles.UpperSection}>
        {/* Title section */}
        <View style={styles.title}>
            <Text style={styles.titleText}>Welcome{'\n'} Back.</Text>
        </View>
        {/* Input section */}
        <View style={styles.input}>
            <Inputfield
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                iconname="mail" 
            />
            <Inputfield
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                iconname="lock"
            />
        </View>
        {/* Remember me */}
        <View style={styles.rememberMe}>    
        <Icon name='checkmark' size={25} color="black" />
            <Text style={styles.rememberMeText}>Remember me</Text>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>
        {/* Login button */}
        <View style={styles.loginButton}>
            <TouchableOpacity style={styles.loginButtonTouch}
            onPress={()=>{navigation.navigate('Documents')}}
            >
                <Text style={styles.loginButtonText}>LogIn</Text>
            </TouchableOpacity>
        </View>
          </View>
        {/* Lower section */}
        <View style={styles.lowerSection}>
            <Image
                source={require('../asset/Group2.png')}
                style={styles.lowerSectionImage}
            />
            {/* Sign up Text on Image */}
            <View style={styles.lowerSectionText}>
                <Text style={styles.lowerSectionText1}>Don't have an account?</Text>
                <TouchableOpacity>
                <Text style={styles.lowerSectionText2}>Sign Up</Text>
                </TouchableOpacity>
            </View>
           
        </View>
      
    {/* </View> */}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    UpperSection: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    title: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'left',
        width: '100%',
        paddingLeft: 30,
        
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rememberMe: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginVertical: 10,
        
    },
    rememberMeText: {
        fontSize: 17,
    },
    forgotPasswordText: {
        fontSize: 17,
        color: '#3424C7',
    },
    lowerSection: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lowerSectionImage: {
        width: '80%',
        height:'100%',
        resizeMode: 'cover',
    },
    lowerSectionText: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        transform: [{ translateX: -50 }, { translateY: -30 }],
        flexDirection: 'column',
    },
    lowerSectionText1: {
        fontSize: 16,
        color: '#000',
    },
    lowerSectionText2: {
        fontSize: 17,
        color: '#3424C7',
        alignSelf: 'flex-end',
    },
    loginButton: {
        flex: 1,
        width: '100%',
        alignItems: 'left',
        justifyContent: 'left',
        paddingLeft: 30,
    },
    loginButtonTouch: {
        backgroundColor: '#FF3D81',
        width: '40%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

   
    


})