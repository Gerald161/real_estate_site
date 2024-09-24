"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from "./styles/navbar.module.css";
import "../search/styles/map.css";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete from "use-places-autocomplete";
import Link from 'next/link';

export default function NavBarSearchForm() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_KEY as string,
        libraries: ["places"],
    });

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
      };

    if(isLoaded){
        return (
            <>
                <form method="get" action="/search?location=" className={`${styles.search_box} search_box`}>
                    <input 
                        type="text" 
                        placeholder="Type your preferred location"
                        onChange={(e)=> setValue(e.target.value)} 
                        value={value}
                        disabled={!ready}
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    
                    <div 
                        className={`address_suggestions ${data.length !== 0 && "show_border"}`}
                        style={{
                            top: "35px",
                            left: "5px"
                        }}
                    >
                    {
                        status === "OK" && 
                        data.map(({place_id, description})=>(
                            <Link key={place_id} href={`/search?location=${description.replace(/ /g, "-")}`}>{description}</Link>
                        ))
                    }
                    </div>
                </form>
            </>
        )
    }else{
        <form method="get" action="/search" className={`${styles.search_box} search_box`}>
          <input 
            type="text" 
            placeholder="Type your preferred location"
            onChange={(e)=> setValue(e.target.value)}
            />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </form>
    }
}
