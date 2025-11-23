// src/screens/ProfileScreen.js
// Tela de perfil simples que permite registrar usuários locais e ver lista criada.

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { getUsers, addUser } from '../storage';
import ThemeToggle from '../components/ThemeToggle';

export default function ProfileScreen() {
  const [name, setName] = useState(''); // nome do novo usuário
  const [email, setEmail] = useState(''); // email do novo usuário
  const [users, setUsers] = useState([]); // lista de usuários carregada

  useEffect(() => { loadUsers(); }, []); // carrega usuários ao montar

  // carrega usuários do AsyncStorage
  const loadUsers = async () => {
    const u = await getUsers();
    setUsers(u);
  };

  // registra um novo usuário com senha padrão (apenas demo)
  const register = async () => {
    if (!name || !email) return Alert.alert('Preencha nome e email'); // valida
    // adiciona usuário com senha padrão '123456' (não seguro — demo)
    await addUser({ id: Date.now().toString(), name, email, isAdmin: false, password: '123456' });
    setName(''); setEmail(''); // limpa campos
    await loadUsers(); // recarrega lista
    Alert.alert('Usuário registrado (senha padrão: 123456)');
  };

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>Perfil</Text>

      <View style={{ marginTop: 12 }}>
        <Text>Nome</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Seu nome" />
        <Text style={{ marginTop: 6 }}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="seu@email" />
        <TouchableOpacity style={styles.btn} onPress={register}><Text style={{ color: '#fff' }}>Registrar usuário</Text></TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: '700' }}>Usuários cadastrados</Text>
        {users.map(u => (
          <View key={u.id} style={{ padding: 6 }}>
            <Text>{u.name} — {u.email} {u.isAdmin ? '(Admin)' : ''}</Text>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 20 }}>
        <ThemeToggle /> {/* Toggle de tema para o usuário alternar */}
      </View>
    </View>
  );
}

// estilos para inputs e botões
const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6, marginTop: 6 },
  btn: { marginTop: 10, backgroundColor: '#007AFF', padding: 10, borderRadius: 6, alignItems: 'center' }
});