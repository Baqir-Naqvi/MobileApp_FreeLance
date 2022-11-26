import { View, Text,TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'
import NaviagtionBar from '../components/NaviagtionBar'
import { useState,useRef,useEffect } from 'react'
import PinView from 'react-native-pin-view';
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';
export default function MPin() {

  const navigation =useNavigation()
  const pinView = useRef(null)
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const [enteredPin, setEnteredPin] = useState("")
  const [showCompletedButton, setShowCompletedButton] = useState(false)
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true)
    } else {
      setShowRemoveButton(false)
    }
    if (enteredPin.length === 8) {
      setShowCompletedButton(true)
    } else {
      setShowCompletedButton(false)
    }
  }, [enteredPin])
  return (
    <View style={styles.container}>
      
      {/* Image Section */}
      <View style={styles.ImageSection}>
      <Image source={require('../assets/Group.png')} style={styles.backgroundImage1} />
        <Image source={require('../assets/Component1.png')} style={styles.backgroundImage2} />
      </View>

      {/* Text Section */}
      <View style={styles.TextSection}>
        <Text style={styles.Title}>Create your account MPin</Text>
        <Text style={styles.Subtitle}>Enter a unique five digits numbers easy to</Text>
        <Text style={styles.Subtitle2}>remember</Text>
      
      </View>
      <View style={styles.PinView}>
        <PinView
          inputSize={20}
          ref={pinView}
          pinLength={5}
          buttonSize={40}
          onValueChange={value => setEnteredPin(value)}
          buttonAreaStyle={{
            marginHorizontal: 30,
            justifyContent: 'space-around',

          }}
          inputAreaStyle={{
            width: '50%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          inputViewEmptyStyle={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#000",
          }}
          inputViewFilledStyle={{
            backgroundColor: "#000",
          }}
          buttonViewStyle={{
            backgroundColor: "#FF3D81",
            height: 40,
            width: 40,
            borderRadius: 20,
            alignSelf: 'center',
          }}
          buttonTextStyle={{
            color: "#FFF",
          }}
          customRightButtonViewStyle={{
            backgroundColor: "#B7B2FF",
            height: 40,
            width: 40,
            borderRadius: 20,
          }}
          onButtonPress={key => {
            if (key === "custom_left") {
              pinView.current.clear()
            }
            if (key === "custom_right") {
              navigation.navigate('Avatar')
            }
          }}
          customLeftButton={<Icon name={"ios-backspace"} size={40} color={"#000"} />}
          customRightButton={<Icon name={"checkmark"} size={40} color={"#FFF"} />}
        />
      </View>
      <View>

      </View>
      <NaviagtionBar
      activeNumber={3}
      />
          
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  ImageSection: {
    flexDirection: 'row',
    // alignItems: 'right',
    justifyContent: 'flex-end',
    width: '80%',  
  },
  backgroundImage1: {
    height:114,
    width:108,
    zIndex: -1,
    position: 'absolute',
    left:0,  
    top:"25%",
  },
  backgroundImage2: {
    height:245,
    width:226,
    right:0,
  },
  TextSection: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PinView:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  Title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8E8E93',
    height: 24,

  },
  Subtitle: {
    fontSize: 12,
    color: '#8E8E93', 
    paddingTop: 10,
  },
  Subtitle2: {
    fontSize: 12,
    color: '#8E8E93', 
  },

  




})