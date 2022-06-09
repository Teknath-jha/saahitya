import {Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../../Redux/Actions/UserAction';

export default function DrawerItems(props) {
  const dispatch = useDispatch();
  const {user,error} = useSelector((state) =>state.user);

  const logOut = () =>{
    dispatch(logOutUser());
    if(error){
      alert(error)
    }
    alert("Log out success")
  }

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 60,
        margin: 10,
      }}>
      <Image
        source={{
          uri: user.avatar.url
        }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 120,
          marginLeft: 10,
        }}
      />
      <Text style={{color: '#FF8C00', fontSize: 26, paddingLeft: 10}}>
        {user.name}
      </Text>

      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingTop: 10,
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View >
        <TouchableOpacity 
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft:10,
            marginBottom:20
          }}
        onPress={logOut}
        >
        <Ionicons name="log-out-outline" size={30} color="#FF8C00" />
        <Text style={{color: '#FF8C00', fontSize: 16, paddingLeft: 10}}>
          Log Out
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
