import React from "react";
import { View, Text, StyleSheet,Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import SIZES from "@/constants/Sizes";
import COLORS from "@/constants/Colors";
interface Props {
    size: number;
    onChange: (value) => void;
    v: boolean;
    label: string | React.Node;
    c: string;
    st:any
    
}
const CheckBox = (props: Props) => {
    const {
        size = SIZES.s4,
        onChange = value => {},
        v = false,
        label = "",
        c = COLORS.light.accent,
        st={}
    } = props;
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            gap: size * 0.8,
            alignItems: "center",
            
            
            ...st
        },
        checkbox: {
            borderRadius: SIZES.s5,
            height: size,
            width: size,
            backgroundColor: "red"
        },
        label: {
            fontFamily: "satochi_bold",
            color: COLORS.light.semi_gray,
            fontSize: size,
            flex:1
        }
    });
    return (
        <Pressable style={styles.container} onPress={()=>onChange(!v)}>
            <Checkbox
                style={styles.checkbox}
                value={v}
                onValueChange={onChange}
                color={v ? c : COLORS.light.semi_gray}
            />
            {(label && label.trim() != "") && (
                <Text style={styles.label}>{label}</Text>
            )}
        </Pressable>
    );
};

export default CheckBox;
