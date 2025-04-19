import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pessoas no restaurante:</Text>

      <Text style={styles.countDisplay}>0</Text>

      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: '#DDD'}]}>
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
    gap: 30,
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
  },
  buttonArea: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#09A6FF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: '#FFF',
  },
});
