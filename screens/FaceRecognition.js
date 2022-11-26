import { View, Text,Image } from 'react-native'
import React from 'react'
import { StyleSheet,TouchableOpacity } from 'react-native'
import NaviagtionBar from '../components/NaviagtionBar';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
export default function FaceRecognition() {
    const navigation =useNavigation()
  return (
    <View style={styles.container}>

        <View style={styles.UpperContainer}>
          {/* a circular image */}
          <Image style={styles.circleImage} source={require('../asset/RectangleCopy5.png')} />

            <Image style={styles.image} source={require('../asset/Group.png')} />

          <CustomButton text="Scan your face" onPress={() => { 
          navigation.navigate('MPin')
          }} />
        
        </View>
      <NaviagtionBar
        activeNumber={2}
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
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
 

  },
  circleImage: {
    width: 240,
    height: 240,
    borderRadius: 120,
    marginTop: 20,
  },
    
  MiddleSection: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',

  },
  image:{
    width: 100,
    height: 100,
  }


})