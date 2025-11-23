// src/components/CartItem.js
// Exibe item do carrinho com controles para ajustar quantidade ou remover.

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartItem({ item, onInc, onDec, onRemove }) {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        {/* Nome do item */}
        <Text style={styles.name}>{item.name}</Text>
        {/* Preço unitário e quantidade */}
        <Text>R$ {item.price.toFixed(2)} x {item.quantity}</Text>
      </View>

      <View style={{ alignItems: 'flex-end' }}>
        {/* Subtotal do item */}
        <Text style={styles.sub}>R$ {(item.price * item.quantity).toFixed(2)}</Text>

        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          {/* Botão diminuir */}
          <TouchableOpacity style={styles.control} onPress={() => onDec(item.id)}><Text>-</Text></TouchableOpacity>
          {/* Botão aumentar */}
          <TouchableOpacity style={styles.control} onPress={() => onInc(item.id)}><Text>+</Text></TouchableOpacity>
          {/* Botão remover (em vermelho) */}
          <TouchableOpacity style={[styles.control, { backgroundColor: '#f66' }]} onPress={() => onRemove(item.id)}><Text style={{ color: '#fff' }}>X</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// estilos
const styles = StyleSheet.create({
  row: { flexDirection: 'row', padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  name: { fontWeight: '700' },
  sub: { fontWeight: '700' },
  control: { padding: 6, marginLeft: 6, borderWidth: 1, borderColor: '#ccc', borderRadius: 4 }
});