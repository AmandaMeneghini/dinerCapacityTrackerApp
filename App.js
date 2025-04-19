import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);
  const capacity = 10;

  const isRemoveDisabled = count <= 0;
  const isAddDisabled = count == capacity;

  function addPerson(){
    if(count < capacity){
      return setCount(count + 1);
    }
  }

  function removePerson(){
    if(count > 0){
      return setCount(count - 1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pessoas no restaurante:</Text>

      <Text style={styles.countDisplay}>{count}</Text>

      {count == capacity && 
        <Text style={styles.warning}>Restaurante está no seu limite de pessoas</Text>
      }

      <View style={styles.buttonArea}>
        <TouchableOpacity 
          style={[styles.button, isAddDisabled && styles.buttonDisable]} 
          onPress={addPerson}
          disabled={isAddDisabled}
          >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, isRemoveDisabled && styles.buttonDisable]} 
          onPress={removePerson}
          disabled={isRemoveDisabled}
          >
          <Text style={styles.buttonText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#000',
  },
  countDisplay: {
    fontSize: 30,
    color: '#fff',
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 5,
    margin: 20,
  },
  buttonArea: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#09A6FF',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    color: '#FFF',
  },
  warning: {
    color: "#000",
    fontSize: 15,
    backgroundColor: '#FDB240',
    padding: 5,
    borderRadius: 5,
  },
  buttonDisable: {
    backgroundColor: '#DDD',
  }
});
