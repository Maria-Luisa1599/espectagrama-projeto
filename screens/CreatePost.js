import React from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    SafeAreaView,
    TextInput,
    StatusBar,
    Platform
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";
import AppTitle from "../componentes/appTitle";

export default class CreatePost extends React.Component {
    constructor() {
        super()
        this.state = {
            previewImage: "image_1",
            dropdownHeight: 40
        }
    }
    render() {
        var preview_images = {
            "image_1": require("../assets/image_1.png"),
            "image_2": require("../assets/image_2.png"),
            "image_3": require("../assets/image_3.png"),
            "image_4": require("../assets/image_4.png"),
            "image_5": require("../assets/image_5.png")
        }

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppTitle/>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image
                            source={preview_images[this.state.previewImage]}
                            style={styles.previewImage}
                        ></Image>
                        <View style={{
                            height:
                                RFValue(this.state.dropdownHeight)
                        }}>
                            <DropDownPicker
                                items={[
                                    { label: "Image 1", value: "image_1" },
                                    { label: "Image 2", value: "image_2" },
                                    { label: "Image 3", value: "image_3" },
                                    { label: "Image 4", value: "image_4" },
                                    { label: "Image 5", value: "image_5" },
                                    { label: "Image 6", value: "image_6" },
                                    { label: "Image 7", value: "image_7" },
                                ]}

                                defaltValue={this.state.previewImage}
                                open={this.state.dropdownHeight == 170 ? true : false}
                                containerStyle={{
                                    height: 40,
                                    borderRadius: 20,
                                    marginBottom: 10
                                }}

                                onOpen={() => {
                                    this.setState({ dropdownHeight: 170 });
                                }}

                                onClose={() => {
                                    this.setState({ dropdownHeight: 40 });
                                }}

                                style={{ backgroundColor: "transparent" }}
                                itemsStyle={{
                                    justifyContent: "flex-start"
                                }}

                                dropDownStyle={{ backgroundColor: "#2a2a2a" }}
                                labelStyle={{
                                    color: "white"
                                }}

                                arrowStyle={{
                                    color: "white"
                                }}

                                onSelectItem={item =>
                                    this.setState({
                                        previewImage: item.value
                                    })
                                } />
                        </View>
                        <View>
                            <TextInput
                                style={styles.inputFont}
                                onChangeText={capition => this.setState({ capition })}
                                placeholder={"Legenda"}
                                placeholderTextColor="white"
                                numberOfLines={4}
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 0.08 }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    fieldsContainer: {
        flex: 0.85
    },
    previewImage: {
        width: "93%",
        height: RFValue(250),
        alignSelf: "center",
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        resizeMode: "contain"
    },
    inputFont: {
        height: RFValue(40),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "white",
        }
});