import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Colors";
import Icon from "./../assets/images/google.svg";
import FontAwesome from "@expo/vector-icons/FontAwesome";
interface Props {
    w: number;
    fs: number;
    h: number;
    icon: (style: any) => React.Node;
    label: string;
    onClick: () => void;
}
const ButtonIconText = (props: Props) => {
    const {
        w = Sizes.s100 + Sizes.s50,
        h = Sizes.s50,
        fs = w * 0.11,
        icon = style => <Icon width={20} height={20} />,
        label = "Google",
        onClick = () => {}
    } = props;
    return (
        <Button
            // outlined
            c={Colors.light.white}
            fc={Colors.light.black}
            w={w}
            fs={fs}
            ff={"satochi_medium"}
            h={h}
            r={Sizes.s3}
            bw={1}
            label={label}
            onClick={() => onClick()}
            iconStart={({ style }) => icon(style)}
            st={{
                elevation: 12,
                shadowColor: Colors.light.semi_black,
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.7,
                shadowRadius: 4
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        // Estilos para o container
    }
});

export default ButtonIconText;
