import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';

//Aqui iniciaremos criando nossos cards, onde estará sendo exibida nossa alimentação.
//Através dos Cards, informações estarão contidas ao clicar no mesmo.

function Card() {
    function efetuarPagamento(tela4){
    }

    return (
//Nessa espécie de "DIV" estaremos adicionando os componentes de nossa Página Inicial.
//"Card" será o espaço reservado para a amostra de produtos (alimentos).
//"cardTitle" e "cardContent"
    <TouchableOpacity onPress={() => efetuarPagamento('')}>
{/*Com o TouchableOpacity iremos*/}
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Título Card</Text>
            <Text style={styles.cardContent}>Conteúdo Card</Text>
        </View>
    </TouchableOpacity>
    ) 
}
//A partir daqui, se inicia a estilização de nossos componentes.
StyleSheet.create({
    card: {
        backgroundColor: 'purple',
        borderRadius: 4,
        padding: 12,
        //Margem no eixo Y
        marginVertical: 8,
        //Sombreamento no *Android
        elevation:5,

    },
    cardTitle: {
    },
    cardContent: {
    },
})