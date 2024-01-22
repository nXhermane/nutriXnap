import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ScrollView
} from "react-native";
import {useState,useEffect} from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import SIZES from "@/constants/Sizes";
import Logo from "@/components/Logo";
import FormTitle from "@/components/FormTitle";
import InputText from "@/components/InputText";
import Background from "@/components/Background";
import ButtonIconText from "@/components/ButtonIconText";
import Button from "./../../components/Button";
import Google from "./../../assets/images/google.svg";
import Facebook from "./../../assets/images/facebook.svg";
import {router,Link} from 'expo-router'
interface Props {
    // Define your props her
}

const signin = (props: Props) => {
  const [Email, setEmail] = useState<string>("")
const [isCheckedEmail, setisCheckedEmail] = useState<boolean>(false)
  const [Password, setPassword] = useState<string>("")
  const [isCheckedPassword, setisCheckedPassword] = useState<boolean>(false)
    return (
        <View style={styles.container}>
            <Background>
                <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
                    <View style={styles.top}>
                        <Text style={styles.title}>Bienvenue de nouveau !</Text>
                        <Text style={styles.body}>
                            Accédez à votre compte NutriXnap pour continuer à
                            offrir des solutions nutritionnelles personnalisées
                            à vos clients.
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
                            <InputText
                                pl={"Email"}
                                v={Email}
                                onChange={setEmail}
                                checked={isCheckedEmail}
                            />

                            <InputText pl={"Password"} se v={Password}
                            onChange={setPassword} />
                        </View>
                        <View style={styles.formButtonContainer}>
                            <Button
                                label={"Se Connecter"}
                                h={SIZES.s10 * 1.5}
                                c={Colors.light.accent}
                                w={(SIZES.width * 1.6) / 2}
                                fs={SIZES.s5}
                                onClick={() => {
                                    
                                    router.replace("../(home)")
                                }}
                            />
                            <Button
                                h={SIZES.s10 * 1.3}
                                w={(SIZES.width * 1.6) / 2}
                                label={"Mot de passe oublié"}
                                fs={
                                    (SIZES.s3 + (SIZES.s1 * 1.4) / 2) *
                                    SIZES.scale
                                }
                                outlined
                                disableBorder
                                onClick={() => {
                                
                                    alert("fonctionnaliter non implementer ");
                                }}
                            />
                            
                            <View style={styles.createAccountBtn}>
                                <Button
                                    h={SIZES.s10 * 1.3}
                                    w={(SIZES.width * 1.6) / 2}
                                    label={"Don't have an account? Join us"}
                                    fs={
                                        (SIZES.s3 + (SIZES.s1 * 1.4) / 2) *
                                        SIZES.scale
                                    }
                                    outlined
                                    disableBorder
                                    onClick={() => {
                                        router.navigate('./signup')
                                    }}
                                />
                            </View>
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
        height: SIZES.s100 * 4,
        alignItems: "center",
        gap: SIZES.s5,
        paddingTop: SIZES.s4,
        
    },
    createAccountBtn: {
        width: "100%",
        height: SIZES.s100,
        alignItems: "center",
        marginTop: SIZES.s50,
        justifyContent: "flex-end"
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
    }
});
