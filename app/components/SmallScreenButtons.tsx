"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from "./styles/navbar.module.css";
import { useContext } from 'react';
import { SideBarContext } from "../contexts/SideBarContext";
import Link from "next/link";

export default function SmallScreenButtons() {
    // const { dispatch, sideBarState }
    const { dispatch } = useContext(SideBarContext);

    function openOptions(){
        dispatch({type: "OPEN_SIDEBAR"})
    }

    return (
        <>
            <Link href="/search">
                <FontAwesomeIcon style={{marginRight: "20px", cursor: "pointer"}} className={`${styles.nav_icon2} nav_icon2`} icon={faMagnifyingGlass} />
            </Link>

            <FontAwesomeIcon icon={faBars} className={`${styles.nav_icon} nav_icon`} onClick={()=>{openOptions()}}/>
        </>
    )
}
