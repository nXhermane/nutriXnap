import React from "react";
import { View, Text, StyleSheet, Platform, Image, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import Colors from "@/constants/Colors";
import SIZES from "@/constants/Sizes";
import Logo from "./../components/Logo";
import Background from "./../components/Background";
import Animated, {
    withSpring,
    withTiming,
    withDelay,
    useAnimatedProps,
    useAnimatedStyle,
    useSharedValue,
    interpolate,
    runOnJS
} from "react-native-reanimated";
const App = () => {
    const logoSize = useSharedValue(SIZES.s100 + SIZES.s50);
    const logoTransForm = useSharedValue(0);
    const LogoAnimatedStyle = useAnimatedStyle(() => ({
        height: logoSize.value,
        width: logoSize.value,
        transform: [
            {
                translateX: interpolate(
                    logoTransForm.value,
                    [0, 1],
                    [0, -SIZES.s50]
                )
            }
        ]
    }));
    const SeparatorAnimatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: interpolate(
                    logoTransForm.value,
                    [0, 1],
                    [0, -(SIZES.s50 + SIZES.s5)]
                )
            }
        ],
        opacity: interpolate(logoTransForm.value, [0, 0.8, 1], [0, 0.5, 1])
    }));
    const TextAnimatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: interpolate(
                    logoTransForm.value,
                    [0, 1],
                    [-(SIZES.s100 + SIZES.s50), SIZES.s5]
                )
            }
        ],
        opacity: interpolate(
            logoTransForm.value,
            [0, 0.4, 0.6, 0.8, 1],
            [0, 0, 0, 0, 1]
        )
    }));

    const animation = () => {
        logoSize.value = withDelay(
            1000,
            withSpring(
                SIZES.s50 + SIZES.s1,
                { duration: 100 },
                (finished, value) => {
                    if (finished === true) {
                        logoTransForm.value = withTiming(
                            1,
                            { duration: 1000 },
                            finished => {
                                logoTransForm.value = withDelay(
                                    500,
                                    withTiming(
                                        0,
                                        { duration: 1000 },
                                        finished => {
                                            if (finished)
                                                runOnJS(router.replace)(
                                                    "./auth"
                                                );
                                        }
                                    )
                                );
                            }
                        );
                    }
                }
            )
        );
    };
    React.useEffect(() => {
        animation();
        
    });
    return (
        <View style={styles.container}>
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
            <View style={styles.animationContainer}>
                <Logo style={LogoAnimatedStyle} />
                <Animated.View
                    style={[styles.separator, SeparatorAnimatedStyle]}
                />
                <Animated.Text style={[styles.text, TextAnimatedStyle]}>
                    nutriXnap
                </Animated.Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: Colors.light.primary,
        minHeight: SIZES.height
    },
    animationContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: (SIZES.width * 1.5) / 2,
        flexDirection: "row"
    },
    text: {
        color: Colors.light.accent,
        fontFamily: "great",
        fontSize: SIZES.s50,
        position: "absolute",
        opacity: 0
    },
    separator: {
        width: SIZES.s1 / 2,
        height: SIZES.s50 - SIZES.s2,
        backgroundColor: Colors.light.secondary,
        borderRadius: SIZES.s5,
        position: "absolute",
        opacity: 0
    }
});

export default App;
