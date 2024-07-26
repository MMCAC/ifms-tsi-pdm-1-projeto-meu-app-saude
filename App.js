import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './scr/pages/HomeScreen';
import ICQScreen from './scr/pages/ICQScreen';
import IMCScreen from './scr/pages/IMCScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ICQ" 
          component={ICQScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen 
          name="IMC" 
          component={IMCScreen} 
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}