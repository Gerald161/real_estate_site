"use client"

import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "../styles/map.css";
import { useSearchParams } from 'next/navigation';

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
    libraries: ["places"],
  });

  if (!isLoaded) return <div style={{padding: "20px"}}>Loading...</div>;
  return <Map />;
}

function Map() {
  const [center, setCenter] = useState({ lat: 43.45, lng: -80.49 });

  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(null);

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} setCenter={setCenter}/>
      </div>

      <GoogleMap
        zoom={13}
        center={center}
        mapContainerClassName="map_container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}

type PlacesAutocompleteProps = {
  setSelected: (value: { lat: number; lng: number }) => void;
  setCenter: (value: { lat: number; lng: number }) => void; 
};

const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({ setSelected, setCenter }) => {
  const searchParams = useSearchParams();
 
  const search = searchParams.get('location');

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    setCenter({lat, lng});
  };

  useEffect(()=>{
    if(search !== null){
      (async () => {
        const address = (search.replace(/-/g, " ")) as string

        setValue(address);

        const results = await getGeocode({ address });

        const { lat, lng } = await getLatLng(results[0]);

        setSelected({ lat, lng });

        setCenter({lat, lng});
     })();
    }
  }, [ready])

  return (
    <>
      <div className="address_search_container">
        <input 
          type="text"
          onChange={(e)=> setValue(e.target.value)} 
          value={value}
          disabled={!ready}
          placeholder="Address of property"
        />

        <FontAwesomeIcon onClick={()=>{
          setValue("");
          clearSuggestions();
        }} icon={faXmark} />
      </div>

      <div className={`address_suggestions ${data.length !== 0 && "show_border"}`}>
      {
        status === "OK" && 
        data.map(({place_id, description})=>(
          <a key={place_id} href="" onClick={(e)=>{
            e.preventDefault()
            handleSelect(description)
          }}>{description}</a>
        ))
      }
      </div>
    </>
  );
};
