import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { router, Link } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import nutriCalculatorImage from "./../../assets/images/nutriCalculator.webp";
import SIZES from "@/constants/Sizes.ts";
import Button from "./../../components/Button";
import Background from "./../../components/Background";
import React from "react";
import { OmbordingData, OmbordingDataTyp } from "./../../data";
interface Props {
    // Define your props here
}

const index = (props: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.skipBtn}
                onPress={() => {
                    alert("fonctionnaliter non implementer ");
                }}
            >
                <Text style={styles.skipBtnText}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.carouselContainer}>
                <View style={styles.carouselImageContainer}>
                    <Image
                        source={OmbordingData[4].imgPath}
                        style={styles.carouselImage}
                    />
                </View>
                <View style={styles.carouselStep}></View>
                <View style={styles.carouselText}>
                    <Text style={styles.carouselTextTilte}>
                        {OmbordingData[0].title}
                    </Text>
                    <Text style={styles.carouselTextBody}>
                        {OmbordingData[0].body}
                    </Text>
                </View>
            </View>
            <View style={styles.carouselManageBtnContainer}></View>
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.light.primary
    },
    skipBtn: {
        position: "absolute",
        top: SIZES.s50,
        right: SIZES.s5,
        width: SIZES.s50,
        height: SIZES.s10,
        backgroundColor: Colors.light.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.s5,
        elevation: 10
    },
    skipBtnText: {
        fontSize: SIZES.s3,
        fontFamily: "satochi_bold",
        color: Colors.light.secondary
    },
    carouselContainer:{},
    carouselImageContainer:{},
    carouselImage:{
      width:SIZES.width*1.8/2,
      height:SIZES.width*1.8/2,
    },
    carouselStep:{},
    carouselText:{},
    carouselTextTilte:{},
    carouselTextBody:{},
    carouselManageBtnContainer:{}
    
    
    
});
