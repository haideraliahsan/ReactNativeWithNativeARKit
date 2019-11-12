import React, { Component } from 'react';
import { NativeModules } from 'react-native';

//import react in our code.
 
import { StyleSheet, View, Image, TouchableOpacity, Alert, Text } from 'react-native';
//import all the components we are going to use.
 
export default class App extends Component {
  clickHandler = () => {





    const OutputVolume = NativeModules.OutputVolume;
    OutputVolume.get();










    //function to handle click on floating Action Button
  };
 
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>Example of Floating Action Button</Text>
        <Text>Click on Action Button to see Alert</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
             source={{
uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
 
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});