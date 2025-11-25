// src/context/ThemeContext.js
// Contexto responsável por gerenciar e persistir o tema (claro / escuro).

import React, { createContext, useContext, useEffect, useState } from 'react'; // hooks necessários
import AsyncStorage from '@react-native-async-storage/async-storage'; // armazenamento local

const KEY = '@cantina_theme_v1'; // chave usada no AsyncStorage para gravar o tema

const ThemeContext = createContext(); // cria o contexto

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false); // estado que guarda se o tema é escuro

  useEffect(() => {
    // Ao montar, tentamos carregar o valor salvo do AsyncStorage
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(KEY); // lê a chave
        if (raw !== null) setIsDark(JSON.parse(raw)); // se existir, atualiza o estado
      } catch (e) {
        console.error('Erro ao carregar tema', e); // log em caso de falha
      }
    })();
  }, []); // array vazio -> roda só na montagem do componente

  useEffect(() => {
    // Sempre que isDark mudar, persistimos o novo valor
    (async () => {
      try {
        await AsyncStorage.setItem(KEY, JSON.stringify(isDark)); // grava como string
      } catch (e) {
        console.error('Erro ao salvar tema', e); // log em caso de erro
      }
    })();
  }, [isDark]); // dispara quando isDark for alterado

  const toggle = () => setIsDark(v => !v); // função que alterna o tema

  // Provider disponibiliza isDark e toggle para os filhos
  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para consumir o contexto com mais conforto
export function useTheme() {
  return useContext(ThemeContext);
}