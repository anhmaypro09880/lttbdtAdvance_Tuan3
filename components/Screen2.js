import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
    return (
        <View style={[styles.container]}>
            <View
                style={[
                    styles.flexRow,
                    { flex: 2, marginTop: 40, marginLeft: 20 },
                ]}
            >
                <Image
                    style={{ width: 119, height: 126 }}
                    source={require("../assets/vsmartlivexanh1.png")}
                ></Image>
                <View style={[{ marginRight: 15 }]}>
                    <Text>Điện thoại chính hãng Vsmart Joy V3</Text>
                    <Text>Hàng chính hãng</Text>
                </View>
            </View>
            <View
                style={[
                    {
                        flex: 7,
                        backgroundColor: "#C4C4C4",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                ]}
            >
                <View>
                    <Text style={{ marginTop: 10 }}>Chọn một màu bên dưới</Text>
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={[
                                styles.button,
                                {
                                    backgroundColor: "#C5F1FB",
                                    marginTop: 20,
                                },
                            ]}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                {
                                    backgroundColor: "#F30D0D",
                                    marginTop: 13,
                                },
                            ]}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                {
                                    backgroundColor: "#000000",
                                    marginTop: 13,
                                },
                            ]}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                {
                                    backgroundColor: "#234896",
                                    marginTop: 13,
                                },
                            ]}
                        ></TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={[
                            {
                                height: 44,
                                width: 326,
                                backgroundColor: "#1952E2",
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: "#CA1536",
                                marginTop: 50,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.text,
                                { fontSize: 23, color: "white" },
                            ]}
                        >
                            Chọn mua
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   backgroundColor: "#fff",
        //   alignItems: "center",
        //   justifyContent: "center",
    },
    flexRow: {
        flexDirection: "row",
    },
    button: {
        height: 95,
        width: 95,
    },
    text: {
        fontWeight: "bold",
    },
});
