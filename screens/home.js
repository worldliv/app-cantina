import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card() {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Título Card</Text>
            <Text style={styles.cardContent}>Conteúdo Card</Text>
        </View>
    );
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
