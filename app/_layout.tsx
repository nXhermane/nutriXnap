import React from "react-native-gesture-handler";
import "react-native-gesture-handler";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
export { ErrorBoundary } from "expo-router";
import { Text } from "react-native";
export const unstable_settings = {
    initialRouteName: "index"
};
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        satochi_regular: require("../assets/fonts/Satoshi-Regular.ttf"),
        satochi_variable: require("../assets/fonts/Satoshi-Variable.ttf"),
        satochi_bold: require("../assets/fonts/Satoshi-Bold.ttf"),
        satochi_light: require("../assets/fonts/Satoshi-Light.ttf"),
        satochi_medium: require("../assets/fonts/Satoshi-Medium.ttf"),
        beau: require("../assets/fonts/BeauRivage-Regular.ttf"),
        great: require("../assets/fonts/GreatVibes-Regular.ttf"),
        ...FontAwesome.font
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="auth" options={{ headerShown: false }} />
                <Stack.Screen name="(home)" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    );
}
// "overrides": {
//   "react-native-reanimated": "~3.6.0"
// },
