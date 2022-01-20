import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Alert, 
    Modal,
    Pressable,
    ScrollView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ModalView from './component/ModalView';
import CustomSwitch from './component/CustomSwitch';
import ListProses from './component/ListProses';
import ListSelesai from './component/ListSelesai';


export const windowWidth = Dimensions.get('window').width;

const Home = () => {
    const navigation = useNavigation();
    const [pengaduan, setPengaduan] = useState(1);

    const onSelectSwitch = (value) => {
        setPengaduan(value);
    }

  return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <ModalView /> 
            <View style={styles.card}>
                <Text style={styles.text}>
                Jika Anda memiliki keluhan, maka segera laporkan agar kami bisa mengurusnya dengan cepat
                </Text>
            </View>        
            <View style={styles.switch}>
                <CustomSwitch 
                    selectionMode={1} 
                    option1='Sedang diproses'
                    option2='Selesai'
                    onSelectSwitch={onSelectSwitch}/> 
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Form')} >
                    <View style={styles.cardForm}>
                        <Text style={{marginTop: 5, color: 'black'}}>Isikan Laporanmu disini </Text>
                        <FontAwesome5 
                            name="plus-circle" 
                            size={30}
                            color={'black'}/>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {pengaduan == 1 && <ListProses />}
                {pengaduan == 2 && <ListSelesai /> }
            </ScrollView>
        </View>
  );
};
const styles = StyleSheet.create({
    textStyle: {
        marginTop: 5,
        fontSize: 20,
        padding: 10,
        color: 'black',
        textAlign: 'center'
    },
    card: {
        backgroundColor: '#ABDCF0',
        width: '95%',
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    card1: {
        backgroundColor: '#ABDCF0',
        width: '95%',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        margin: 10,
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
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    switch: {
        marginTop: 20,
        width: windowWidth-40,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
});

export default Home;