import { StatusBar } from 'expo-status-bar';
import React,{ useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context, Provider } from './provider/Provider';
import Header from './components/Header';
import Main from './components/Main';
import Bottom from './components/Bottom';

export default function App() {
  return (
    <Provider>
      <StatusBar hidden />
      <View style={styles.container}>
        <Header />
        <Main />
        <Bottom />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%'
  },
});
