import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {useEffect} from 'react'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


SplashScreen.preventAutoHideAsync();
export default function Welcome() {
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();
                await Font.loadAsync({
                    'Satoshi': require('../asset/fonts/Satoshi-Variable.ttf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                SplashScreen.hideAsync();
                console.log('SplashScreen.hideAsync()');
            }
        }
        loadResourcesAndDataAsync();
    }, []);


            
    const navigation=useNavigation()

    if (!SplashScreen.preventAutoHideAsync()) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.UpperSection}>
                <View style={styles.uppperheading}>
                     <Text style={styles.text}>Welcome to Eloy</Text>
                </View>
                <View style={styles.lowerheading}>
                    <Text style={styles.welcomeText}>Connect to </Text>
                   <Text style={styles.welcomeText }>Send & Receive</Text>
                </View>
            </View>

            <View style={styles.LowerSection}>
                {/* Login and Signup Buttons */}
                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.loginText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}
                    onPress={() => { navigation.navigate('Login')}}
                >
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>

                {/* Lower aggreement Text */}
                <View style={styles.aggreement}>
                    <Text style={styles.aggreementText}>
                        We do not own your private keys and cannot ccess your funds without your confirmation.
                    </Text>
                </View>
               
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color:"#8E8E93",
        // fontFamily: 'Satoshi',
    },
    welcomeText: {
        fontSize: 35,
        marginBottom: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        // fontFamily: 'Satoshi',

    },
    UpperSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    LowerSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 20,
    },
    loginButton: {
        backgroundColor:"#DED6D6",
        padding: 10,
        borderRadius: 5,
        height: 58,
        width: 325,
        borderRadius: 30,

    },
    loginText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 26,
       
    },
    signupButton: {
        backgroundColor: '#FF3D81',
        padding: 10,
        borderRadius: 5,
        height: 58,
        width: 325,
        borderRadius: 30,
        marginVertical: 10
    },
    aggreementText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#8E8E93',
        textAlign: 'center',
        // fontFamily: 'Satoshi',
    },
    uppperheading:{
        height: 28
    },
    lowerheading:{
        
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    aggreement: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height:36,
    }

    

    
})