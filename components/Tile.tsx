import _ from "lodash";
import { useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { color } from "../helpers/colors";
import { iDATA } from "../helpers/DATA";

export const Tile = ({
    data,
    setCartData,
}: {
    data: any;
    setCartData: React.Dispatch<React.SetStateAction<iDATA[]>>;
}) => {
    const [count, setCount] = useState(1);
    const addToCart = () => {
        setCartData((prev) => [
            ...prev,
            { ...data, total: Number(data.price) * count, _id: _.uniqueId() },
        ]);
        setCount(1);
    };
    const addOne = () => {
        setCount(count + 1);
    };
    const removeOne = () => {
        count > 1 && setCount(count - 1);
    };

    return (
        <View style={styles.container}>
            <Text>{data.title}</Text>
            <Text style={styles.price}>
                ${parseFloat(data.price).toFixed(2)}
            </Text>
            <Image
                resizeMethod="scale"
                resizeMode="center"
                style={styles.image}
                source={data.url}
            />
            <View style={styles.buttonContainer}>
                <Button onPress={removeOne} title="-"></Button>
                <Button
                    onPress={addToCart}
                    title={`Add ${count === 1 ? "" : count}`}
                ></Button>
                <Button onPress={addOne} title="+"></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.tileBackground,
        marginBottom: 5,
        marginRight: 10,
        marginTop: 5,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: color.tileBorderColor,
    },
    buttonContainer: {
        marginTop: 5,
        flexDirection: "row",
    },
    image: {
        width: 60,
        height: 80,
    },
    price: {
        fontWeight: "800",
    },
});
