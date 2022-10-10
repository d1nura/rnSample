import _ from "lodash";
import {
    Alert,
    Modal,
    View,
    Text,
    Pressable,
    StyleSheet,
    FlatList,
    Image,
    Button,
} from "react-native";
import { iDATA } from "../helpers/DATA";

export const CartModal = ({
    modalVisible,
    setModalVisible,
    cartData,
    setCartData,
}: {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    cartData: iDATA[];
    setCartData: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
    const renderedItem = ({ item }: { item: any }) => {
        const addByOne = () => {
            setCartData(
                cartData.map((cartItem) => {
                    if (cartItem._id === item._id) {
                        return {
                            ...cartItem,
                            total: cartItem?.total! + cartItem.price,
                        };
                    }
                    return cartItem;
                })
            );
        };
        const removeByOne = () => {
            setCartData(
                cartData.map((cartItem) => {
                    if (cartItem._id === item._id) {
                        return {
                            ...cartItem,
                            total: cartItem?.total! - cartItem.price,
                        };
                    }
                    return cartItem;
                })
            );
        };
        const removeItem = () => {
            setCartData(
                cartData.filter((cartItem) => cartItem._id !== item._id)
            );
        };
        return (
            <View key={item.id} style={modalStyles.listItem}>
                <View style={modalStyles.listItemImage}>
                    <Button
                        title="-"
                        onPress={removeByOne}
                        disabled={Number(item.total) === Number(item.price)}
                    ></Button>
                    <Image
                        resizeMethod="scale"
                        resizeMode="center"
                        source={item.url}
                        style={modalStyles.image}
                    />
                    <Button title="+" onPress={addByOne}></Button>
                    <Text style={modalStyles.listItemTitle}>{item.title}</Text>
                    <Text>${parseFloat(item.total).toFixed(2)}</Text>
                </View>

                <Text style={modalStyles.removeItem} onPress={removeItem}>
                    Remove
                </Text>
            </View>
        );
    };
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={modalStyles.modalView}>
                <Text style={modalStyles.modalText}>
                    Shopping Cart $
                    {cartData
                        .reduce((prev, curr) => prev + curr?.total!, 0)
                        .toFixed(2)}
                </Text>
                <FlatList
                    data={cartData}
                    renderItem={renderedItem}
                    keyExtractor={(item) => _.uniqueId()}
                />

                <Pressable
                    style={[modalStyles.button, modalStyles.buttonClose]}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                        setCartData([]);
                    }}
                >
                    <Text style={modalStyles.textStyle}>Close</Text>
                </Pressable>
            </View>
        </Modal>
    );
};

const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        flex: 1,
        // margin: 20,
        backgroundColor: "white",
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "800",
        fontSize: 18,
    },
    image: {
        width: 40,
        height: 40,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "yellow",
        // borderBottomWidth: 0.5,
        // borderBottomColor: "black",
        padding: 10,
        justifyContent: "space-between",
    },
    removeItem: {
        textDecorationLine: "underline",
    },
    listItemImage: {
        flexDirection: "row",
        alignItems: "center",
    },
    listItemTitle: {
        marginRight: 5,
        marginLeft: 5,
    },
});
