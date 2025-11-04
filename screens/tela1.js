import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import LoginTeste from './LoginTESTE';
export default function Tela1( { navigation}) {
  return (
    <View style={styles.container}>
      <Button
        title="Admin"
        onPress={() => navigation.navigate("Login")}
      />

      <Button
        title="Aluno"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 20,
  },
});
