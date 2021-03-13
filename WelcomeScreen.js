import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const pageAmount = 3;

function WelcomePage() {
  return (
    <View style={styles.container}>
      <Text>First Screen Welcome Message!</Text>  
    </View>
  );
}

function IntroductionPage() {
  return (
    <View style={styles.container}>
      <Text>Second Screen Message Lorem ipsum bla bla</Text>  
    </View>
  );
}

function LoginRegisterPage() {
  return (
    <View style={styles.container}>
      <Text>Login/Registger bla bla</Text>  
    </View>
  );
}

function drag(event, setCurrentPage) {
  const index = Math.floor((event/width) + 0.5);
  setCurrentPage(index);
}

export default function WelcomeScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageArray = Array.from(Array(pageAmount).keys()); //Weird trick to get and array [0, 1, 2] if the given key is 3

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView 
          horizontal={true}
          pagingEnabled={true}
          flex={1}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            drag(event.nativeEvent.contentOffset.x, setCurrentPage);
          }}
        >
          <WelcomePage /> 
          <IntroductionPage />
          <LoginRegisterPage />
        </ScrollView>
        <View style={styles.navigationDots}>
          {
            pageArray.map((key, index) => (
              <View key={key} style={[styles.dot, {opacity: currentPage === index ? 1 : 0.1}]}/>
            ))
          }
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height
  },
  navigationDots: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    bottom: 100,
    left: 0,
    right: 0
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10/2,
    backgroundColor: '#050505',
    marginLeft: 5,
    marginRight: 5
  }
});
