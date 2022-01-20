import axios from "axios";
import React, { useLayoutEffect, useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ImagePicker from 'react-native-image-crop-picker';

const Form = ({navigation}) => {
    // const [judul, setJudul] = useState();
    // const [isi, setIsi] = useState();
    // const [bukti, setBukti] = useState();
    // const [time, setTime] = useState();

    const Report = () => {
        axios.post("192.168.18.18/api/lapor").then(
            (response) => {
                console.log(response);
                setReport(response.data)
            }
        );
    };

    const [image, setImage] = useState('http://192.168.18.18/reports');
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
    }

    return(
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome5 
                        name="chevron-left" 
                        size={30} 
                        style={styles.back}/>
                </TouchableOpacity>
                    <Text style={styles.textHeader}>Form Pengaduan</Text>
                </View>
            <View style={styles.background}>
                <View style={styles.text1}>
                    <Text>Judul Laporan</Text>
                    <TextInput 
                        style={styles.input}
                        // value={judul} 
                        />
                </View>
                <View style={styles.text1}>
                    <Text>Tanggal</Text>
                    <TextInput 
                        style={styles.input}
                        // value={time} 
                        />
                </View>
                <View style={styles.text1}>
                    <Text>Isi Laporan</Text>
                    <TextInput 
                        style={styles.input}
                        // value={isi}
                        />
                </View>
                <View style={styles.text1}>
                    <Text>Bukti</Text>
                    <TouchableOpacity
                        onPress={choosePhotoFromLibrary}
                        style={styles.input}
                        // value={bukti}
                        >
                            <ImageBackground source={{ uri: image }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.card1} onClick={Report}>
                    <Text onClick={Report} style={styles.textLogin}>Kirim</Text>
                </TouchableOpacity>
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
        marginLeft: '20%',
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    background: {
        backgroundColor: '#ABDCF0',
        height: 550,
        marginTop: 100,
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
        fontSize: 20,
        color: 'black',
        marginStart: 10,
        marginTop: 20,
    },
    textLogin: {
        color: 'black',
        fontSize: 15,
        margin: 10
    },
    card1: {
        backgroundColor: '#93A8F5',
        width: 100,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40
    },
    inputfoto: {
        backgroundColor: '#f6f6f6',
        marginLeft: 24,
        height: 212,
        width: 314,
        borderRadius: 8,
        paddingLeft: 16,
        marginTop: 12
    },
})
export default Form;