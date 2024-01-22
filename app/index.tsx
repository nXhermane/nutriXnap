import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Image,
    Animated,
    Easing
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import Colors from "@/constants/Colors";
import SIZES from "@/constants/Sizes"
import Logo from "./../components/Logo";
import Background from "./../components/Background";
const App = () => {
    const size = React.useRef(new Animated.Value(0)).current;
    const opacity = React.useRef(new Animated.Value(0)).current;
    const [Size, setSize] = React.useState(0);
    const LogoName = "nutriXnap".split("");

    size.addListener(({ value }) => {
        setSize(value * (SIZES.s100+SIZES.s50));
    });
    const animation = () => {
        Animated.sequence([
            Animated.spring(opacity, {
                toValue: 1,
                duration: 200,
                easing: Easing.inOut(Easing.linear),
                useNativeDriver: true
            }),
            Animated.spring(size, {
                toValue: 1,
                duration: 200,
                mass: 3,
                easing: Easing.inOut(Easing.linear),
                useNativeDriver: true
            })
        ]).start(({ finished }) => {
            if (finished) router.replace("/auth");
        });
    };
    React.useEffect(() => {
        animation()
        // setTimeout(() => {
        //   router.replace("/auth");
        // }, 200);
    });
    return (
        <Background>
            <View style={styles.container}>
                <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
                <Logo
                    size={Size}
                    style={{
                        transform: [
                            {
                                translateY: size.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, - SIZES.s50]
                                })
                            }
                        ],
                        opacity: size.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        })
                    }}
                />
                <Animated.Text
                    style={{
                        ...styles.text,
                        opacity: opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        }),
                        transform: [
                            {
                                translateY: opacity.interpolate({
                                    inputRange: [0, 0.5, 1],
                                    outputRange: [SIZES.s100*2, 0, - SIZES.s50]
                                })
                            }
                        ]
                    }}
                >
                    {LogoName.map(i => i)}
                </Animated.Text>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: Colors.light.white_primary + "00",
      minHeight:SIZES.height,
    
    },
    text: {
        color: Colors.light.accent,
        fontFamily: "great",
        fontSize: SIZES.s50+SIZES.s5
    }
});

export default App;
