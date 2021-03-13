import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

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


export default function WelcomeScreen() {
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
        >
          <WelcomePage />
          <IntroductionPage />
          <LoginRegisterPage />
        </ScrollView>
        <View style={styles.navigationDots}>
          <Text>*</Text>
          <Text>*</Text>
          <Text>*</Text>
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
  }
});
