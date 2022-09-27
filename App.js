import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tiki from "./components/tiki";

export default function App() {
    return <Tiki></Tiki>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
