

import React from 'react';
import Home from './src/pages/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Location from './src/pages/Location';

const Stack = createStackNavigator();
const App = () => {
  return (
          <NavigationContainer initialRouteName={Home}>
              <Stack.Navigator>
                  <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
                  <Stack.Screen name="Location" component={Location} options={{title:"LOCALISATION"}}/>
              </Stack.Navigator>
          </NavigationContainer>
  );
}

export default App;
