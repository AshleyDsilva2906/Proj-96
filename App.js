import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from './Screens/LoginScreen'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import FileUploadScreen from './Screens/FileUploadScreen'
import AppreciationScreen from './Screens/AppreciationScreen'
export default class App extends React.Component{
  render(){
  return(
    <AppContainer/>
  )
  }
  
}
var switchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  FileUploadScreen:{screen: FileUploadScreen},
 AppreciationScreen:{screen:AppreciationScreen}
})

const AppContainer =  createAppContainer(switchNavigator);