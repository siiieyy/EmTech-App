import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from 'E:\\Activities (School)\\Codes\\Emtech 3\\initialApp\\components\\Login.js';
import PairingScreen from 'E:\\Activities (School)\\Codes\\Emtech 3\\initialApp\\components\\PairingPage.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoggedIn ? <PairingScreen /> : <LoginScreen onLogin={handleLogin} />}
    </SafeAreaView>
  );
};

export default App;