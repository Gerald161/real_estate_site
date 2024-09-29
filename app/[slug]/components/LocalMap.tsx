"use client"

import { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function LocalMap({ params }: { params: { latitude: number, longitude: number } }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_KEY as string,
        libraries: ["places"],
    });

    const [center, setCenter] = useState({ lat: params.latitude, lng: params.longitude });

    if (isLoaded){
        return (
            <GoogleMap
                zoom={13}
                center={center}
                mapContainerStyle={{
                    height: "400px",
                    width: "100%"
                }}
                >
                <Marker position={center} />
            </GoogleMap>
        )
    }else{
        return (
            <div style={{padding: "20px"}}>Loading...</div>
        )
    }
    
}
