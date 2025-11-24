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

//Modificações Valenthini

// App.js
// Arquivo principal que inicia a aplicação e configura a navegação e o provedor de tema.

// //import React from 'react'; // importa React — necessário para usar JSX
// import { StatusBar } from 'react-native'; // componente para controlar a barra de status
// // NavigationContainer é o wrapper que mantém o estado da navegação
// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// // Stack e Tabs para criar navegação por pilha e abas
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // Import das telas (cada tela em src/screens)
// import MenuScreen from './src/screens/MenuScreen';
// import CartScreen from './src/screens/CartScreen';
// import PaymentScreen from './src/screens/PaymentScreen';
// import OrderSuccessScreen from './src/screens/OrderSuccessScreen';
// import HistoryScreen from './src/screens/HistoryScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import AdminScreen from './src/screens/AdminScreen';

// // Import do contexto de tema (fornece isDark e toggle)
// import { ThemeProvider, useTheme } from './src/context/ThemeContext';

// // Criação dos criadores de navegação
// const Stack = createNativeStackNavigator(); // navigator para fluxo principal (pilha)
// const Tab = createBottomTabNavigator(); // navigator para abas na parte inferior

// // Função que define a pilha principal (Menu -> Carrinho -> Pagamento -> etc)
// function MainStack() {
//   return (
//     // Stack.Navigator envolve as telas em ordem de navegação por pilha
//     <Stack.Navigator initialRouteName="Menu">
//       {/* Tela Menu (cardápio) */}
//       <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Cardápio' }} />
//       {/* Tela Carrinho */}
//       <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Carrinho' }} />
//       {/* Tela de Pagamento */}
//       <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Pagamento' }} />
//       {/* Tela de confirmação — é apresentada como modal (aparece sobre a pilha) */}
//       <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} options={{ title: 'Pedido Confirmado', presentation: 'modal' }} />
//       {/* Tela de Histórico */}
//       <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'Histórico' }} />
//     </Stack.Navigator>
//   );
// }

// // Função que define as abas do app (Home, Perfil, Admin)
// function AppTabs() {
//   return (
//     // Tab.Navigator cria as abas inferior
//     <Tab.Navigator initialRouteName="Home">
//       {/* Aba Home contém a pilha principal */}
//       <Tab.Screen name="Home" component={MainStack} options={{ headerShown: false, title: 'Início' }} />
//       {/* Aba Perfil */}
//       <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
//       {/* Aba Admin */}
//       <Tab.Screen name="Admin" component={AdminScreen} options={{ title: 'Admin' }} />
//     </Tab.Navigator>
//   );
// }

// // Componente que usa o tema atual para ajustar a StatusBar e NavigationContainer
// function AppInner() {
//   const { isDark } = useTheme(); // usa hook do ThemeContext para saber se é tema escuro

//   return (
//     <>
//       {/* Ajusta cor do conteúdo da StatusBar conforme tema */}
//       <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
//       {/* NavigationContainer recebe o tema (DarkTheme ou DefaultTheme) */}
//       <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
//         <AppTabs /> {/* renderiza as abas */}
//       </NavigationContainer>
//     </>
//   );
// }

// // Export default do App — envolve tudo no ThemeProvider para disponibilizar o contexto
// export default function App() {
//   return (
//     // ThemeProvider disponibiliza isDark e toggle para toda a árvore de componentes
//     <ThemeProvider>
//       <AppInner />
//     </ThemeProvider>
//   );
// }
