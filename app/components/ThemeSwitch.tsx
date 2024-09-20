"use client";

import styles from "./styles/navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import "./darkStyles/homeDarkTheme.css";

export default function ThemeSwitch() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    function toggleTheme(){
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <Link href="#" className={`${styles.options} options`} onClick={(e)=>{
                e.preventDefault();
                toggleTheme();
            }}>
            {
                isDarkTheme ? <FontAwesomeIcon icon={faSun} />
                : <FontAwesomeIcon icon={faMoon} />
            }
            <p>{isDarkTheme ? "Light" : "Dark"}</p>
        </Link>
    )
}
