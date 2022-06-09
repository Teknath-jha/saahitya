import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header'

export default function MyUploads({navigation}) {
  return (
    <View>
        <Header navigation={navigation} />
      <Text style={{textAlign: 'center' , marginTop: 300}}>My uploads</Text>
    </View>
  )
}

const styles = StyleSheet.create({})