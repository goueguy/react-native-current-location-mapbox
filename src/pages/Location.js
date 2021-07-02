import React, {useState,useEffect } from "react";
import {SafeAreaView,StyleSheet, View, Text,FlatList, Alert } from "react-native";
import {MAPBOX_PUBLIC_KEY,MAPBOX_SECRET_KEY} from '../../key';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from 'react-native-geolocation-service';
import Address from './Address';

MapboxGL.setAccessToken(MAPBOX_PUBLIC_KEY);

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    container: {
        height: 300,
        width: 300,
        backgroundColor: "tomato"
    },
    map: {
        flex: 1
    }
});


const Location = (props)=>{
    const [address, setAddress] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    //console.log(address.features[0].place_name);
    console.log(address);
    //MapboxGL.camera.moveTo([latitude,longitude]);
    useEffect(() => {
        //setCoordinates([latitude,longitude]);
        MapboxGL.setTelemetryEnabled(false);
        
            Geolocation.getCurrentPosition(
                (position)=>{
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error=>console.log(error))
                ,
                {timeout:15000,maximumAge:10000}
            )
            setLocationInfo();
            
    }, [latitude,longitude]);
    const setLocationInfo = ()=>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?limit=1&access_token=${MAPBOX_PUBLIC_KEY}`)
        .then(response=>response.json())
        .then(data=>{
            data.features.forEach((item,index)=>
                setAddress(item.place_name)
            );
        })
        .catch(error=>console.error(error))
    }
    
    return (
            <View>
                <View>
                    <MapboxGL.MapView
                style={{ width: '100%',height:'95%' }}
                styleURL={MapboxGL.StyleURL.Street}
                showUserLocation={true}
                zoomLevel={10}
                zoomEnabled={true}
                centerCoordinate={[longitude,latitude]}
                anchor={{x:0.5,y:0.5}}
                rotateEnabled={true}
                >
                <MapboxGL.Camera 
                    zoomLevel={13}
                    centerCoordinate={[longitude,latitude]}
                    followUserLocation={true}
                    animationMode={'moveTo'}
                followUserLocation={true}
                />
                {/* <MapboxGL.PointAnnotation 
                    id="point"
                    coordinate={[longitude,latitude]}

                /> */}
                <MapboxGL.UserLocation />

                <MapboxGL.CircleLayer 
                id="circle"

                />
        
                </MapboxGL.MapView>

                </View>
                <Address data={address}/>

            </View>
    
    );
    
}

export default Location;