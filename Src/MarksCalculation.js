import React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {useState} from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  const [std, setStd] = useState('');
  const [english, setEnglish] = useState('');
  const [math, setMath] = useState('');
  const [physics, setPhysics] = useState('');
  const [detail, setDetail] = useState('');
  const handleForme = () => {
    console.log('Name-' + ' ' + name);
    console.log('std-' + ' ' + std);
    const total = parseInt(english) + parseInt(math) + parseInt(physics);
    console.log('Total Marks-' + ' ' + total);
    const totalPercent = total / 3;
    console.log('totalPercent-' + ' ' + totalPercent);
    setDetail(
      'Name-' +
        ' ' +
        name +
        ' ' +
        'Class-' +
        ' ' +
        std +
        ' ' +
        'Total Marks-' +
        ' ' +
        total +
        ' ' +
        'Total Percent-' +
        ' ' +
        totalPercent,
    );
  };
  return (
    <View
      style={{
        flex: 2,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 50}}>
        Marks Calculation
      </Text>
      <View style={{width: '100%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Name</Text>
      </View>
      <TextInput
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'gray',
          borderRadius: 10,
        }}
        placeholder="Enter Name"
        onChangeText={value => setName(value)}
        value={name}
      />
      <View style={{width: '100%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Class</Text>
      </View>
      <TextInput
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'gray',
          borderRadius: 10,
        }}
        placeholder="Enter Class"
        onChangeText={value => setStd(value)}
        value={std}
      />
      <View style={{width: '100%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>English </Text>
      </View>
      <TextInput
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'gray',
          borderRadius: 10,
        }}
        placeholder="Enter mark"
        onChangeText={value => setEnglish(value)}
        value={english}
      />
      <View style={{width: '100%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Math</Text>
      </View>
      <TextInput
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'gray',
          borderRadius: 10,
        }}
        placeholder="Enter Name"
        onChangeText={value => setMath(value)}
        value={math}
      />
      <View style={{width: '100%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Physics</Text>
      </View>
      <TextInput
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'gray',
          borderRadius: 10,
        }}
        placeholder="Enter Name"
        onChangeText={value => setPhysics(value)}
        value={physics}
      />
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'black',
          marginTop: 20,
          borderRadius: 10,
        }}>
        <Button
          style={{
            width: '100%',
            height: 30,
            backgroundColor: 'blue',
          }}
          title="Submit"
          onPress={() => {
            handleForme();
          }}></Button>
      </View>
      <View style={{width: '100%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Detail</Text>
      </View>
      <Text>{detail}</Text>
    </View>
  );
};
export default Profile;
