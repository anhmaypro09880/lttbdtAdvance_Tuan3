import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    alignSelf,
} from "react-native";

export default function App() {
    const [donGia, setDonGia] = useState(141800);
    const giaGoc = 141800;
    const [counter, setCounter] = useState(1);
    const handleIncrease = () => {
        setCounter(counter + 1);
        setDonGia(counter * giaGoc);
    };

    const handleReducr = () => {
        setCounter(counter - 1);
        if (counter <= 1) setCounter(1);
    };
    return (
        <View style={styles.container}>
            <View style={[styles.flexRow, { flex: 1.77, marginTop: 30 }]}>
                <View
                    style={{
                        flex: 0.3,
                        marginLeft: 15,
                    }}
                >
                    <Image source={require("../assets/book.png")}></Image>
                </View>
                <View style={{ flex: 0.7, justifyContent: "space-between" }}>
                    <Text style={[styles.text]}>
                        Nguyên hàm tích phân và ứng dụng
                    </Text>
                    <Text style={[styles.text]}>Cung cấp bởi Tiki Trading</Text>
                    <Text style={[styles.text, { fontSize: 21, color: "red" }]}>
                        141.800đ
                    </Text>
                    <Text
                        style={[
                            styles.text,
                            {
                                textDecorationLine: "line-through",
                                color: "#808080",
                            },
                        ]}
                    >
                        141.800đ
                    </Text>
                    <View style={styles.flexRow}>
                        <View
                            style={{
                                flex: 0.9,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <TouchableOpacity
                                onPress={handleReducr}
                                style={[
                                    button.increase,
                                    { alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.text}>-</Text>
                            </TouchableOpacity>
                            <Text>{counter}</Text>
                            <TouchableOpacity
                                onPress={handleIncrease}
                                style={[
                                    button.increase,
                                    { alignItems: "center" },
                                ]}
                            >
                                <Text style={[styles.text]}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={[styles.blueText, { marginLeft: 50 }]}>
                                Mua sau
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 0.5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text style={[styles.text, { marginLeft: 15 }]}>
                    Mã giảm giá tại đây
                </Text>
                <Text style={[styles.blueText, { marginRight: 190 }]}>
                    Xem tại đây
                </Text>
            </View>
            <View
                style={{
                    flex: 1,

                    flexDirection: "row",
                }}
            >
                <View style={[styles.centerContent, { alignSelf: "center" }]}>
                    <TouchableOpacity
                        style={[
                            styles.centerContent,
                            {
                                width: 16,
                                height: 32,
                                backgroundColor: "yellow",
                                marginLeft: 15,
                                alignItems: "center",
                                alignSelf: "center",
                                flex: 0.7,
                            },
                        ]}
                    ></TouchableOpacity>
                    <Text
                        style={
                            (styles.text,
                            {
                                alignSelf: "center",
                                fontSize: 21,
                                fontWeight: "bold",
                                marginLeft: 10,
                            })
                        }
                    >
                        Mã giảm giá
                    </Text>
                </View>
                <View style={[{ flex: 0.5, alignSelf: "center" }]}>
                    <TouchableOpacity
                        style={[button.btnApDung, { alignItems: "center" }]}
                    >
                        <Text style={[button.textApDung]}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[{ flex: 1.5 }]}>
                <View style={{ flex: 0.25, backgroundColor: "#C4C4C4" }}></View>
                <View
                    style={[styles.flexRow, { flex: 1, alignItems: "center" }]}
                >
                    <Text style={[styles.text, { marginLeft: 15 }]}>
                        Bạn có phiếu quà tặng Tiki/Got it/Urbox?
                    </Text>
                    <Text style={styles.blueText}>Nhập tại đây</Text>
                </View>
                <View style={{ flex: 0.25, backgroundColor: "#C4C4C4" }}></View>
            </View>
            <View
                style={[
                    {
                        height: 51,
                        flex: 1,
                        alignItems: "center",
                    },
                    styles.flexRow,
                ]}
            >
                <Text style={[styles.text2, { fontSize: 21, marginLeft: 15 }]}>
                    Tạm tính
                </Text>
                <Text
                    style={[
                        { fontSize: 21, color: "red", marginLeft: 200 },
                        styles.text2,
                    ]}
                >
                    {donGia}
                </Text>
            </View>
            <View
                style={[styles.bottonComponent, { backgroundColor: "#C4C4C4" }]}
            ></View>
            <View style={[styles.bottonComponent]}>
                <View style={{ flex: 1 }}>
                    <View style={[styles.flexRow, {}]}>
                        <Text
                            style={[
                                styles.text2,
                                {
                                    color: "#808080",
                                    fontSize: 21,
                                    marginLeft: 15,
                                },
                            ]}
                        >
                            Thành tiền
                        </Text>
                        <Text
                            style={[
                                styles.text2,
                                { color: "red", fontSize: 21, marginLeft: 180 },
                            ]}
                        >
                            141.800
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <TouchableOpacity style={[button.btnDatHang]}>
                        <Text style={[button.textDatHang]}>
                            Tiến hành đặt hàng
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
    },
    flexRow: {
        flexDirection: "row",
    },
    text: {
        alignContent: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 14,
    },
    text2: {
        alignContent: "center",
        justifyContent: "center",
        fontWeight: "bold",
        alignItems: "center",
    },
    blueText: {
        color: "blue",
        alignContent: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 14,
    },
    centerContent: {
        marginLeft: 15,
        flexDirection: "row",
        flex: 0.5,
        borderWidth: 1,
        height: 45,
        width: 365,
        borderColor: "#808080",
    },
    bottonComponent: {
        flex: 2.5,
    },
});
const button = StyleSheet.create({
    increase: {
        width: 20,
        height: 20,
        backgroundColor: "#C4C4C4",
    },
    btnDiscount: {
        flexDirection: "row",
        backgroundColor: "red",
    },
    btnApDung: {
        alignSelf: "center",
        height: 45,
        width: 99,
        backgroundColor: "#0A5EB7",
        textAlign: "center",
        alignItems: "center",
    },
    textApDung: {
        color: "#FFFFFF",
        fontSize: 20,
        // alignSelf: "center",
        fontStyle: "Roboto",
        // alignItems: "center",
        textAlign: "center",
        fontWeight: "bold",
    },
    btnDatHang: {
        backgroundColor: "red",
        height: 45,
        borderRadius: 2,
        alignItems: "center",
        width: 331,
    },
    textDatHang: {
        // height:ssss 23,
        // width: 208,
        color: "#FFFFFF",
        alignItems: "center",
        fontSize: 23,
        fontStyle: "Roboto",
    },
});
