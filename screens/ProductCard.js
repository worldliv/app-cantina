// src/components/ProductCard.js
// Componente que mostra informações do produto e botões para adicionar/editar.

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// recebe product (objeto), onAdd (callback) e onEdit (opcional, usado no Admin)
export default function ProductCard({ product, onAdd, onEdit }) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        {/* nome do produto */}
        <Text style={styles.name}>{product.name}</Text>
        {/* descrição resumida */}
        <Text style={styles.desc}>{product.description}</Text>
      </View>

      <View style={{ alignItems: 'flex-end' }}>
        {/* preço formatado */}
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>

        {/* botão adicionar ao carrinho */}
        <TouchableOpacity style={styles.btn} onPress={() => onAdd(product)}>
          <Text style={styles.btnText}>Adicionar</Text>
        </TouchableOpacity>

        {/* se onEdit foi passado, mostramos botão de editar (visível apenas no Admin) */}
        {onEdit && (
          <TouchableOpacity style={[styles.btn, { backgroundColor: '#666', marginTop: 6 }]} onPress={() => onEdit(product)}>
            <Text style={styles.btnText}>Editar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

// estilos do componente
const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 12, borderBottomWidth: 1, borderColor: '#ddd' },
  name: { fontWeight: '700' },
  desc: { color: '#555' },
  price: { fontWeight: '700' },
  btn: { backgroundColor: '#007AFF', padding: 6, borderRadius: 6, marginTop: 6 },
  btnText: { color: '#fff' }
});