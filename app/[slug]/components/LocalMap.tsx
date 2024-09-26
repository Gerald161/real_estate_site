"use client"

import { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function LocalMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_KEY as string,
        libraries: ["places"],
    });

    const [center, setCenter] = useState({ lat: 43.45, lng: -80.49 });

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
