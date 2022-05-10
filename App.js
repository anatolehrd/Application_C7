import 'react-native-gesture-handler'; // nothing above this import

//IMPORTS

import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './navigation/AppNavigator';

import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//Rajouter les liaisons avec la base de donnée


const firebaseConfig = {
  apiKey: "AIzaSyDP_Dbevczlh2eN1Zo9AyUvLZICoxnKhIc",
  authDomain: "fzdf-2c9ff.firebaseapp.com",
  databaseURL: "https://fzdf-2c9ff.firebaseio.com",
  projectId: "fzdf-2c9ff",
  storageBucket: "fzdf-2c9ff.appspot.com",
  messagingSenderId: "750961760063",
  appId: "1:750961760063:web:9ca0c45a75f67663c8e58a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// COMPONENT
class App extends React.Component {

  constructor(props) {
    super(props);
    //State initializing
    this.state = {
      isLoadingComplete: false,
    };

    // Constants
    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    });

    //Binding des fonctions
    this.loadResourcesAsync = this.loadResourcesAsync.bind(this);
    this.handleLoadingError = this.handleLoadingError.bind(this);
    this.handleFinishLoading = this.handleFinishLoading.bind(this);
  }

  async loadResourcesAsync() {
    await Promise.all([

      Asset.loadAsync([
        require('./assets/images/icon.png'),
        require('./assets/images/centrale-7.png'),
      ]),

      Font.loadAsync({
        // This is the font that we are using for our tab bar
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      }),
    ]);
  }

  handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
  }

  handleFinishLoading() {
    this.setState({ isLoadingComplete: true });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } else {
      return (
        <AppNavigator />
      );
    }
  }
}

//EXPORT
export default App;
