// src/screens/MenuScreen.js
// Lista o cardápio carregado do storage e permite adicionar itens ao carrinho.

import React, { useEffect, useState } from 'react'; // hooks
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard'; // componente que exibe produto
import { getProducts } from '../storage'; // função que busca produtos persistidos
import ThemeToggle from '../components/ThemeToggle'; // botão para alternar tema

export default function MenuScreen({ navigation }) {
  const [products, setProducts] = useState([]); // estado com lista de produtos
  const [cart, setCart] = useState([]); // estado com o carrinho local

  useEffect(() => {
    // carrega cardápio do AsyncStorage ao montar a tela
    const load = async () => {
      const prods = await getProducts(); // recupera produtos armazenados
      setProducts(prods); // atualiza estado
    };
    load();
  }, []); // executa uma vez na montagem

  // adiciona um produto ao carrinho (incrementa se já existir)
  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id); // procura item existente
      if (found) {
        // se existir, mapeia e incrementa quantity
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      // se não existe, adiciona com quantity = 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* header contendo título, botão de tema e botão de carrinho */}
      <View style={styles.header}>
        <Text style={styles.title}>Cardápio</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* ThemeToggle permite alternar entre claro/escuro */}
          <ThemeToggle />
          {/* Botão que abre a tela Carrinho passando o carrinho atual via params */}
          <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate('Cart', { initialCart: cart })}>
            <Text style={{ color: '#fff' }}>Carrinho ({cart.reduce((s, i) => s + i.quantity, 0)})</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FlatList renderiza os produtos de forma performática */}
      <FlatList
        data={products} // fonte de dados
        keyExtractor={p => p.id} // chave única
        renderItem={({ item }) => <ProductCard product={item} onAdd={addToCart} />} // renderiza ProductCard
      />
    </View>
  );
}

// estilos locais
const styles = StyleSheet.create({
  header: { padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f7f7f7' },
  title: { fontSize: 18, fontWeight: '700' },
  cartBtn: { backgroundColor: '#007AFF', padding: 8, borderRadius: 6, marginLeft: 10 }
});