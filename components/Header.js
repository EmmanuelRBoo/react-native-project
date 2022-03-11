import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Bem Vindo(a)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginTop: 8,
    width: '100%',
  },
  title: {
    fontSize: 26,
    paddingBottom: 2,
    textAlign: 'center'
  }
})

export default Header;