// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ProdutosContext, ProdutosProvider } from "./Context/ProdutoContext";

import Tela1 from "./screens/tela1";
import LoginTeste from "./screens/LoginTESTE";
import Card from "./screens/home";
import HomesoqMelhor from "./screens/HomesoqMelhor";
const Stack = createStackNavigator();

export default function App() {
  return (
    <ProdutosProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          
          <Stack.Screen name="tela1" component={Tela1} />
          <Stack.Screen name="Login" component={LoginTeste} />
          <Stack.Screen name="home" component={Card} />
          <Stack.Screen name="home2" component={HomesoqMelhor} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </ProdutosProvider>
  );
}
