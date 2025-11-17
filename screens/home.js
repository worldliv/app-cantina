<<<<<<< HEAD
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
=======
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card() {
    return (
>>>>>>> 55bd8bd2c6ae63c6a34c57a0e3c85425c7b6a340
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Título Card</Text>
            <Text style={styles.cardContent}>Conteúdo Card</Text>
        </View>
<<<<<<< HEAD
    </TouchableOpacity>
    ) 
=======
    );
>>>>>>> 55bd8bd2c6ae63c6a34c57a0e3c85425c7b6a340
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'purple',
        borderRadius: 4,
        padding: 12,
        marginVertical: 8,
    },
    cardTitle: {
        fontSize: 20,
    },
});
