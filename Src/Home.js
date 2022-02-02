import React from 'react';
import {Text, Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = ({}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,

        width: '100%',
        height: 50,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Page</Text>
      <Button
        title="Go to MarksCalculator"
        onPress={() => navigation.navigate('MarksCalculation')}></Button>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}></Button>
      <Button
        title="Go to SalaryCalculation"
        onPress={() => navigation.navigate('SalaryCalculation')}></Button>
      <Button
        title="Go to FlatListPage"
        onPress={() => navigation.navigate('FlatList')}></Button>
    </View>
  );
};

export default Home;
