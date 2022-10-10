import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { color } from "../helpers/colors";
import { DATA, iDATA } from "../helpers/DATA";
import { padding } from "../helpers/padding";
import { CartModal } from "./CartModal";
import { Input } from "./Input";
import { Tile } from "./Tile";

const options = {
    includeMatches: true,
    keys: ["title"],
};

export const Home = () => {
    const [inputText, setInputText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [cartData, setCartData] = useState<iDATA[]>([]);
    const fuse = new Fuse(DATA, options);
    const result = fuse.search(inputText);

    const renderedItem = ({ item }: any) => (
        <Tile data={item} setCartData={setCartData} />
    );

    return (
        <View style={styles.container}>
            <Input height={80} {...{ setInputText, setModalVisible }} />
            <CartModal
                {...{ modalVisible, setModalVisible, cartData, setCartData }}
            />
            <FlatList
                horizontal={false}
                numColumns={2}
                style={styles.view}
                data={
                    inputText === "" ? DATA : result.map((item) => item["item"])
                }
                renderItem={renderedItem}
                keyExtractor={(item) => item.title}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background1,
        flexDirection: "column",
    },
    view: {
        paddingLeft: padding.main,
        backgroundColor: "white",
    },
});
