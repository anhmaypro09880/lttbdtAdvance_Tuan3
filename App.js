import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tiki from "./components/tiki";
import Vsmart from "./components/vsmart";
import Screen2 from "./components/Screen2";
export default function App() {
    return <Screen2></Screen2>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
