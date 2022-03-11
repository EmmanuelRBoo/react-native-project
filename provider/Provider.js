import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Context = createContext();

export const Provider = (props) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [pay, setPay] = useState(false);
  const [modal, setModal] = useState(false);

  const [data, setData] = useState([]);

  const storeData = async (value) => {
    try {
      setData([...data, value]);
      return await AsyncStorage.setItem('data', JSON.stringify([...data, value]));
    } catch (error) {
      console.error(error);
    };
  };

  const showData = async () => {
    try {
      const data = await AsyncStorage.getItem('data');
      return data != null ? setData(JSON.parse(data)) : null;
    } catch (error) {
      console.error(error);
    };
  };

  const addPerson = () => {
    setModal(false),
    alert('Pessoa adicionada com sucesso');
  }

  const values = {
    name,
    value,
    pay,
    modal,
    data,
    setName,
    setValue,
    setPay,
    setModal,
    setData,
    storeData,
    showData,
    addPerson,
  };

  return(
    <Context.Provider value={ values }>
      {props.children}
    </Context.Provider>
  );
};
