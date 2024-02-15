import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import logoPrimary from "./../assets/images/logoNutriXnap.webp";
import logoPrimaryWithName from "./../assets/images/logoWithName.webp";
type LogoProps = {
    size: number;
    circled: boolean;
    style: any;
};
const Logo = React.forwardRef((props: LogoProps, ref) => {
    const { size, circled = false, style } = props;
    let width = size || 50;
    let height = size || 50;
    React.useEffect(()=>{
      
    
    },[])
    return (
        <Animated.View
            ref={ref}
            style={{ ...styles.container, maxHeight: height, maxWidth: width
            ,...style}}
        >
            <Animated.Image
                source={!circled ? logoPrimary : logoPrimaryWithName}
                style={{ width: width, height: height, ...style }}
            />
        </Animated.View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 500,
        backgroundColor:'red'
    }
});

export default Logo;
