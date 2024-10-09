import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SectionsScreen from './screens/SectionScreen';
import ArticleScreen from './screens/ArticleScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
}

function SectionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sections" component={SectionsScreen} />
      <Stack.Screen name="Articles" component={ArticleScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Homes" component={HomeStack} />
        <Tab.Screen name="Section" component={SectionsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
