import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class AppTitle extends React.Component {
    render() {
        return (
                <View style={styles.appTitle}>

                    <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/camera.png")}
                            style={styles.IconImage}>
                        </Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleTextContainer}>Espectagrama</Text>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        background: "black"
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    IconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"

    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    cardContainer: {
        flex: 0.85
    }
});