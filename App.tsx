import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Home } from "./components/Home";
import { color } from "./helpers/colors";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden backgroundColor="powderblue" />
            <Home />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background1,
        // alignItems: "center",
        // justifyContent: "center",
    },
});
