import React from 'react';
import {View, Text} from 'react-native';

const Address = (props) => {
    console.log(props);
    return (
        <View style={{height:"5%", backgroundColor:"#000",padding: 5}}>
                    <Text style={{textAlign:"center",color:"#fff"}}>Vous êtes à {props.data}</Text>
        </View>
    );
}

export default Address;
