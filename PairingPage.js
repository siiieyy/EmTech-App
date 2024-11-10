import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const PairingScreen = () => {
  const [pairingMethod, setPairingMethod] = useState(null);

  const handlePairing = (method) => {
    setPairingMethod(method);
    Alert.alert('Pairing Method Selected', `You selected ${method} pairing.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pairing of Device</Text>
      <View style={styles.buttonContainer}>
        <Button title="Manual Remote Control" onPress={() => handlePairing('Manual')} />
        <View style={styles.buttonSpacing} />
        <Button title="Automatic Remote Control" onPress={() => handlePairing('Automatic')} />
      </View>
      {pairingMethod && (
        <Text style={styles.selectedMethod}>
          Selected Method: {pairingMethod}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonSpacing: {
    height: 20, // Adjust this value for more or less space
  },
  selectedMethod: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
});

export default PairingScreen;