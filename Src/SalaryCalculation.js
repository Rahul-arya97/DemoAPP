import React, {useState} from 'react';
import {View, Button, TextInput, Text} from 'react-native';
const SalaryCalculation = () => {
  const [name, setName] = useState('');
  const [post, setPost] = useState('');
  const [sell, setSell] = useState('');
  const [Detail, setDetail] = useState('');

  const handleSubmit = () => {
    const Salary = 5000;
    const incentive = (sell * 10) / 100;
    const totalSalary = Salary + incentive;
    setDetail(
      'Name-' +
        ' ' +
        name +
        ' ' +
        'Post-' +
        ' ' +
        post +
        'Salary-' +
        ' ' +
        Salary +
        ' ' +
        'Incentive-' +
        ' ' +
        incentive +
        ' ' +
        'totalSalary' +
        ' ' +
        totalSalary,
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
        Salary Calculation
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
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Post</Text>
      </View>
      <TextInput
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'gray',
          borderRadius: 10,
        }}
        placeholder="Enter Post"
        onChangeText={value => setPost(value)}
        value={post}
      />
      <View style={{width: '100%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Sale</Text>
      </View>
      <TextInput
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'gray',
          borderRadius: 10,
        }}
        placeholder="Enter Sell"
        onChangeText={value => setSell(value)}
        value={sell}
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
            handleSubmit();
          }}
        />
      </View>
      <View style={{width: '100%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Detail</Text>
      </View>
      <Text>{Detail}</Text>
    </View>
  );
};

export default SalaryCalculation;
