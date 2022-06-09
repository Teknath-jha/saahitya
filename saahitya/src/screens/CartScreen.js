import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header'

export default function CartScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation}  />
      <Text style={{textAlign: 'center' , marginTop: 300}}>Display my liked or saved books or materials</Text>
    </View>
  )
}

const styles = StyleSheet.create({})