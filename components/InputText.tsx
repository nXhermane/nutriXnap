import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import COLORS from "@/constants/Colors";
import SIZES from "@/constants/Sizes";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
interface Props {
    h: number;
    w: number;
    kt: string;
    se: boolean;
    pl: string;
    checked: boolean;
    error: boolean;
    info: string;
    v: string;
    label: string;
    onClickIcon: () => void;
    onChange: (value: string) => void;
}

const InputText = (props: Props) => {
    const {
        h = SIZES.s50 + SIZES.s3,
        w,
        kt = "default",
        se = false,
        pl = "TextInput",
        checked = false,
        error = false,
        onClickIcon = () => {},
        v = "",
        onChange = value => {},
        info = "",
        label = ""
    } = props;
    const [visible, setVisible] = React.useState<boolean>(!se);

    const handleIconPress = () => {
        if (se) setVisible(!visible);
        onClickIcon();
    };

    const styles = StyleSheet.create({
        container: {
            borderWidth: SIZES.s1 / 3,
            borderColor: COLORS.light.semi_gray + "40",
            backgroundColor: COLORS.light.white,

            flexDirection: "row",
            height: h,
            borderRadius: SIZES.s3,
            paddingHorizontal: SIZES.s5,
            position: "relative",
            alignItems: "center",
            marginTop: label.trim() != "" ? SIZES.s7 : SIZES.s2,
            marginBottom: info.trim() != "" ? SIZES.s7 : SIZES.s2
        },
        inputContainer: {
            flex: 5,
            //backgroundColor: "red",
            height: "100%",
            justifyContent: "center"
        },
        iconContaoner: {
            position: "absolute",
            flex: 1,
            right: SIZES.s6
        },
        inputText: {
            flex: 1,
            fontFamily: "satochi_medium",
            fontSize: SIZES.s5,
            paddingHorizontal: SIZES.s2,

            color: !error ? COLORS.light.semi_gray : COLORS.light.error
        },
        infoDisplay: {
            position: "absolute",
            bottom: -SIZES.s5,
            paddingLeft: SIZES.s5,
            maxHeight: SIZES.s10
        },
        infoText: {
            fontFamily: "satochi_medium",
            color: checked
                ? COLORS.light.check
                : error
                ? COLORS.light.error
                : COLORS.light.semi_gray,
            fontSize: SIZES.s3
        },
        labelDisplay: {
            position: "absolute",
            top: -(SIZES.s7 + SIZES.s1 / 2),

            maxHeight: SIZES.s10
        },
        labelText: {
            fontFamily: "satochi_bold",
            fontSize: SIZES.s5,
            color: COLORS.light.black
        }
    });

    return (
        <View style={styles.container}>
            {label.trim() != "" && (
                <View style={styles.labelDisplay}>
                    <Text style={styles.labelText}>Enter you mail address</Text>
                </View>
            )}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder={pl}
                    placeholderTextColor={COLORS.light.semi_gray}
                    selectionColor={COLORS.light.tertiary}
                    secureTextEntry={!visible && se}
                    keyboardType={kt}
                    onChangeText={value => onChange(value)}
                    value={v}
                    {...props}
                />
            </View>
            <View style={styles.iconContaoner}>
                <Pressable onPress={handleIconPress}>
                    <Text>
                        {se ? (
                            visible ? (
                                <Ionicons
                                    name="eye"
                                    size={SIZES.s6}
                                    color={COLORS.light.semi_gray}
                                />
                            ) : (
                                <Ionicons
                                    name="eye-off"
                                    size={SIZES.s6}
                                    color={COLORS.light.semi_gray}
                                />
                            )
                        ) : (
                            (checked || error) &&
                            (checked ? (
                                <Ionicons
                                    name="checkmark"
                                    size={SIZES.s6}
                                    color={COLORS.light.check}
                                />
                            ) : (
                                <Ionicons
                                    name="alert-circle"
                                    size={SIZES.s6}
                                    color={COLORS.light.error}
                                />
                            ))
                        )}
                    </Text>
                </Pressable>
            </View>
            {info.trim() != "" && (
                <View style={styles.infoDisplay}>
                    <Text style={styles.infoText}>{info}</Text>
                </View>
            )}
        </View>
    );
};

export default InputText;
//<Ionicons name="eye" size={24} color="black" />
//  <Ionicons name="eye-off" size={24} color="black" />
// <Ionicons name="checkmark" size={24} color="black" />
// <Ionicons name="alert-circle" size={24} color="black" />
