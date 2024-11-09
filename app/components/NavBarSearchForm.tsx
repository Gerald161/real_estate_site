"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from "./styles/navbar.module.css";
import "../search/styles/map.css";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete from "use-places-autocomplete";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavBarSearchForm() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "",
        libraries: ["places"],
    });

    if(!isLoaded){
        return <div className='loading'>Loading...</div>;
    }else{
        return <NavAutoSearch/>;
    }
}

function NavAutoSearch(){
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const router = useRouter();

    return (
        <>
            <form 
                method="get" 
                action="/search?location=" 
                className={`${styles.search_box} search_box`}
                onSubmit={(e)=>{
                    e.preventDefault()
                    router.push(`/search?location=${value.replace(/ /g, "-")}`)
                }}
                >
                <input 
                    type="text" 
                    placeholder="Search for location"
                    onChange={(e)=> setValue(e.target.value)} 
                    value={value}
                    disabled={!ready}
                />

                <FontAwesomeIcon icon={faMagnifyingGlass} />

                <FontAwesomeIcon 
                    style={{
                        position: "absolute",
                        width: "22px",
                        height: "22px",
                        top: "17%",
                        right: "5px",
                        cursor: "pointer"
                    }}
                    onClick={()=>{
                        setValue("");
                        clearSuggestions();
                    }} 
                    icon={faXmark} 
                />
                
                <div 
                    className={`address_suggestions ${data.length !== 0 && "show_border"}`}
                    style={{
                        top: "35px",
                    }}
                >
                {
                    status === "OK" && 
                    data.map(({place_id, description})=>(
                        <Link key={place_id}
                        onClick={()=>{
                            setValue("");
                            clearSuggestions();
                        }}
                         href={`/search?location=${description.replace(/ /g, "-")}`}
                        >{description}
                        </Link>
                    ))
                }
                </div>
            </form>
        </>
    )
}