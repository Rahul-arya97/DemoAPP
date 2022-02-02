import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MarksCalculation from './Src/MarksCalculation';
import Home from './Src/Home';
import SalaryCalculation from './Src/SalaryCalculation';
import About from './Src/About';
import FlatList from './Src/FlatList';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MarksCalculation" component={MarksCalculation} />

        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="SalaryCalculation" component={SalaryCalculation} />
        <Stack.Screen name="FlatList" component={FlatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
