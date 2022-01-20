import React, { useState } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

const CustomSwitch = ({
    selectionMode,
    option1,
    option2,
    onSelectSwitch
}) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value); 
        onSelectSwitch(value);
    }
    
    return(
        <View style={styles.header}>
            <TouchableOpacity
                activeOpacity={1}
                onPress = {() => updateSwitchData(1)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 1 ? '#ABDCF0' : '#387BBB',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                <Text style={{
                    color: getSelectionMode == 1 ? 'white' : '#ABDCF0',
                    fontSize: 20,
                }}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress = {() => updateSwitchData(2)}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode == 2 ? '#ABDCF0' : '#387BBB',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    color: getSelectionMode == 2 ? 'white' : '#ABDCF0',
                    fontSize: 20,
                }}>{option2}</Text>
            </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({
    header: {
        height: 45,
        width: '100%',
        backgroundColor: '#387BBB',
        borderColor: '#ABDCF0',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default CustomSwitch;