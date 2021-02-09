import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        padding: 20,
        width: 390,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center'
    },
    headerText: {
        color: 'black'
    }
})

export default Header;