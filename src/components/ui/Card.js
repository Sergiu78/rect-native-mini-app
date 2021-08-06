import React from 'react';

import { StyleSheet, View} from 'react-native';

export const Card = props => (
    <View style={styles.default}>
        { props.children }
    </View>
)
    


const styles = StyleSheet.create({
    default: {
        padding: 20,
        borderWidth: 2,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},
        borderRadius: 10,
        elevation: 8,
        marginBottom: 20
    }
})