import { View, Text,TouchableOpacity, StyleSheet, TextInput,} from "react-native";
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


        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#efe9fa',
  },

  button:{
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#5d10b0',
    padding: 10,
    borderRadius: 35,
  },

  input: {
    borderWidth: 1,
    borderColor: "gray"
  },
});
