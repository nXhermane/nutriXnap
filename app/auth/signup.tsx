import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ScrollView
} from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import SIZES from "@/constants/Sizes";
import Logo from "@/components/Logo";
import FormTitle from "@/components/FormTitle";
import InputText from "@/components/InputText";
import Background from "@/components/Background";
import ButtonIconText from "@/components/ButtonIconText";
import CheckBox from "@/components/CheckBox"
import Button from "./../../components/Button";
import Google from "./../../assets/images/google.svg";
import Facebook from "./../../assets/images/facebook.svg";
import { router } from "expo-router";
interface Props {
    // Define your props here
}

const signin = (props: Props) => {
    const [isChecked, setChecked] = React.useState(false);
    return (
        <View style={styles.container}>
            <Background>
                <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
                    <View style={styles.top}>
                        <Text style={styles.title}>
                            Créez votre Compte NutriXnap !
                        </Text>
                        <Text style={styles.body}>
                            Inscrivez-vous pour accéder à NutriXnap
                            Professionnel. Simplifiez votre pratique
                            nutritionnelle et offrez à vos clients des solutions
                            personnalisées.
                        </Text>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.externConnexion}>
                            <ButtonIconText
                                w={SIZES.s100 + SIZES.s50 + SIZES.s5}
                                h={SIZES.s50 + SIZES.s2 + SIZES.s1 / 2}
                                icon={style => {
                                    return (
                                        <Google
                                            width={style.size}
                                            height={style.size}
                                        />
                                    );
                                }}
                                label={"Google"}
                                onClick={() =>
                                    alert("Fonctionnalite non Implementer")
                                }
                            />
                            <ButtonIconText
                                w={SIZES.s100 + SIZES.s50 + SIZES.s5}
                                h={SIZES.s50 + SIZES.s2 + SIZES.s1 / 2}
                                icon={style => {
                                    return (
                                        <Facebook
                                            width={style.size}
                                            height={style.size}
                                        />
                                    );
                                }}
                                label={"Facebook"}
                                onClick={() =>
                                    alert("Fonctionnalite non Implementer")
                                }
                            />
                        </View>
                        <View style={styles.formInputContainer}>
                            <InputText pl={"Name"} v={"Jone Doe"} checked />
                            <InputText
                                pl={"Email"}
                                v={"joneDoe@gmail.com"}
                                checked
                            />

                            <InputText pl={"Password"} se v={"Dos55her"} />
                            <CheckBox
                                style={styles.checkbox}
                                v={isChecked}
                                onChange={setChecked}
                                label={"J'accepte les termes et conditions d'utilisation de NutriXnap."}
                            />
                        </View>
                        <View style={styles.formButtonContainer}>
                            <Button
                                label={"S'inscrire"}
                                h={SIZES.s10 * 1.5}
                                c={Colors.light.accent}
                                w={(SIZES.width * 1.6) / 2}
                                fs={SIZES.s5}
                                onClick={() => {
                                    alert("S'inscrire");
                                }}
                            />
                            <Button
                                h={SIZES.s10 * 1.3}
                                w={(SIZES.width * 1.6) / 2}
                                label={"Have an account? Log in"}
                                fs={
                                    (SIZES.s3 + (SIZES.s1 * 1.4) / 2) *
                                    SIZES.scale
                                }
                                outlined
                                disableBorder
                                onClick={() => {
                                    router.navigate("./signin");
                                }}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </Background>
        </View>
    );
};

export default signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.primary
    },
    top: {
        justifyContent: "flex-end",
        alignItems: "center",
        height: (SIZES.height * 1.5) / 5,
        width: (SIZES.width * 1.7) / 2,
        alignSelf: "center",
        paddingBottom: SIZES.s50
    },
    bottom: {
        height: (SIZES.height * 3.5) / 5,
        width: SIZES.width,
        backgroundColor: Colors.light.white + "00",

        padding: SIZES.s7 + SIZES.s1 / 2
    },
    externConnexion: {
        //flex: 1,
        height: SIZES.s50 + SIZES.s2 + SIZES.s1 / 2,
        gap: SIZES.s50,
        overflow: "visible",

        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    formInputContainer: {
        marginVertical: SIZES.s8,
        width: "100%"
    },
    formButtonContainer: {
        width: "100%",
        height: SIZES.s100 * 2,
        alignItems: "center",
        gap: SIZES.s5,
        paddingTop: SIZES.s4
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
    checkbox: {
        margin: 8,
        borderRadius:20
    }
});
