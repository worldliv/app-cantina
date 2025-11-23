// src/screens/PaymentScreen.js
// Tela que simula pagamento (PIX copia-e-cola ou cartão fictício).

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { saveOrder } from '../storage';

function generateOrderId() {
  // função utilitária para gerar ID de pedido simples
  return 'ORD-' + Math.random().toString(36).substring(2, 9).toUpperCase();
}

export default function PaymentScreen({ navigation, route }) {
  const cart = route.params.cart || []; // lê o carrinho passado via params
  const [method, setMethod] = useState('PIX'); // método escolhido (PIX ou CARD)
  const [cardNumber, setCardNumber] = useState(''); // campo do cartão (simulado)
  const [loading, setLoading] = useState(false); // flag de processamento

  // calcula total do carrinho
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  // gera string de copia-e-cola do PIX fictício
  const simulatePix = () => {
    const pixKey = 'cantina@universitarios.pix'; // chave de exemplo
    const copiaCola = `PIX|chave:${pixKey}|valor:${total.toFixed(2)}|pedido:${generateOrderId()}`;
    return { pixKey, copiaCola };
  };

  // função que "processa" o pagamento (simulado)
  const processPayment = async () => {
    setLoading(true); // ativa loading
    // validação mínima para cartão
    if (method === 'CARD' && (!cardNumber || cardNumber.length < 12)) {
      Alert.alert('Cartão inválido', 'Insira número válido (mín 12 dígitos).');
      setLoading(false);
      return;
    }

    // simula atraso (chamada de rede)
    setTimeout(async () => {
      const order = {
        id: generateOrderId(),
        items: cart,
        total,
        date: new Date().toISOString(),
        paymentMethod: method
      };

      await saveOrder(order); // salva pedido no histórico
      navigation.replace('OrderSuccess', { order }); // navega para tela de sucesso (substitui a rota)
      setLoading(false); // desativa loading
    }, 900);
  };

  const pixData = simulatePix(); // dados fictícios do PIX

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>Pagamento</Text>
      <Text style={{ marginTop: 8 }}>Total: R$ {total.toFixed(2)}</Text>

      <View style={{ marginTop: 16 }}>
        {/* opções de método de pagamento */}
        <TouchableOpacity style={[styles.methodBtn, method === 'PIX' && styles.methodActive]} onPress={() => setMethod('PIX')}>
          <Text>PIX (Copia e Cola)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.methodBtn, method === 'CARD' && styles.methodActive]} onPress={() => setMethod('CARD')}>
          <Text>Cartão (fictício)</Text>
        </TouchableOpacity>
      </View>

      {/* instruções para PIX */}
      {method === 'PIX' && (
        <View style={{ marginTop: 12 }}>
          <Text style={{ fontWeight: '700' }}>Copia e Cola:</Text>
          <Text selectable>{pixData.copiaCola}</Text>
        </View>
      )}

      {/* campos para cartão — apenas simulação */}
      {method === 'CARD' && (
        <View style={{ marginTop: 12 }}>
          <Text>Nº do cartão (fictício)</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={cardNumber} onChangeText={setCardNumber} placeholder="123412341234" />
        </View>
      )}

      {/* botão que dispara o processamento do pagamento */}
      <TouchableOpacity style={styles.confirmBtn} onPress={processPayment} disabled={loading}>
        <Text style={{ color: '#fff' }}>{loading ? 'Processando...' : 'Confirmar pagamento'}</Text>
      </TouchableOpacity>
    </View>
  );
}

// estilos
const styles = StyleSheet.create({
  methodBtn: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 6, marginTop: 8 },
  methodActive: { borderColor: '#007AFF', backgroundColor: '#e6f0ff' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 8, marginTop: 6 },
  confirmBtn: { marginTop: 20, backgroundColor: '#007AFF', padding: 12, alignItems: 'center', borderRadius: 6 }
});