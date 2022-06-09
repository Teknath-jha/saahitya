import React from 'react';
import Tabs from './Tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WishListScreen from '../src/screens/BoughtItemsScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import DrawerItems from '../src/components/Layout/DrawerItems';
import MyUploads from '../src/screens/MyUploads';
import {Ionicons} from '@expo/vector-icons';
import AddProductScreen from '../src/screens/AddProductScreen';
import { MaterialIcons,FontAwesome5,Fontisto } from '@expo/vector-icons';


const Main = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#FF8C00',
          drawerActiveTintColor: '#fff',
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
            marginVertical: 2,
            marginTop: 10,
          },
        }}
        drawerContent={props => <DrawerItems {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Tabs}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home" size={25} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Upload"
          component={AddProductScreen}
          options={{
            drawerIcon: ({color}) => (
              <MaterialIcons name="file-upload" size={25} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="MyUploads"
          component={MyUploads}
          options={{
            drawerIcon: ({color}) => (
              <MaterialIcons name="description" size={25} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="History"
          component={WishListScreen}
          options={{
            drawerIcon: ({color}) => (
              <Fontisto name="history" size={25} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({color}) => (
              <FontAwesome5 name="user-alt" size={25} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default Main;
