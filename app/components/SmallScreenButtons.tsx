"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMoon, faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from "./styles/navbar.module.css";
import { useContext } from 'react';
import { SideBarContext } from "../contexts/SideBarContext";

export default function SmallScreenButtons() {
    const { dispatch, sideBarState } = useContext(SideBarContext);

    function openOptions(){
        dispatch({type: "OPEN_SIDEBAR"})

        console.log("yo")
    }

    return (
        <>
            <FontAwesomeIcon style={{marginRight: "20px", cursor: "pointer"}} className={styles.nav_icon2} icon={faMagnifyingGlass} />

            <FontAwesomeIcon icon={faBars} className={styles.nav_icon} onClick={()=>{openOptions()}}/>
        </>
    )
}
