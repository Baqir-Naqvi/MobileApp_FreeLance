import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import NaviagtionBar from '../components/NaviagtionBar';
import CustomButton from '../components/CustomButton';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Documents() {
    const navigation =useNavigation()
    const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'PeaceandLove': require('../assets/fonts/Peace-and-Love.ttf'),
            });
            setFontLoaded(true);
        }
        loadFont();
    }, []);
    if (!fontLoaded) {
        return null;
    }
  return (


    <View style={styles.container}>
        <View style={styles.UpperContainer}>

            {/* a circle view with text in center */}
            <View style={styles.circle}>
                <Text style={styles.circleText}>Scan Emirates</Text>
                <Text style={styles.circleText}>ID</Text>
            </View>
            <View style={styles.MiddleSection}>
            <Text style={styles.MiddleTxt}>OR</Text>
            {/* Image */}
            <Image style={styles.image} source={require('../assets/upload-documents.png')}/>
            </View>
 
                  <CustomButton text="Upload Emirates ID" 
                    onPress={() => navigation.navigate('FaceRecognition')}
                  />
                 
            </View>
          <NaviagtionBar
              activeNumber={1}
          />
   
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        },
    UpperContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        },
    circle: {
        height: 250,
        width: 250,
        borderRadius: 125,
        backgroundColor: '#FF3D81',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        },
    circleText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'medium',
        fontFamily:'PeaceandLove',
        },
    MiddleTxt: {
        fontFamily:'PeaceandLove',
        color: '#FF3D81',
        fontSize: 80,
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf: 'center',
        marginRight: 10,
        },
  
        MiddleSection: {
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%',
            height: 220,
         
            },
        image: {
            alignSelf: 'flex-end',
            height: 220,           
        },
        
})