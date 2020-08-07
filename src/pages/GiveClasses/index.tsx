import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import styles from './styles';

function GiveClasses(){ 
    const { goBack } = useNavigation();

    function handleNavigateToBack(){
        goBack();
    }   

    return(
        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                source={giveClassesBgImage}
                style={styles.content}
            >
                <Text style={styles.title}> Desejar ser um Proffy? </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateToBack} style={styles.okButton}>
                <Text style={styles.okButtonText}> Tudo bem </Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;
