import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, Dimensions, Image} from 'react-native';
import { strings } from '../helpers/constants';
import SubmitButton from '../components/SubmitButton';

const { width, height } = Dimensions.get('window');
const pageAmount = 3;

function WelcomePage() {
 
  return (
    <View style={styles.container}>
      <Text style={{top:75, fontSize: 48}}>{strings.welcomePage.welcome}</Text>
      <Text style={{
        top:150,
        fontSize: 24,
        marginLeft: 55,
        marginRight: 55,
        textAlign: 'center'
      }}>{strings.welcomePage.pageOneSummary}</Text>
    </View>
  );
}

function IntroductionPage() {
  return (
    <View style={styles.container}>
      <Text style={{
        top:75,
        fontSize: 24,
        marginLeft: 55,
        marginRight: 55,
        textAlign: 'center'
      }}>{strings.introductionPage.introduction}</Text>
    </View>
  );
}

function LoginRegisterPage({ route }) {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Image style={{top: 100}} source={require('../assets/logo.png')} />
      <View style={{top: 200}}>
        <SubmitButton 
          title="Login"
          onPress={(event) => navigation.navigate("Login")}
        />
        <SubmitButton 
          title="Sign up"
          onPress={(event) => navigation.navigate("Register")}
        />
      </View>
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
