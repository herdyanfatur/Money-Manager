import React, {useState} from 'react';

import {
  ScrollView,
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

let {width, height} = Dimensions.get('window');

import SearchableDropdown from 'react-native-searchable-dropdown';

export default function Login({navigation}) {
  const [name, setName] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function getName(context) {
    setName(context);
    setNameValue(context);
  }

  function getPassword(context) {
    setPassword(context);
    setPasswordValue(context);
  }

  function onPress() {
    setNameValue('');
    setPasswordValue('');
    console.log(name, password);
    navigation.navigate('Home', {
      name,
      password,
    });
  }

  return (
    <ScrollView>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../public/asset/Project_44-05.jpg')}
        />
        <View style={styles.subContainer}>
          <Text style={styles.title}>
            Welcome to{' '}
            <Text
              style={{
                color: '#FDAA22',
                fontStyle: 'italic',
              }}>
              Waller
            </Text>{' '}
            !
          </Text>
          <TextInput
            placeholder="Your username ..."
            style={styles.textInput}
            value={nameValue}
            onChangeText={context => {
              getName(context);
            }}
          />
          <TextInput
            placeholder="Your password ..."
            secureTextEntry={true}
            style={styles.textInput}
            value={passwordValue}
            onChangeText={context => {
              getPassword(context);
            }}
          />

          <TouchableOpacity onPress={() => onPress()}>
            <View style={styles.button}>
              <Text style={{color: 'white', fontSize: 16}}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonTitle}>
              Don't have an account ?{' '}
              <Text
                style={{
                  color: '#FDAA22',
                }}>
                Sign Up
              </Text>{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width * 0.7,
    height: height * 0.3456,
    overflow: 'visible',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  container: {
    width: '100%',
    paddingTop: '10%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    width: '100%',
    marginTop: '13.7%',
    paddingTop: '5%',
    paddingBottom: '9%',
    backgroundColor: '#6869E5',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    paddingBottom: '8%',
    paddingTop: '3%',
    fontFamily: 'GothamBold',
    fontWeight: 'bold',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: '3%',
  },
  button: {
    backgroundColor: '#6869E5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: width * 0.7,
    height: height * 0.055,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  textInput: {
    backgroundColor: '#FAF7F6',
    borderColor: '#ccc',
    marginBottom: '3%',
    fontSize: 15,
    borderWidth: 1,
    padding: 10,
    width: width * 0.7,
    height: height * 0.055,
    borderRadius: 30,
  },
});
