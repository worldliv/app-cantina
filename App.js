import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tela1 from './screens/tela1';
import LoginTeste from "./screens/LoginTESTE";
import Configuracao from "./screens/configuracao";
import Card from "./screens/home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="tela1" component={Tela1} />
        <Stack.Screen name="Login" component={LoginTeste} />
        <Stack.Screen name="home" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
