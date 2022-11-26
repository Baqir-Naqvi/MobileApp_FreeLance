import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Documents from './screens/Documents'
import { ContextProvider } from './utils/Context'
import FaceRecognition from './screens/FaceRecognition'
import MPin from './screens/MPin'
import Avatar from './screens/Avatar'
import Congrats from './screens/Congrats'

function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <ContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="MPin"
            component={MPin}
            options={{
              headerShown: true,
              headerTitle: 'Your MPin',
              headerBackTitleVisible: false,
              headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Documents"
            component={Documents}
            options={{
              headerShown: true,
              headerTitle: 'Documents',
              headerBackTitleVisible: false,
              headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name="FaceRecognition"
            component={FaceRecognition}
            options={{
              headerShown: true,
              headerTitle: 'Face Recognition',
              headerBackTitleVisible: false,
              headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name="Avatar"
            component={Avatar}
            options={{
              headerShown: true,
              headerTitle: 'Choose Your Eloy',
              headerBackTitleVisible: false,
              headerTintColor: 'black',
            }}
          />

          <Stack.Screen
            name="Congrats"
            component={Congrats}
            options={{
              headerShown: false,
            }}
          />

        </Stack.Navigator>
      </ContextProvider>
    </NavigationContainer>
  )
}

export default App
