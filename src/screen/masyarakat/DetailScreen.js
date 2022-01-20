import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Detail = ({navigation}) => {
    return(
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome5 
                        name="chevron-left" 
                        size={30} 
                        style={styles.back}/>
                </TouchableOpacity>
                    <Text style={styles.textHeader}>Detail Laporan</Text>
                </View>
            <View style={styles.background}>
                <View style={styles.text1}>
                    <Text style={{fontWeight: 'bold', color: 'black'}}>Judul Laporan</Text>
                    <TextInput 
                        style={styles.input} />
                </View>
                <View style={styles.text1}>
                    <Text style={{fontWeight: 'bold', color: 'black'}}>Tanggal</Text>
                    <TextInput 
                        style={styles.input} />
                </View>
                <View style={styles.text1}>
                    <Text style={{fontWeight: 'bold', color: 'black'}}>Isi Laporan</Text>
                    <TextInput 
                        style={styles.input} />
                </View>
                <View style={styles.text1}>
                    <Text style={{fontWeight: 'bold', color: 'black'}}>Bukti Laporan</Text>
                    <TextInput 
                        style={{...styles.input, height:150}} />
                </View>
            </View>
            <View>
                <View style={styles.background}>
                    <View>
                        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 23}}>Tanggapan sedang diproses</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row-reverse'}}>
                    <TouchableOpacity style={styles.card1} onPress={() => navigation.goBack()}>
                        <Text style={styles.textLogin}>Kembali</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    
    );
}

const styles = StyleSheet.create({
    back: {
        marginTop: 5,
        color: 'black',
        
        
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
    },
    textHeader: {
        marginLeft: '25%',
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    background: {
        backgroundColor: '#ABDCF0',
        marginTop: 50,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    input: { 
        width: 300, 
        height: 40,
        borderWidth: 2,
        marginTop: 5,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    text1: {
        fontSize: 30,
        color: 'black',
    },
    textLogin: {
        color: 'black',
        fontSize: 15,
        margin: 10,
    },
    card1: {
        backgroundColor: '#93A8F5',
        width: 100,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 25,
        margin: 5

    },
})

export default Detail;