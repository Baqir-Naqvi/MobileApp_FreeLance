import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import React ,{useState,useEffect} from 'react'
import * as Font from 'expo-font';

export default function Congrats() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Satoshi': require('../asset/fonts/Satoshi-Variable.ttf'),
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
       <Image source={require('../asset/Groupmasked.png')} style={styles.backgroundImage} />
    
        <View style={styles.TopSection}>
          <Text style={styles.Title}>Congratulations!</Text>
          <Text style={styles.Subtitle}>You have created your Eloy </Text>
          <Text style={styles.Subtitle}>account!</Text>
        </View>
      <View style={styles.subContainer}>
        <View style={styles.BottomSection}>
          <Image source={require('../asset/RectangleCopy9.png')} style={styles.Image} />
          <View style={styles.Username}>
            <Text style={styles.UsernameText}>@HamzaJ17</Text>
          </View>
          <Text style={styles.PaymentLink}>
            www.eloy.ai/hamzaj17/payment-link/
          </Text>
          <View style={styles.InfoBox}>
            {/* Left side contains create image name and title */}
            <View style={styles.LeftSide}>
              <Image source={require('../asset/RectangleCopy9.png')} style={styles.ProfileImage} />
              <View style={styles.ProfileInfo}>
                <Text style={styles.ImageName}>Create</Text>
                <Text style={styles.ImageTitle}>Hamza</Text>
              </View>
            </View>

            {/* Right side contains create QR Code and title */}
          <View style={styles.RightSide}>
            <Image source={require('../asset/QRCode.png')} style={styles.ProfileImage} />
            <View style={styles.ProfileInfo}>
              <Text style={styles.ImageName}>QR Code</Text>
              <Text style={styles.ImageTitle}>Scan to pay</Text>
              </View>
            </View>
          </View>
        </View>
         
          </View>
      {/* Button to Send Money */}
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.ButtonText}>Lets Send Some Money!</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode:'stretch',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  subContainer: {
    flex:1,
    backgroundColor: 'white',
    margin: 20,
     justifyContent: 'space-between'
  },
  TopSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Satoshi',
  },
  Subtitle: {

    fontSize: 16,
    color: '#8E8E93',
    fontFamily: 'Satoshi',

  },
  BottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {

    height: 262,
    width: 255,
    borderRadius: 4,
    marginTop: 20,

  },
  Username: {
  height:34,
  width: 300,
  marginTop: 20,

  },
  UsernameText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Satoshi',
  },
  PaymentLink: {
    fontSize: 13,
    color: 'black',
    marginBottom: 20,
    fontFamily: 'Satoshi',
  },
  InfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  LeftSide: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ProfileImage:{
    height:40,
    width: 40,
  },
  RightSide: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ImageName: {
    fontSize: 12,
    fontWeight: 'medium',
    color: '#8E8E93 ',
    fontFamily: 'Satoshi',
  },
  ImageTitle: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Satoshi',
  },
  Button: {
    backgroundColor: 'black',
    borderRadius: 28,
    width: 335,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    // zIndex: -1,
    position: 'relative',

  },
  ButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Satoshi',
    
  },
  ProfileInfo: {
    height: 40,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  
  }
});