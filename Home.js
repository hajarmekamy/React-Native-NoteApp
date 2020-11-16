import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, Button, ImageBackground} from "react-native";
import AppButton from './AppButton';
import * as Font from "expo-font";
import { useFonts } from "@use-expo/font";


function HomeScreen({ navigation }) {
  const [loaded] = useFonts({
    Lobster: require('./Lobster-Regular.ttf'),
    });
    
    if (!loaded) {
      return null;
    }
    
  const image = { uri: 'https://c1.wallpaperflare.com/preview/79/489/222/feather-leave-communicate-communication.jpg' };
    return (
      <View style={styles.container}>
         <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={image}>
           <View style={styles.header}>
          <Text style={styles.text}>Welcome to your</Text>
          <Text style={styles.text}>Note App</Text>
          </View>
        <AppButton style={styles.button}onPress={() => navigation.navigate('App')} title={'Start'}/>
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
  container: {
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
  },
  header: {
  marginTop: 50,
  marginRight:90,
  },
  text: {
    fontFamily:'Lobster',
    fontSize: 35,
    textAlign: 'center',
    },

  });

  export default HomeScreen;