import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
    const [defaultRating, setDefultRating] = useState(3);
    const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

    const startImgFilled =
        "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";
    const startConner =
        "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";

    const CustomeRatingBar = () => {
        return (
            <View style={[styles.customBarRating]}>
                {maxRating.map((item, key) => {
                    return (
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setDefultRating(item - 1)}
                            >
                                <Image
                                    style={styles.startImgStyle}
                                    source={
                                        item <= defaultRating
                                            ? { uri: startImgFilled }
                                            : { uri: startConner }
                                    }
                                ></Image>
                            </TouchableOpacity>
                        </View>
                    );
                })}
                <Text style={[styles.text, { marginTop: 12, fontSize: 18 }]}>
                    (Xem 828 đánh giá)
                </Text>
            </View>
        );
    };
    return (
        <View style={[styles.container]}>
            <View
                style={[
                    { flex: 7, alignItems: "center", justifyContent: "center" },
                ]}
            >
                <Image
                    source={require("../assets/vsmartlivexanh1.png")}
                ></Image>
            </View>
            <View style={[{ marginLeft: 20 }]}>
                <Text style={[styles.text, { fontSize: 18 }]}>
                    Điện thoại Vsmart Joy 3 - Hàng chính hãng
                </Text>
                <View style={[styles.flexRow]}>
                    <CustomeRatingBar />
                </View>
            </View>
            <View
                style={[
                    styles.flexRow,
                    { flex: 1, alignItems: "center", marginLeft: 20 },
                ]}
            >
                <Text style={[styles.text, { fontSize: 21 }]}>1.790.000</Text>
                <Text
                    style={[
                        styles.text,
                        {
                            textDecorationLine: "line-through",
                            color: "#808080",
                            marginLeft: 70,
                        },
                    ]}
                >
                    1.790.000
                </Text>
            </View>
            <View style={[{ flex: 1, marginLeft: 20 }]}>
                <Text style={[styles.text, { fontSize: 14, color: "red" }]}>
                    Ở đâu rẻ hơn hoàn tiền
                </Text>
            </View>
            <View style={[{ alignItems: "center" }]}>
                <TouchableOpacity
                    style={[
                        {
                            height: 34,
                            width: 332,
                            alignItems: "center",
                            borderWidth: 1,
                            borderRadius: 10,
                            justifyContent: "center",
                        },
                    ]}
                >
                    <Text>4-Màu chọn màu</Text>
                </TouchableOpacity>
            </View>
            <View style={[{ flex: 2, alignItems: "center" }]}>
                <TouchableOpacity
                    style={[
                        {
                            height: 44,
                            width: 326,
                            backgroundColor: "red",
                            borderWidth: 1,
                            borderRadius: 10,
                            marginTop: 70,
                            alignItems: "center",
                            justifyContent: "center",
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.text,
                            {
                                color: "white",
                                fontSize: 23,
                            },
                        ]}
                    >
                        Chọn mua
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        //   alignItems: "center",
        justifyContent: "center",
    },
    customBarRating: {
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 30,
    },
    startImgStyle: {
        width: 40,
        height: 40,
        resizeMode: "cover",
    },
    flexRow: {
        flexDirection: "row",
    },
    text: {
        alignItems: "center",
        fontWeight: "bold",
    },
});
