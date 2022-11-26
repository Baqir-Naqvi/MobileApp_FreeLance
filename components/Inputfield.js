import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'


export default function Inputfield({ placeholder, secureTextEntry, onChangeText, value, iconname }) {
   
    return (

        <View className='flex-row'>
            <Text className='pt-2'>
                <Icon name={iconname} size={25} color="black" />
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}

            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 250,
        //bottom border
        borderBottomWidth: 1,
        //set light grey color
        borderBottomColor: '#ddd',
        fontSize: 15,
        fontWeight: 'bold',
        //set grey color
        color: '#333',
        padding: 5,


    }
})
