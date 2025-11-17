import { View, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import LoginTeste from './LoginTESTE';
export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        // Esta pegando a imagem da cantina da pasta Assets, os '../' eh para voltar uma pasta, pois estamos dentro da pastas screens neste arquivo
        source={require('../assets/logoCantina.png')}
        style={styles.Image}
        resizeMode="contain"

      />
      <Text style={{marginTop:-80}}>Bem vindo (a)!
        Selecione quem está acessando:
      </Text>
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
    backgroundColor: '#efe9fa',
  },

  Button: {
    marginTop: 5,
    backgroundColor: '#5d10b0',
    padding: 10,
    borderRadius: 35,
  },

  Text: {
    color: '#fcfcfc',
  },

  Image: {
    width: 300,
    height: 300,
    borderRadius: 500,
    alignSelf: 'center',
    marginBottom: 100,

  },
});
