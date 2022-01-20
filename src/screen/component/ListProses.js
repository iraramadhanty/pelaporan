import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function CardList(props) {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <View style={styles.card1}>
                    <Text style={styles.textIsi}>{props.judul}</Text>
                    <Text style={{...styles.textIsi, color: 'red', marginTop: 10, fontStyle: 'italic'}}>{props.status}</Text>
                </View>
            </TouchableOpacity>
        </View>  
    )
}

const ListProses = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                <CardList 
                    judul = "Permasalahan jalanan rusak"
                    status = "Sedang Diproses"
                />
                <CardList 
                    judul = "Permasalahan jalanan rusak"
                    status = "Sedang Diproses"
                />
                <CardList 
                    judul = "Permasalahan jalanan rusak"
                    status = "Sedang Diproses"
                />
                <CardList 
                    judul = "Permasalahan jalanan rusak"
                    status = "Sedang Diproses"
                />
                <CardList 
                    judul = "Permasalahan jalanan rusak"
                    status = "Sedang Diproses"
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card1: {
        backgroundColor: '#ABDCF0',
        width: '80%',
        marginTop: 30,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cardForm: {
        borderWidth: 2,
        width: '95%',
        marginTop: 30,
        padding: 5,
        paddingStart: 15,
        borderRadius: 15,
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection:  'row', 
        justifyContent: 'space-between',
    },
    textIsi: {
        fontSize: 15,
        color: 'black',
    },
})

export default ListProses;