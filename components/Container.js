import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Context } from '../provider/Provider';

const Container = (props) => {
  const { pay, setPay } = useContext(Context);
  const { name, value } = props;
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>
        {name}
      </Text>
      <Text style={ styles.text }>
        R$ {value}
      </Text>
      <View style={ styles.text }>
        <BouncyCheckbox
          style={{width: 20, height: 20, alignSelf: 'center'}}
          size={20}
          fillColor= 'black'
          iconStyle={{borderColor: 'black'}}
          onPress={() => {
            if (pay === true) setPay(false);
            if (pay === false) setPay(true);
          }}
        />
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-around',
    marginVertical: 12,
    width: '100%',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    width: '33.3%'
  },
})

export default Container;