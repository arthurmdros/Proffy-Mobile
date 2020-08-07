import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function Favorites(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Favorites Screen</Text>
        </View>
    );
}

export default Favorites;