import React, {useState} from 'react';

import {
  ScrollView,
  ImageBackground,
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

export default function Register({navigation}) {
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
    <View style={styles.wideContainer}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require('../public/asset/Project_44-05.jpg')}
      />
      <View style={styles.container} />
      <View style={styles.upperContainer}>
        <Text style={styles.title}>Please register your account first.</Text>
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
            <Text style={{color: 'white', fontSize: 16}}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wideContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '75%',
    overflow: 'visible',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: '75%',
  },
  container: {
    backgroundColor: '#6869E5',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    opacity: 0.85,
    zIndex: 5,
  },
  upperContainer: {
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '98%',
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
