import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LoginTeste from './LoginTESTE';
export default function Tela1( {navigation}) {
//O navigation.navigate envia para as telas. No TouchableOpacity quando clicado, será direcionado com o navigate para a tela.
//é importante salientar que as nomenclaturas devem estar de acordo para que se faça possível a navegação.
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.Text}>Admin</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.Text}>Aluno</Text>
      </TouchableOpacity>
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

  Button: {
    margin:6,
    backgroundColor: '#5d10b0',
    padding: 10,
    borderRadius: 35,
  },

Text: {
  color:'#fcfcfc',
},

});


