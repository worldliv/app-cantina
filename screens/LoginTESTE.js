import { View, Text,TouchableOpacity, StyleSheet, TextInput, Alert, } from "react-native";
import { useState } from "react";
export default  function LoginTeste({ navigation }) {
  const [senha, setSenha]= useState()
  const [senhaIncorreta, setSenhaIncorreta] = useState(false)
  const verificarSenha = () =>  {
    if (!senha) {
      setSenhaIncorreta(true)
      return;
    } else {
      navigation.navigate("home")
    }
  }
    return (
        <View style={styles.container}>

           <TextInput style={styles.input}
           placeholder="senha"
           value= {senha}
           onChangeText={setSenha}
           >
           </TextInput>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => verificarSenha()}
               
              
            >   
                <Text>Entrar</Text>
            </TouchableOpacity>
            
            <Text> senha: {senha} </Text>

        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  button:{
    padding: 10,
    marginVertical: 5
  },
  input: {
    borderWidth: 1
  }
});
