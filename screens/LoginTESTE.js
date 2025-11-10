import { View, Text,TouchableOpacity, styles } from "react-native"



export default  function LoginTeste() {
    return (
           <View style={styles.container}>
             <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Login")}>
                <Text>Senha</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Login")}>
                <Text>Entrar</Text>
              </TouchableOpacity>
        </View>
    )
}
