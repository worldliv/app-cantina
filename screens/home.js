import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect,} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, Image,} from 'react-native';
import {ProdutosContext } from "../Context/ProdutoContext";
import { FlatList } from 'react-native';

import { usarTheme } from "../Context/ThemeContext";
 

const screenWidth = Dimensions.get("window").width; 
const numColumns = 3;
const margin = 13;
const itemWidth = screenWidth / numColumns - margin * 2;
export default function Home({ navigation }) {
  const { tema } = usarTheme();
 const route = useRoute()
useEffect(() => {
    listarProdutos();
  }, []);
 const { produtos, listarProdutos } = useContext(ProdutosContext) // pega os produtos vindo do produtoContext
useEffect(() => {
    listarProdutos();
  }, []);

  const CarregarProdutos = ({item}) =>  (
    <TouchableOpacity
        style={[ styles.produtoItem, {
         backgroundColor: '#5d10b0',
          margin: margin,
          width: itemWidth,
          borderColor: "black",
    }, ]}
    /*onPress={() => {
        navigation.navigate("CardProduto")
    }}
    */
    >
            <Image
        style={styles.produtoImage}
        source={{ uri: item.imagens }}
        resizeMode="cover" 
      />

    <View style={styles.produtoInfo}>
        <Text
          numberOfLines={2}
          style={[styles.produtoNome, { color: "white"}]}
        >
          {item.nome}
        </Text>
        <Text style={[styles.produtoValor, { color: "white" }]}>
          R$ {item.preco.toFixed(2).replace(".", ",")}
        </Text>
      </View>
    </TouchableOpacity>
  )
 return (
 <View style={{flex: 1, backgroundColor: '#efe9fa'}}>
    <FlatList
        style={{ height: 400 }}   
        data={produtos} //importa da variavel la em cima
        keyExtractor= {(item) => item.id.toString()}
        renderItem={CarregarProdutos}
        contentContainerStyle={styles.listaContainer}
        numColumns={numColumns}
        ListEmptyComponent={() => (
          <View style={styles.vazioContainer}>
            <Text style={{ color: "black" }}>
              Nenhum produto encontrado.
            </Text>
            <TouchableOpacity onPress={listarProdutos}>
              <Text style={{ color: "black", marginTop: 10 }}>
                Tentar Recarregar...
              </Text>
            </TouchableOpacity>
            </View>
        )}
    />
        
    </View>

 )
}
const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
  
  },
  produtoImage: {
    width: "90%",
    height: 80,
    borderRadius: 6,
    marginBottom: 5,
  },


  listaContainer: {
    paddingHorizontal: margin,

  },
 
  produtoItem: {
   
    height: 180,

    borderRadius: 8, 
    borderWidth: 1,

    padding: 5,
    alignItems: "center",

   
  },

  produtoInfo: {
    width: "100%",
    paddingHorizontal: 3,
    paddingBottom: 5,
    justifyContent: "flex-start",
  },
  produtoNome: {
    fontSize: 12, 
    fontWeight: "bold",
    textAlign: "center",
    height: 30, 
  },
  produtoValor: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 4,
  },
  vazioContainer: {
    alignItems: "center",
    padding: 20,
  },
});