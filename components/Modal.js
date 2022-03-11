import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../provider/Provider';

const Modal = () => {
  const { name, value, data,setName, setValue, setModal, storeData, addPerson } = useContext(Context);
    
  return (
    <View style={ styles.container }>
      <TouchableOpacity
        style={ styles.close }
        onPress={ () => setModal(false) }
      >
        <AntDesign name="close" size={18} color="black" />
      </TouchableOpacity>
      <View style={ styles.formContainer }>
        <TextInput
          style={ styles.input }
          defaultValue={name}
          onChange={e => setName(e.target.value)}
          placeholder='Nome'
        />
        <TextInput
          style={ styles.input }
          defaultValue={value}
          onChange={e => setValue(e.target.value)}
          placeholder='Valor a ser Pago'
        />
        <TouchableOpacity
          style={ styles.btn }
          onPress={ () => {
            storeData({ name, value });
            addPerson();
          } }
        >
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    height: 260,
    width:'30%'
  },
  formContainer: {
    paddingVertical: 20
  },
  close: {
    alignSelf: 'flex-end',
    marginRight: 6,
    marginTop: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    fontSize: 16,
    marginVertical: 10,
    padding: 10,
    width: '100%'
  },
  btn: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 24,
    marginVertical: 10,
    padding: 10,
    textAlign: 'center',
    width:'100%'
  }
});

export default Modal;
