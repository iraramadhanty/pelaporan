import React, { useState } from "react";
import { 
    TextInput,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert
} from "react-native";
import Users from "./component/Users";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from "./context";
import axios, { Axios } from "axios";

const Login = ({navigation}) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        isValidUser: true,
        isValidPassword: true,
    });

    const {signIn} = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const handleValidPassword = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }
    
    const handleSignin = async (item) => {
        try {
            let field = item[0];
            if (field.username === "user1" && field.password === "password1") {
                AsyncStorage.setItem("@token", "1234")
                navigation.navigate("Home")
                Alert.alert("sukses")
            } else {
                Alert.alert("Peringatan", "Maaf akun tidak ditemukan")
            }
        } catch (e) {
            console.log(e)
        }
    }

    const loginHandle = (userName, password) => {
        const foundUser = Users?.filter(item => {
            return userName == item.username && password == item.password;
        });
        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or Password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

         if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or Password is incorret.', [
                { text: 'Okay' }
            ]);
            return;
        }
        handleSignin(foundUser);
    }

    React.useEffect(() => {
        (async()=>{
        let userToken = AsyncStorage.getItem("userToken");
        if (userToken === '1234') {
            setTimeout(() => {
                navigation.replace('Home');
            }, 500);
        }
      })()
    }, []);

    React.useEffect(() => {
        const dataLogin = {
            username : '',
            password : ''
        }
        // console.log('data object: ', dataLogin);
        // console.log('data stringify: ', dataLogin);
        axios.post("http://127.0.0.1:8000/api/reports", {
            'judul': 'pengaduan',
            'deskripsi' : 'hdhhshs',
    }).then(
            (response) => {
                console.log(response);
                setReport(response.data)
            }
        );
    }, []);

    return(
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Text style={styles.textStyle}>Login</Text>
            <Image 
                style={styles.image}
                source={require('../../assets/images/Logo.png')} />
            <View>
                <Text style={styles.text}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(error) => handleValidUser(error.nativeEvent.text)} />
                {data.isValidUser ? null :
                    <Text style={styles.errormsg}> username must be 4 characters long.</Text>
                }
            </View>
            <View >
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={{...styles.input, justifyContent:'space-between'}}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(val) => handleValidPassword(val)}
                    onEndEditing={(error) => handleValidPassword(error.nativeEvent.text)} />

                {data.isValidPassword ? null :
                    <Text style={styles.errormsg}> Password must be 8 characters long.</Text>
                }
            </View>
            <View>
                <TouchableOpacity style={styles.card} onPress={() => { loginHandle(data.username, data.password) }}>
                    <Text style={styles.textLogin}>Masuk</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Text style={{color: 'black'}}>Belum memiliki akun?</Text>
                <TouchableOpacity onPress={() => buttonLogin()}>
                    <Text style={styles.textDaftar}>Daftar</Text>
                </TouchableOpacity>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    textStyle: {
        marginTop: 80,
        fontSize: 40,
        color: 'black',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginStart: 10,
        marginTop: 20,
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
        margin: 10,
    },
    textDaftar: {
        color: '#387BBB',
        fontSize: 15,
        textAlign: 'center'
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
        flexDirection:'row', 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    errormsg: {
        flex: 1,
        color: '#EA3757',
        marginLeft: 40
    }
})

export default Login;