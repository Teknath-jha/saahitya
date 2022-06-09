import {ScrollView, Text} from 'react-native';
import React from 'react';
import AddProduct from '../components/Products/AddProduct';

const AddProductScreen = ({navigation}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#e5e5e5',
      }}>
      <AddProduct navigation={navigation} />
    </ScrollView>
  );
};

export default AddProductScreen;