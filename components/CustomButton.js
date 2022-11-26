import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet,TouchableOpacity } from 'react-native'
import * as Font from 'expo-font';
import { useEffect, useState } from 'react'

export default function CustomButton({text, onPress}) {
    const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'PeaceandLove': require('../asset/fonts/PeaceandLove.ttf'),
            });
            setFontLoaded(true);
        }
        loadFont();
    }, []);
    if (!fontLoaded) {
        return null;
    }
  return (
      <TouchableOpacity style={styles.button}
        onPress={onPress}
      >
          <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF3D81',
        width: 300,
        height: 58,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    buttonText: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'medium',
        fontFamily: 'PeaceandLove',
    },
    })