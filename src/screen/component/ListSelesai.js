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

const ListSelesai = () => {
    return(
        <SafeAreaView>
            <ScrollView>
                <CardList 
                    judul = "Permasalahan jalanan rusak"
                    status = "Selesai"
                />
                <CardList 
                    judul = "Permasalahan jalanan rusak"
                    status = "Selesai"
                />
                <CardList 
                    judul = "Permasalahan jalanan rusak"
                    status = "Selesai"
                />
                <CardList 
                    judul = "Permasalahan jalanan rusak"
                    status = "Selesai"
                />
                <CardList 
                    judul = "Permasalahan jalanan rusak"
                    status = "Selesai"
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
    textIsi: {
        fontSize: 15,
        color: 'black',
    },
})

export default ListSelesai;