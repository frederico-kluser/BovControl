import React from 'react';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from './pages/home';
import Checklist from './pages/checklist';
import {StoreProvider} from './store/context';
import CreateUser from './pages/createUser';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StoreProvider>
          <SafeAreaView style={{flex: 1}}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundColor}
            />
            <Stack.Navigator initialRouteName="BovControl">
              <Stack.Screen name="BovControl" component={Home} />
              <Stack.Screen name="Checklist" component={Checklist} />
              <Stack.Screen name="Create User" component={CreateUser} />
            </Stack.Navigator>
          </SafeAreaView>
        </StoreProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
