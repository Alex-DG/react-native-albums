import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
  </View>
);

export default App;
