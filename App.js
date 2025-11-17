import React from "react";
import { View, Text, } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import tela1 from './screens/tela1'
import LoginTeste from "./screens/LoginTESTE";
import cofiguracao from "./screens/configuracao";
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator()


const criarTab = () => {
  <Tab.Navigator>
    <Tab.Screen name="Login" component={LoginTeste} />
    <Tab.Screen  name="cofiguracao" component={cofiguracao} />
  </Tab.Navigator>
}


export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen  name="tela1" component={tela1}/>
    <Stack.Screen  name="Login" component={LoginTeste}/>
  </Stack.Navigator>
</NavigationContainer>
  );
}
