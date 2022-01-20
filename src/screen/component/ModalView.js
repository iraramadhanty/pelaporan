import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { 
    Alert, 
    Modal, 
    StyleSheet, 
    Text, 
    Pressable, 
    View 
} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { AuthContext } from "../context";

const ModalView = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const { signOut } = React.useContext(AuthContext);

    return(
        <View>
            <View style={styles.icon}>
                <Text style={styles.textStyle}>Ira Ramadhanty</Text>
                <Pressable
                    style={styles.logout}
                    onPress={() => setModalVisible(true)}
                >
                    <FontAwesome5 
                        name="user-circle" 
                        size={60}
                        color={'black'} 
                    />
                </Pressable>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Apakah anda yakin ingin Logout?</Text>
                            <View style={{flexDirection: 'row-reverse' }}>
                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Tidak</Text>
                                </Pressable>
                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {signOut()}}>
                                    <Text style={styles.textStyle}>Ya</Text>
                                </Pressable>
                            </View>  
                        </View>
                    </View>
                </Modal>
                    <FontAwesome5 
                        name="user-circle" 
                        size={60}
                        color={'black'}
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
     icon: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 5,
    },
    textStyle: {
        marginTop: 5,
        fontSize: 20,
        padding: 10,
        color: 'black',
        textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        elevation: 5,
        width: 70,
        height: 50
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        margin: 10
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: 'black'
    },
    logout: {
        height: 80
    }
})

export default ModalView;