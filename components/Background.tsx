import React from "react";
import { ImageBackground, Text, StyleSheet,ScrollView } from "react-native";
import background from "./../assets/images/backgroundnutApp.webp";
import Sizes from '@/constants/Sizes'
const Background = ({ children }) => {
    return (
        <ImageBackground source={background} style={styles.container}
        resizeMode="cover"
        imageStyle={{width:Sizes.width,height:Sizes.height+Sizes.height/10}} >
        <ScrollView style={styles.container}>
            {children}
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow:1
    }
});

export default Background;
