import React, {useEffect, useState} from 'react';
import {Provider, useSelector} from 'react-redux';
import Store from './Redux/Store';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Navigations/Main';
import Auth from './Navigations/Auth';
import {loadUser} from './Redux/Actions/UserAction';
import Splash from './src/components/Layout/Splash';
import Loader from './src/components/Layout/Loader';
import AppStack from './src/screens/AppStack';

const App = () => {


  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
};

export default App;
