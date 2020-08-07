import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function GiveClasses(){ 
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Give Classes Screen
            </Text>
        </View>
    );
}

export default GiveClasses;
