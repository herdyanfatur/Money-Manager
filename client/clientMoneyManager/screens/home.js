import React, {useState} from 'react';

import {
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  Animated,
} from 'react-native';

const OFFSET = 40;
const ITEM_WIDTH = Dimensions.get('window').width - OFFSET * 2;
const ITEM_HEIGHT = 200;

const cards = [
  {
    title: 'Mari berzakat :)',
    description:
      'Nikmati fitur berzakat langsung terkalkulasikan secara otomatis.',
  },
  {
    title: 'Ayo menabung :D',
    description:
      'Nikmati fitur Ayo menabung, dengan notif yang kami kirimkan sesuai permintaan anda.',
  },
];

import SearchableDropdown from 'react-native-searchable-dropdown';

export default function Home({navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 25,
            marginBottom: 15,
          }}>
          Hai user, gunakanlah uang dengan baik.
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        decelerationRate={'normal'}
        snapToInterval={ITEM_WIDTH}
        style={{marginTop: 40, paddingHorizontal: 0}}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        disableIntervalMomentum
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={12}>
        {cards.map((item, idx) => {
          const inputRange = [
            (idx - 1) * ITEM_WIDTH,
            idx * ITEM_WIDTH,
            (idx + 1) * ITEM_WIDTH,
          ];

          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });

          return (
            <Animated.View
              key={idx}
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                marginLeft: idx === 0 ? OFFSET : undefined,
                marginRight: idx === cards.length - 1 ? OFFSET : undefined,
                opacity: opacity,
                transform: [{scale: translate}],
                padding: '5%',
                borderRadius: 25,
                elevation: 20,
                backgroundColor: '#6869E5',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 9},
                shadowOpacity: 0.9,
                shadowRadius: 12,
              }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.description}</Text>
            </Animated.View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    width: '82%',
    height: '20%',
    padding: '5%',
    borderRadius: 25,
    elevation: 20,
    backgroundColor: '#6869E5',
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    marginBottom: 15,
  },
  subTitle: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 18,
  },
});
