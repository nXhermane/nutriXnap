import React from "react";
import { View, Image, StyleSheet,Animated } from "react-native";
import logoPrimary from "./../assets/images/logoNutriXnap.webp";
import logoPrimaryWithName from "./../assets/images/logoWithName.webp";
type LogoProps = {
    size: number;
    circled: boolean;
    style:any
};
const Logo = (props: LogoProps) => {
    const { size, circled = false ,style} = props;
    let width = size || 50;
    let height = size || 50;
    return (
        <Animated.View
            style={{ ...styles.container, maxHeight: height, maxWidth:
            width }}
        >
            <Animated.Image
                source={!circled ? logoPrimary : logoPrimaryWithName}
                style={{ width: width, height: height ,...style}}
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 500
    }
});

export default Logo;
