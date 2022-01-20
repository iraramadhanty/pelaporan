import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screen/LoginScreen';
import Regist from '../screen/RegistScreen';
import Home from '../screen/HomeScreeen';
import Form from '../screen/masyarakat/FormScreen';
import Detail from '../screen/masyarakat/DetailScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
      <Stack.Navigator 
        screenOptions={{
            headerShown: false}}
         >
        <Stack.Screen 
          name="Login" 
          component={Login} />
        <Stack.Screen 
          name="Regist" 
          component={Regist} />
        <Stack.Screen 
          name="Home" 
          component={Home} />
        <Stack.Screen 
          name="Form" 
          component={Form} />
        <Stack.Screen 
          name="Detail" 
          component={Detail} />
      </Stack.Navigator>
  );
}

export default Navigation;