// src/screens/AdminScreen.js
// Painel simples para o administrador: login por senha, adicionar/remover produtos e ver usuários.

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
import { getProducts, setProducts, getUsers, addUser } from '../storage';

// senha de demonstração para ativar o modo admin (NÃO USE assim em produção)
const ADMIN_PASSWORD = 'admin123';

export default function AdminScreen() {
  const [isAdmin, setIsAdmin] = useState(false); // flag que indica se modo admin está ativo
  const [pwd, setPwd] = useState(''); // campo da senha
  const [products, setProductsState] = useState([]); // produtos atuais
  const [users, setUsersState] = useState([]); // lista de usuários

  // campos para novo produto
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newPrice, setNewPrice] = useState('');

  useEffect(() => {
    // quando isAdmin muda (ou mount), recarregamos dados
    const load = async () => {
      const prods = await getProducts(); // busca cardápio
      const usrs = await getUsers(); // busca usuários
      setProductsState(prods);
      setUsersState(usrs);
    };
    load();
  }, [isAdmin]); // executa quando isAdmin muda

  // função de login — compara com senha de demonstração
  const login = () => {
    if (pwd === ADMIN_PASSWORD) {
      setIsAdmin(true); // ativa modo admin
      setPwd(''); // limpa campo
      Alert.alert('Modo administrador ativado');
    } else {
      Alert.alert('Senha incorreta'); // alerta se senha errada
    }
  };

  // logout simples que desativa o modo admin
  const logout = () => {
    setIsAdmin(false);
  };

  // adiciona produto novo ao topo do array e persiste
  const addProduct = async () => {
    if (!newName || !newPrice) return Alert.alert('Preencha nome e preço'); // validação mínima
    const p = { id: 'p' + Date.now().toString(), name: newName, description: newDesc, price: parseFloat(newPrice) };
    const updated = [p, ...products]; // coloca novo produto no começo
    await setProducts(updated); // persiste no AsyncStorage
    setProductsState(updated); // atualiza estado local
    setNewName(''); setNewDesc(''); setNewPrice(''); // limpa campos
    Alert.alert('Produto adicionado');
  };

  // remove produto por id
  const removeProduct = async (id) => {
    const updated = products.filter(p => p.id !== id); // filtra fora o produto removido
    await setProducts(updated); // persiste as mudanças
    setProductsState(updated); // atualiza estado
    Alert.alert('Produto removido');
  };

  // cria um usuário admin de exemplo (serve para teste)
  const registerAdminSample = async () => {
    await addUser({ id: Date.now().toString(), name: 'Admin', email: 'admin@cantina', isAdmin: true, password: 'admin123' });
    const usrs = await getUsers(); // recarrega usuários
    setUsersState(usrs);
    Alert.alert('Usuário admin registrado (admin@cantina / admin123)');
  };

  // se não for admin, mostra tela de login simples
  if (!isAdmin) {
    return (
      <View style={{ flex: 1, padding: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Painel Admin</Text>
        {/* input de senha */}
        <TextInput placeholder="Senha do admin" secureTextEntry value={pwd} onChangeText={setPwd} style={styles.input} />
        {/* botão para fazer login */}
        <TouchableOpacity style={styles.btn} onPress={login}><Text style={{ color: '#fff' }}>Entrar</Text></TouchableOpacity>
        {/* dica para avaliação */}
        <Text style={{ marginTop: 10 }}>Dica: senha de teste é <Text style={{ fontWeight: '700' }}>admin123</Text></Text>
      </View>
    );
  }

  // se for admin, mostra controles de administração
  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>Painel Admin</Text>
      {/* botão para sair do modo admin */}
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#f66' }]} onPress={logout}><Text style={{ color: '#fff' }}>Sair do modo admin</Text></TouchableOpacity>

      {/* seção de adição de produto */}
      <Text style={{ marginTop: 12, fontWeight: '700' }}>Adicionar produto</Text>
      <TextInput placeholder="Nome" value={newName} onChangeText={setNewName} style={styles.input} />
      <TextInput placeholder="Descrição" value={newDesc} onChangeText={setNewDesc} style={styles.input} />
      <TextInput placeholder="Preço" value={newPrice} onChangeText={setNewPrice} keyboardType="numeric" style={styles.input} />
      <TouchableOpacity style={styles.btn} onPress={addProduct}><Text style={{ color: '#fff' }}>Adicionar</Text></TouchableOpacity>

      {/* lista do cardápio atual com opção de remover */}
      <Text style={{ marginTop: 12, fontWeight: '700' }}>Cardápio atual</Text>
      <FlatList
        data={products}
        keyExtractor={p => p.id}
        renderItem={({ item }) => (
          <View style={{ padding: 8, borderBottomWidth: 1, borderColor: '#eee', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontWeight: '700' }}>{item.name} — R$ {item.price.toFixed(2)}</Text>
              <Text>{item.description}</Text>
            </View>
            {/* botão remover produto */}
            <TouchableOpacity style={{ backgroundColor: '#f66', padding: 8, borderRadius: 6 }} onPress={() => removeProduct(item.id)}>
              <Text style={{ color: '#fff' }}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* seção de usuários e botão para criar admin de teste */}
      <Text style={{ marginTop: 12, fontWeight: '700' }}>Usuários</Text>
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#007AFF' }]} onPress={registerAdminSample}><Text style={{ color: '#fff' }}>Registrar admin de teste</Text></TouchableOpacity>
      {users.map(u => <View key={u.id} style={{ padding: 6 }}><Text>{u.name} — {u.email} {u.isAdmin ? '(Admin)' : ''}</Text></View>)}
    </View>
  );
}

// estilos para inputs e botões
const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6, marginTop: 6 },
  btn: { marginTop: 10, backgroundColor: '#28a745', padding: 10, borderRadius: 6, alignItems: 'center' }
});