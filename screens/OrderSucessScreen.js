import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg'; // biblioteca que desenha QR Code

export default function OrderSuccessScreen({ route, navigation }) {
  const { order } = route.params; // pedido passado via params

  // valor codificado no QR — neste exemplo uso JSON simples
  const qrValue = JSON.stringify({ orderId: order.id, total: order.total, date: order.date });

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Pagamento confirmado</Text>
      <Text style={{ marginTop: 8 }}>Apresente o QR Code no guichê de retirada.</Text>

      {/* Componente QRCode renderiza a imagem do código para leitura */}
      <View style={{ marginTop: 20, padding: 10, backgroundColor: '#fff' }}>
        <QRCode value={qrValue} size={220} />
      </View>

      {/* botão para voltar ao início */}
      <TouchableOpacity style={styles.btn} onPress={() => navigation.popToTop()}>
        <Text style={{ color: '#fff' }}>Voltar ao início</Text>
      </TouchableOpacity>
    </View>
  );
}

// estilo do botão
const styles = StyleSheet.create({
  btn: { marginTop: 14, padding: 10, borderRadius: 6, backgroundColor: '#007AFF' }
});
