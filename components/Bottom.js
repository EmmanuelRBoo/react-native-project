import React, { useContext } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../provider/Provider';

const Bottom = () => {
  const { setModal } = useContext(Context);
  return (
    <View style={ styles.container }>
      <TouchableOpacity 
        onPress={() => setModal(true)}
        style={ styles.btn }
      >
        <Ionicons name="add-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={ styles.btn }>
        <MaterialCommunityIcons name="delete-circle-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    width: '100%'
  },
  btn: {
    alignItems: 'center',
    borderColor: '#000',
    borderRadius: 24,
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: 8,
    width: '40%',
  }
})

export default Bottom;
