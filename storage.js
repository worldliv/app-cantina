// src/storage.js
// Centraliza funções para gravar/ler pedidos, produtos e usuários no AsyncStorage.

import AsyncStorage from '@react-native-async-storage/async-storage'; // API de armazenamento local
import { DEFAULT_PRODUCTS } from './data'; // produtos iniciais (seed)

const ORDERS_KEY = '@cantina_orders_v1'; // chave para pedidos
const PRODUCTS_KEY = '@cantina_products_v1'; // chave para produtos (cardápio)
const USERS_KEY = '@cantina_users_v1'; // chave para usuários

// ---------- ORDERS ----------

// adiciona pedido no início do array de pedidos
export async function saveOrder(order) {
  const raw = await AsyncStorage.getItem(ORDERS_KEY); // lê valor atual
  const arr = raw ? JSON.parse(raw) : []; // converte para array ou inicializa
  arr.unshift(order); // coloca o pedido recém-criado no começo
  await AsyncStorage.setItem(ORDERS_KEY, JSON.stringify(arr)); // grava de volta
}

// retorna array de pedidos (ou array vazio)
export async function getOrders() {
  const raw = await AsyncStorage.getItem(ORDERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

// ---------- PRODUCTS (cardápio) ----------

// retorna produtos; se não existir nada, inicializa com DEFAULT_PRODUCTS
export async function getProducts() {
  const raw = await AsyncStorage.getItem(PRODUCTS_KEY);
  if (!raw) {
    // escreve seed inicial e retorna ela
    await AsyncStorage.setItem(PRODUCTS_KEY, JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }
  return JSON.parse(raw); // retorna a lista persistida
}

// sobrescreve o array de produtos (usado pelo admin)
export async function setProducts(products) {
  await AsyncStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

// ---------- USERS ----------

// retorna lista de usuários
export async function getUsers() {
  const raw = await AsyncStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

// adiciona um usuário novo (coloca no início)
export async function addUser(user) {
  const users = await getUsers();
  users.unshift(user);
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// busca usuário por email (útil para autenticação futura)
export async function findUserByEmail(email) {
  const users = await getUsers();
  return users.find(u => u.email === email);
}