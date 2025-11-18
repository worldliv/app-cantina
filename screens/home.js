import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card() {
    <ScrollView style={{ padding: 20 }}></ScrollView>
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Título Card</Text>
            <Text style={styles.cardContent}>Conteúdo Card</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#763',
        borderRadius: 20,
        padding: 30,
        marginVertical: 50,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardContent: {
        fontSize: 16,
        color: '#983',
    }
});
