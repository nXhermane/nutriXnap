import { StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/Colors";
import Size from "@/constants/Sizes";

interface Props {
    fs: number;
    fc: string;
    title: string;
    upper: boolean;
    body: string;
}

const FormTitle = (props: Props) => {
    const {
        fs = Size.s10*Size.scale,
        fc = Colors.light.black,
        title,
        upper,
        body
    } = props;
    return (
        <View
            style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text
                style={{
                    fontFamily: "satochi_bold",
                    //   fontWeight: 700,
                    textTransform: upper ? "uppercase" : "none",
                    fontSize: fs,
                    color: fc
                }}
            >
                {title || "FormTitle"}
            </Text>
            <Text
                style={{
                    fontFamily: "satochi_regular",
                    fontSize: (fs * 2) / 4,
                    color: Colors.light.black_primary
                }}
            >
                {body}
            </Text>
        </View>
    );
};

export default FormTitle;

const styles = StyleSheet.create({});
