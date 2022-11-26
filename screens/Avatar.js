import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import NaviagtionBar from '../components/NaviagtionBar';
import { useNavigation } from '@react-navigation/native';

export default function Avatar() {
  const navigation=useNavigation()
  return (

    <View style={styles.container}>
        {/* Upper section for images */}
        <View style={styles.UpperContainer}>

            <View style={styles.leftMainImageContainer}>
              <Image style={styles.mainimage} source={require('../assets/Rectangle-1.png')} />
            </View>

            <View style={styles.sideImageContainer}>
              <Image style={styles.sideImage1} source={require('../assets/RectangleCopy3.png')} />
              <Image style={styles.sideImage2} source={require('../assets/RectangleCopy4.png')} />
            </View>

        </View>
        <View style={styles.UpperContainer}>

            <View style={styles.sideImageContainer2}>
          <Image style={styles.sideImage1} source={require('../assets/RectangleCopy5.png')} />
          <Image style={styles.sideImage2} source={require('../assets/RectangleCopy6.png')} />
            </View>

            <View style={styles.leftMainImageContainer}>
                <Image style={styles.mainimage2} source={require('../assets/RectangleCopy.png')} />
            </View>

        </View>

        {/* display 3 images in row */}
        <View style={styles.MiddleSection}>
            <Image style={styles.image} source={require('../assets/Rectangle.png')} />
        <Image style={styles.image} source={require('../assets/RectangleCopy4.png')} />
        <Image style={styles.image} source={require('../assets/RectangleCopy9.png')} />
          </View>
          <View style={styles.ButtonContainer}>
          <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Congrats')
          }}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <NaviagtionBar 
        activeNumber={4}
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
    height: '80%'
    
  },
  UpperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    
  },
  leftMainImageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginHorizontal: 10,
    height:"95%",

  },
  mainimage: {
    width: 220,
    height: "100%",
    borderRadius: 4,
    marginLeft: 5
  },
  mainimage2:{
    width: 220,
    height:"100%",
    borderRadius: 4,
    marginRight: 7,
  },
  sideImageContainer: {
     backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginRight: 20,
    height:"100%"
  },
  sideImageContainer2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    marginLeft: 10,
    height:"100%",
    justifyContent: 'space-evenly',
  },

  sideImage1: {
    width: 105,
    height: "45%",
    borderRadius: 4,

  },
  sideImage2: {
    width: 105,
    height: "45%",
    borderRadius: 4,

  },
  MiddleSection:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    justifyContent: 'space-evenly',

  },
  image:{
    width: 105,
    height: 90,
    borderRadius: 4,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF3D81',
    height:66.7,
    width: 340,

  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  ButtonContainer:{
    borderColor:'black',
    height:78,
    width:355,
    borderTopColor:'black',
    borderTopWidth:4,
    borderRightWidth:4,
    paddingTop:10,
    paddingRight:10,
  },
 
})
 