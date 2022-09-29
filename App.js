import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tiki from "./components/tiki";
import Vsmart from "./components/vsmart";
import Screen2 from "./components/Screen2";
import MainNavigator from "./navigation/shopNav";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            {
                <Stack.Navigator
                    initialRouteName="Vsmart"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="Home" component={Vsmart} />
                    <Stack.Screen name="Screen2" component={Screen2} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
