/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// =====================================
//  Lanjut buat component dan screen halaman login dan home dan register
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {store} from './stores';
import {Home, Login, Register} from './screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#FFF',
                shadowColor: '#FFF',
              },
            }}></Stack.Screen>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#6869E5',
                shadowColor: '#6869E5',
                opacity: 0.8,
              },
            }}></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#FFF',
                shadowColor: '#FFF',
              },
            }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
