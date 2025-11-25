//Modificações Valenthini

// App.js
// Arquivo principal que inicia a aplicação e configura a navegação e o provedor de tema.

import React from 'react'; // importa React — necessário para usar JSX
import { StatusBar } from 'react-native'; // componente para controlar a barra de status
// NavigationContainer é o wrapper que mantém o estado da navegação
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// Stack e Tabs para criar navegação por pilha e abas
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import das telas (cada tela em src/screens)
import MenuScreen from './screens/MenuScreen';
import CartItem from './screens/CartItem';
import PaymentScreen from './screens/PaymentScreen';
import OrderSucessScreen from './screens/OrderSucessScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminScreen from './screens/AdminScreen';

// Import do contexto de tema (fornece isDark e toggle)
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Criação dos criadores de navegação
const Stack = createNativeStackNavigator(); // navigator para fluxo principal (pilha)
const Tab = createBottomTabNavigator(); // navigator para abas na parte inferior

// Função que define a pilha principal (Menu -> Carrinho -> Pagamento -> etc)
function MainStack() {
  return (
    // Stack.Navigator envolve as telas em ordem de navegação por pilha
    <Stack.Navigator initialRouteName="Menu">
      {/* Tela Menu (cardápio) */}
      <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Cardápio' }} />
      {/* Tela Carrinho */}
      <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Carrinho' }} />
      {/* Tela de Pagamento */}
      <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Pagamento' }} />
      {/* Tela de confirmação — é apresentada como modal (aparece sobre a pilha) */}
      <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} options={{ title: 'Pedido Confirmado', presentation: 'modal' }} />
    </Stack.Navigator>
  );
}

// Função que define as abas do app (Home, Perfil, Admin)
function AppTabs() {
  return (
    // Tab.Navigator cria as abas inferior
    <Tab.Navigator initialRouteName="Home">
      {/* Aba Home contém a pilha principal */}
      <Tab.Screen name="Home" component={MainStack} options={{ headerShown: false, title: 'Início' }} />
      {/* Aba Perfil */}
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
      {/* Aba Admin */}
      <Tab.Screen name="Admin" component={AdminScreen} options={{ title: 'Admin' }} />
    </Tab.Navigator>
  );
}

// Componente que usa o tema atual para ajustar a StatusBar e NavigationContainer
function AppInner() {
  const { isDark } = useTheme(); // usa hook do ThemeContext para saber se é tema escuro

  return (
    <>
      {/* Ajusta cor do conteúdo da StatusBar conforme tema */}
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      {/* NavigationContainer recebe o tema (DarkTheme ou DefaultTheme) */}
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        <AppTabs /> {/* renderiza as abas */}
      </NavigationContainer>
    </>
  );
}

// Export default do App — envolve tudo no ThemeProvider para disponibilizar o contexto
export default function App() {
  return (
    // ThemeProvider disponibiliza isDark e toggle para toda a árvore de componentes
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
