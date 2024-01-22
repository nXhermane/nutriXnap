import { Dimensions } from "react-native";
const { height, width,scale,fontScale } = Dimensions.get("window");
const devDeviceFontScale=0.8500000238418579
const prodDevicesFontScale=fontScale/devDeviceFontScale
export default {
    s1: (width * 1) / 115.2 ,
    s2: (width * 1) / 57.6 ,
    s3: (width * 1) / 38.4 ,
    s4: (width * 1) / 28.8 ,
    s5: (width * 1) / 23.04 ,
    s6: (width * 1) / 19.2 ,
    s7: (width * 1) / 16.45714285714285 ,
    s8: (width * 1) / 14.4 ,
    s9: (width * 1) / 12.8 ,
    s10: (width * 1) / 11.52 ,
    s50: (width * 1) / 9.216 ,
    s100: (width * 1) / 4.608 ,
    page: 10,
    width:width,
    height:height,
    scale:prodDevicesFontScale,
};
/**
 * 
 * si 1 -> 0.8500000238418579 fontscale
 * alors v->fontScaleValue
 * 
 */