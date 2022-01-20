import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Navigation from './src/navigation/Navigation';

import { AuthContext } from './src/screen/context';

const Stack = createNativeStackNavigator();

function App() {
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
        signIn: async(item) => {
          const navigation = useNavigation();
          let field = item[0];
          //  setUserToken('haloo');
          const userToken = String(field.userToken);
          const userName = field.userName;
            try{
              userToken = 'haii';
              await AsyncStorage.setItem('userToken', userToken);
            } catch(e) {
                console.log(e);
            }
          console.log('user token: ', userToken);
          dispatch({type: 'LOGIN', id: userName, token: userToken});
        },
        signOut: async() => {
          try{
              await AsyncStorage.removeItem('userToken');
            } catch(e) {
                console.log(e);
            }
          dispatch({type: 'LOGOUT'});
        },
        signUp: () => {
        },
    }));

    useEffect(() => {
      setTimeout(async() => {
        let userToken;
        userToken = null;
        try{
          userToken = await AsyncStorage.getItem('userToken');
        } catch(e) {
            console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({ type: 'REGISTER', token: userToken});
      },1000);
    }, []);

  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Stack.Navigator 
              screenOptions={{
              headerShown: false}}
            >
          </Stack.Navigator>
        )
        :
          <Navigation/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;