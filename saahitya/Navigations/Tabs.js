import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import CartScreen from '../src/screens/CartScreen.js';
import ProfileScreen from '../src/screens/ProfileScreen.js';
import React from 'react';
import {View, Image, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Loader from '../src/components/Layout/Loader';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../src/components/Products/ProductDetails';
import AddProductScreen from '../src/screens/AddProductScreen';
const Tab = createBottomTabNavigator();

export default function Tabs() {
  const {user, loading} = useSelector(state => state.user);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarHideOnKeyboard: true,
            }}
            initialRouteName="Home2">
            <Tab.Screen
              name="Home2"
              component={SimpleScreen}
              options={({route}) => ({
                tabBarStyle: {display: Visibility(route)},
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/Assets/BottomTab/home.png')}
                      style={{
                        width: 45,
                        height: 35,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? '#FF8C00' : 'black',
                      }}
                    />
                  </View>
                ),
              })}
            />

            <Tab.Screen
              name="AddProduct"
              component={AddProductScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/Assets/BottomTab/add.png')}
                      style={{
                        width: 45,
                        height: 35,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? '#FF8C00' : 'black',
                      }}
                    />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="cart"
              component={CartScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../src/Assets/BottomTab/cart.png')}
                      style={{
                        width: 45,
                        height: 35,
                        resizeMode: 'contain',
                        marginTop: 5,
                        tintColor: focused ? '#FF8C00' : 'black',
                      }}
                    />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      // source={{
                      //   uri: user.avatar.url,
                      // }}
                      source={require('../src/Assets/BottomTab/user.png')}
                      style={{
                        width: 35,
                        height: 35,
                        // borderRadius: 70,
                        marginTop: 5,
                        tintColor: focused ? '#FF8C00' : 'black',
                      }}
                    />
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </>
      )}
    </>
  );
}

const SimpleScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const Visibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if (routeName === 'ProductDetails') {
    return 'none';
  }
  if (routeName === 'Home') {
    return 'flex';
  }
};
