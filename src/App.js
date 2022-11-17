import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Home from './pages/Home';
import ChecklistView from './pages/ChecklistView';
import CreateUser from './pages/CreateUser';
import ChecklistManagement from './pages/ChecklistManagement';

import Modal from './components/Modal';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {StoreProvider} from './store/context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
              <Stack.Screen name="Checklist View" component={ChecklistView} />
              <Stack.Screen name="Create User" component={CreateUser} />
              <Stack.Screen
                name="Checklist Management"
                component={ChecklistManagement}
              />
            </Stack.Navigator>
            <Modal />
          </SafeAreaView>
        </StoreProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
