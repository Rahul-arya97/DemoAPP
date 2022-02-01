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
        title="Go to profile"
        onPress={() => navigation.navigate('Profile')}></Button>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}></Button>
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('Contact')}></Button>
    </View>
  );
};

export default Home;
