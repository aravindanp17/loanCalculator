import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculate from './Calculate';
import Resetpage from './Resetpage';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Calculate" component={Calculate} />
        <Stack.Screen name="Resetpage" component={(screen)=>(<Resetpage {...screen}/>)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;