import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Pressable
} from "react-native";
import Colors from "./../constants/Colors";
import SIZES from "./../constants/Sizes";
type iconFun = { pressed: boolean; style: { color: string; size: number } };
interface ButtonProps {
    w: number;
    h: number;
    fs: number;
    ff: string;
    fc: string;
    c: string;
    r: number;
    bw: number;
    ph: number;
    pv: number;
    outlined: boolean;
    iconStart: (confih: iconFun) => React.Nodes;
    iconEnd: (config: iconFun) => React.Nodes;
    upper: boolean;
    label: string;
    disableBorder: boolean;
    onClick: () => void;
    style: any;
}
const Button = (props: ButtonProps) => {
    const {
        w = (SIZES.width * 1) / 2,
        h = SIZES.s10,
        fs = h * 0.1 + w * 0.1,
        ff = "satochi_bold",
        fc,
        c,
        r = SIZES.s2,
        ph = w / 7,
        pv,
        bw = SIZES.s1,
        outlined,
        iconStart,
        iconEnd,
        upper,
        label,
        disableBorder,
        onClick = () => {},
        st
    } = props;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            maxHeight: h,
            maxWidth: w,
            backgroundColor: c || Colors.light.accent,
            borderRadius: r,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: ph,
            paddingVertical: pv || 0,
            ...st
        },
        outlinedContainer: {
            flex: 1,
            maxHeight: h,
            maxWidth: w,
            backgroundColor: "transparent",
            borderRadius: r,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: ph,
            borderColor: c || Colors.light.accent,
            borderWidth: !disableBorder ? bw / 2 : 0,
            paddingVertical: pv || 0
        },
        icon: {
            flex: 1,
            minWidth: SIZES.s3,
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
        },
        titleContainer: {
            flex: 4,
            justifyContent: "center",
            alignItems: "center"
        },
        title: {
            fontFamily: ff,
            fontSize: fs, 
            textTransform: upper ? "uppercase" : "none",
            color: !outlined
                ? fc || Colors.light.white
                : fc || Colors.light.accent
        }
    });
    return (
        <TouchableHighlight
            style={!outlined ? styles.container : styles.outlinedContainer}
            underlayColor={
                !outlined
                    ? c || Colors.light.accent + "99"
                    : c || Colors.light.white_primary + "70"
            }
            onPress={() => onClick()}
        >
            <>
                {iconStart && (
                    <View style={[styles.icon]}>
                        <Pressable>
                            {({ pressed }) =>
                                iconStart({
                                    pressed,
                                    style: {
                                        color: !outlined
                                            ? Colors.light.white
                                            : Colors.light.accent,
                                        size: fs
                                    }
                                })
                            }
                        </Pressable>
                    </View>
                )}
                <View style={styles.titleContainer}>
                    <Text  numberOfLines={1} style={styles.title}>{label || "Button"}</Text>
                </View>
                {iconEnd && (
                    <View style={[styles.icon]}>
                        <Pressable>
                            {({ pressed }) =>
                                iconEnd({
                                    pressed,
                                    style: {
                                        color: !outlined
                                            ? Colors.light.white
                                            : Colors.light.accent,
                                        size: fs
                                    }
                                })
                            }
                        </Pressable>
                    </View>
                )}
            </>
        </TouchableHighlight>
    );
};

export default Button;
