import React from 'react';
import { View,Text,Button, ImageBackground, TouchableOpacity} from 'react-native';
import {background} from '../assets';
import styles from '../styles';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={background}>
                
                <TouchableOpacity onPress={()=>navigation.navigate('Location')} style={[styles.button,styles.violet]}>
                    <Text style={styles.btnText}>AFFICHE TA POSITION</Text>
                </TouchableOpacity>
                
            </ImageBackground>

        </View>
    );
}
export default Home;
