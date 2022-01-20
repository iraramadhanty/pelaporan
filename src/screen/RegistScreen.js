import React, { useState } from "react";
import { 
    TextInput,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const Regist = ({navigation}) => {
    const [nama, setNama] = useState('');
    const [nik, setNik] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Text style={styles.text1}>Registrasi</Text>
            <Image 
                style={styles.image}
                source={require('../../assets/images/Logo.png')} />
            <View>
                <Text style={styles.text}>Nama</Text>
                <TextInput 
                    placeholder='Nama'
                    style={styles.input}
                    value={nama}
                    onChangeText={setNama} />
            </View>
            <View>
                <Text style={styles.text}>NIK</Text>
                <TextInput 
                    placeholder='NIK'
                    style={styles.input}
                    value={nik}
                    onChangeText={setNik}
                    keyboardType='number-pad' />
            </View>
            <View>
                <Text style={styles.text}>Username</Text>
                <TextInput 
                    placeholder='Username'
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername} />
            </View>
            <View>
                <Text style={styles.text}>Password</Text>
                <TextInput 
                    placeholder='Password'
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true} />
            </View>
            <View style={{flexDirection:'row-reverse'}}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textLogin}>Daftar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Text style={{color: 'black'}} >Sudah memiliki akun?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{flexDirection: 'row'}} style={styles.textDaftar}>
                    <Text style={styles.textDaftar}>Masuk</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30
    },
    text1: {
        fontSize: 40,
        marginTop: 25,
        color: 'black',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginStart: 10,
        marginTop: 15,
    },
    input: { 
        backgroundColor: '#D8E5ED',
        width: 390, 
        height: 40,
        marginTop: 5,
        borderRadius: 10,
        marginStart: 10,
        elevation: 5
    },
    textLogin: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 10,
        color: 'black',
        fontSize: 20,
        margin: 10
    },
    textDaftar: {
        color: '#387BBB',
        fontSize: 15,
        marginRight: 15,
        flexDirection: 'row',
    },
    card: {
        backgroundColor: '#387BBB',
        width: 390,
        height: 50,
        marginTop: 20,
        borderRadius: 10,
        margin: 10,
        elevation: 6
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15
    }
})

export default Regist;