import { TextInput, View, StyleSheet, Text } from "react-native";
import { color } from "../helpers/colors";
import { createStyleFromProps } from "../helpers/createStyleFromProps";
import { padding } from "../helpers/padding";

type inputProps = {
    height: number;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Input = ({
    height,
    setInputText,
    setModalVisible,
}: inputProps) => {
    const style = createStyleFromProps(styles, { height });
    return (
        <View style={style.view}>
            <TextInput
                placeholder="Search"
                onChangeText={(text) => setInputText(text)}
                style={style.input}
            />
            <Text onPress={() => setModalVisible(true)} style={style.text}>
                Cart
            </Text>
        </View>
    );
};

const styles = (props: inputProps) =>
    StyleSheet.create({
        input: {
            height: 40,
            borderWidth: 1,
            padding: 10,
            flex: 2,
            borderColor: color.inputBorderColor,
        },
        text: {
            height: 40,
            flex: 1,
            textAlign: "center",
            textAlignVertical: "center",
            borderWidth: 2,
            borderColor: color.cartButtonBorderColor,
            backgroundColor: color.cartButtonBgColor,
        },
        view: {
            height: props.height,
            padding: padding.main,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
        },
    });
