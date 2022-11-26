import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



export default function Homescreen() {
  const navigation = useNavigation()
 

  return (
    <SafeAreaView className="bg-white pt-5">
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}