"use client";

import styles from "./styles/navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

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

            {
                isDarkTheme && <style jsx global>{
                    `
                        a:hover, .services_list_left a:hover, .services_list_right a:hover{
                            color: dodgerblue;
                        }
        
                        .services_list_left a, .services_list_right a{
                            color: rgb(61, 57, 53);
                        }
        
                        .short_desc p{
                            color: rgb(90, 91, 89)
                        }
        
                        .search_results .search_result{
                            color: black;
                        }
        
                        @media (prefers-color-scheme: dark){
                            body{
                                background-color: #121212;
                                line-height: 1.6;
                            }
        
                            nav{
                                border-bottom-color: #ccc !important;
                            }
        
                            a, .options{
                                color: white;
                            }
        
                            .logo{
                                color: white;
                            }
        
                            .logo img:nth-child(1){ 
                                display: none !important;
                            }
        
                            .logo img:nth-child(2){ 
                                display: block !important;
                            }
        
                            .search_box svg{
                                color: white;
                            }
        
                            .search_box input{
                                background-color: #0f0f0f;
                                border: solid 1px #ccc;
                                color: white;
                            }
        
                            .nav_icon, .nav_icon2{
                                color: white;
                            }
        
                            .mobile_screen_sidebar{
                                background-color: #121212;
                            }
        
                            .close_button{
                                color: white;
                            }
        
                            .services_list_left a, .services_list_right a{
                                color: white;
                            }
        
                            .short_desc h2{
                                color: white;
                            }
        
                            .short_desc p{
                                color: rgb(170, 170, 170);
                            }
        
                            .search_results .search_result h3, .search_results .search_result .bottom_section{
                                color: white;
                            }
        
                            footer{
                                background-color: #1f1f1f !important;
                                border-bottom: solid #ccc 1px;
                            }
        
                            footer a{
                                color: white;
                            }
        
                            .footer_info h2{
                                color: white;
                            }
        
                            .copyright{
                                color: white;
                            }

                            .first_section h2, .first_section h3, .first_section p{
                                color: white;
                            }
                        }
                    `
                    }</style>
            }
        </Link>
    )
}
