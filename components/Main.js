import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from './Modal';
import { Context } from '../provider/Provider';
import Container from './Container';

const Main = () => {
  const { data, modal } = useContext(Context);
  
  if (modal) {
    return(
      <View style={ styles.modalContainer }>
        <Modal />
      </View>
    );
  } else if (!modal) {
    return (
      <View style={ styles.container }>
        <View style={ styles.listContainer }>
          <View style={ styles.listTitle }>
            <Text style={ styles.listText }>Nome</Text>
          </View>
          <View style={ styles.listTitle }>
            <Text style={ styles.listText }>Preço</Text>
          </View>
          <View style={ styles.listTitle }>
            <Text style={ styles.listText }>Pagou</Text>
          </View>
        </View>
        {
          data.map((i) => {
            return (
              <Container name={i.name} value={i.value} />
            );
          })
        }
      </View>
    );
  }

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  modalContainer:{
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  listContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12,
    width: '100%'
  },
  listTitle: {
    justifyContent: 'center',
    width: '33.3%',
  },
  listText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
  }
})

export default Main;
