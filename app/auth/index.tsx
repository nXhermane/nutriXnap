import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { router, Link } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import nutriCalculatorImage from "./../../assets/images/nutriCalculator.webp";
import SIZES from "@/constants/Sizes.ts";
import Button from "./../../components/Button";
import Background from "./../../components/Background";
import React from "react";
interface Props {
    // Define your props here
}

const index = (props: Props) => {
    alert('onbording')
    console.log(
        "w",
        SIZES.width,
        "h",
        SIZES.height,
        "s",
        SIZES.scale,
        "s10",
        SIZES.s10
    );
    return (
        <View style={styles.container}>
            <Background>
                <View style={styles.box}>
                    <View style={styles.bg}>
                        <Image
                            style={styles.bgImage}
                            source={require("./../../assets/images/Logopit_1705760905015.webp")}
                        />
                    </View>
                    <View style={styles.boxImageContainer}>
                        <Image
                            source={require("./../../assets/images/nutrition-healthy-diet-plan-concept_53876-125013.webp")}
                            style={styles.boxImage}
                        />
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>Bienvenue sur NutriXnap!</Text>
                    <Text style={styles.body}>
                        Découvrez le pouvoir de la nutrition personnalisée avec
                        NutriXnap Professionnel. Simplifiez la gestion des plans
                        alimentaires, optimisez le suivi des clients et accédez
                        à une base de données étendue pour une prise en charge
                        nutritionnelle avancée.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        h={SIZES.s10 * 1.5}
                        w={(SIZES.width * 1.6) / 2}
                        label={"Commencer maintenant"}
                        fs={SIZES.s5}
                        onClick={() => {
                            router.replace("./signin");
                        }}
                    />

                    <Button
                        h={SIZES.s10 * 1.3}
                        w={(SIZES.width * 1.6) / 2}
                        label={"Skip"}
                        fs={SIZES.s5}
                        outlined
                        disableBorder
                        onClick={() => {
                            router.replace("./signin");
                        }}
                    />
                </View>
            </Background>
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    bg: {
        position: "absolute",
        overflow: "hidden",
        borderBottomEndRadius: SIZES.s100 * 5,
        borderBottomStartRadius: SIZES.s100 * 5,
        borderTopEndRadius: SIZES.s100 * 5,
        // height: (SIZES.height * 2.5) / 3,
        height: (SIZES.width * 1.8) / 2,
        width: (SIZES.width * 1.8) / 2,
        marginLeft: SIZES.s100,
        bordetRadius: SIZES.s100 * 5,
        backgroundColor: "transparent",
        transform: [
            { rotateZ: "-35deg" },
            { translateY: -(SIZES.s100 + SIZES.s5 * 3) },
            { translateX: -SIZES.s100 * 1.7 }
        ],
        top: 0
    },
    box: {
        position: "relative",
        width: SIZES.width,
        height: (SIZES.height * 1.5) / 3
    },
    bgImage: {
        height: (SIZES.width * 1.8) / 2,
        width: (SIZES.width * 1.8) / 2
    },
    boxImageContainer: {
        height: (SIZES.width * 1.7) / 2,
        width: (SIZES.width * 1.7) / 2,
        position: "absolute",
        bottom: 5,
        borderRadius: SIZES.s100 * 5,
        alignSelf: "center",
        elevation: SIZES.s1 / 2,
        overflow: "hidden"
    },
    boxImage: {
        height: (SIZES.width * 1.8) / 2,
        width: (SIZES.width * 1.8) / 2
    },

    textContainer: {
        alignItems: "center",
        width: (SIZES.width * 1.7) / 2,
        marginTop: SIZES.s10 * 2,
        alignSelf: "center"
    },
    title: {
        fontFamily: "satochi_bold",
        fontSize: SIZES.s7,
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.light.black
    },
    body: {
        fontFamily: "satochi_medium",
        fontSize: SIZES.s4,
        textAlign: "center",
        marginTop: SIZES.s4,
        lineHeight: SIZES.s6,

        color: Colors.light.semi_black
    },
    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: SIZES.s8 - SIZES.s1 / 2,
        marginTop: SIZES.s10,
        height: SIZES.s100 * 2
    }
});
