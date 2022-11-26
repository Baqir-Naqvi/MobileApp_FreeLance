import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet,TouchableOpacity } from 'react-native'

export default function NaviagtionBar({activeNumber}) {
  return (

      <View style={styles.bottomNavbar}>
            <View style={styles.circleLine}>
                <View 
                style={activeNumber === 1 ? styles.circleLine2 : styles.circleLine1}/>
                <View 
                style={activeNumber === 2 ? styles.circleLine2 : styles.circleLine1}/>
                <View 
                style={activeNumber === 3 ? styles.circleLine2 : styles.circleLine1}/>
                <View 
                style={activeNumber === 4 ? styles.circleLine2 : styles.circleLine1}/>
                </View>
    </View>
  )
}
const styles = StyleSheet.create({
    bottomNavbar: {
        bottom: 0,
        width: '100%',
        height: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 0,
        },
    circleLine: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
        alignSelf: 'center',

        },
    circleLine1: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderColor:'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        },
    circleLine2: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },



    })
