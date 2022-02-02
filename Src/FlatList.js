import React from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';

const FlatListDemo = () => {
  const names = [
    {
      index: '1',
      name: 'Jitu',
    },
    {
      index: '2',
      name: 'rahul',
    },
    {
      index: '3',
      name: 'bahadur',
    },
    {
      index: '4',
      name: 'Thakur',
    },
    {
      index: '5',
      name: 'Ritesh',
    },
    {
      index: '6',
      name: 'Raj',
    },
    {
      index: '7',
      name: 'Ankit',
    },
    {
      index: '8',
      name: 'Priya',
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={key => {
        return key.index;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={names}
      renderItem={({item}) => {
        console.log(item.name);
        return <Text style={styles.textStyle}> {item.name} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    width: 200,
    height: 200,
    padding: 60,
    backgroundColor: 'pink',
    margin: 20,
    color: 'white',
  },
  listStyle: {
    textAlign: 'center',
    margin: 20,
    padding: 10,
  },
});

export default FlatListDemo;
