import React from "react";
import { Text, View, StyleSheet, Platform, SafeAreaView, StatusBar, FlatList} from "react-native";
import PostCard from "./PostCard";
import AppTitle from "../componentes/appTitle";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

var post = require("./temp_post.json")

export default class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          light_theme: true
        };
    }
    renderItem = ({ item: post }) => {
        return <PostCard post={post} navigation={this.props.navigation} />;
    };
    async fetchUser() {
        let theme;
        await firebase
            .database()
            // .ref("/users/" + firebase.auth().currentUser.uid)
            .ref("/users/users001")
            .on("value", function (snapshot) {
                theme = snapshot.val().current_theme;
            });
        this.setState({
            light_theme: theme === "light" ? true : false
            });
    }
    componentDidMount() {
        this.fetchUser()
    }
    render() {
        return (
            <View style={this.state.light_theme ? styles.containerlight : styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <AppTitle />
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={post}
                        renderItem={this.renderItem}
                    />
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
    containerlight: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        background: "white"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
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
    },
    
});