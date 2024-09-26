"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from "./styles/navbar.module.css";
import Link from "next/link";
import { useContext } from 'react';
import { SideBarContext } from "../contexts/SideBarContext";

export default function SmallScreenOptions() {
    const { dispatch, sideBarState } = useContext(SideBarContext);

    function closeOptions(){
        dispatch({type: "CLOSE_SIDEBAR"})
    }

    return (
        <div className={`${styles.mobile_screen_sidebar} mobile_screen_sidebar`} style={{left: sideBarState === "open" ? "0" : "100%"}}>
            <FontAwesomeIcon onClick={()=>{closeOptions()}} icon={faTimes} className={`${styles.close_button} close_button`}/>

            <div style={{display: "flex",  width: "100%", flexDirection: "column"}}>
                <Link href="#" style={{textAlign: "center"}}>Sign in</Link>
                <Link href="#" style={{textAlign: "center"}}>Wish List</Link>
                <Link href="#" style={{textAlign: "center"}}>Services</Link>
                <Link href="#" style={{textAlign: "center"}}>Contact</Link>
            </div>
        </div>
    )
}
