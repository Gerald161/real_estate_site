"use client";

import styles from "./styles/navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";

export default function ThemeSwitch() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    function toggleTheme(){
        setIsDarkTheme(!isDarkTheme)
    }

    useEffect(() => {
        const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    
        const updateTheme = (e: MediaQueryListEvent) => {
          setIsDarkTheme(e.matches);
        };
    
        // Initial theme check
        setIsDarkTheme(matchMedia.matches);
    
        // Add listener for theme changes
        matchMedia.addEventListener('change', updateTheme);
    
        // Cleanup listener on component unmount
        return () => {
          matchMedia.removeEventListener('change', updateTheme);
        };
      }, []);

    return (
        <Link href="#" className={`${styles.options} options`} onClick={(e)=>{
                e.preventDefault();
                toggleTheme();
            }}>
            {
                isDarkTheme ? <FontAwesomeIcon icon={faSun} />
                : <FontAwesomeIcon icon={faMoon} />
            }

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
        
                        // @media (prefers-color-scheme: dark){
                            body{
                                background-color: #121212;
                                line-height: 1.6;
                            }

                            .loading{
                               color: white; 
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

                            .main .filter_results_section .page_numbering_section{
                                color: white;
                            }

                            .main .filter_results_section .pagination_container a{
                                color: white;
                            }

                            .main .filter_results_section .pagination_container a:hover{
                                color: black;
                            }

                            .main .filter_results_section .property_option .property_option_button{
                                border: solid 1px #ccc;
                                color: white;
                            }

                            .main .filter_results_section .property_option .property_option_button:hover{
                                background-color: white; 
                                color: black;
                            }

                            .main .filter_results_section .property_option .selected_option_dropdown{
                                background-color: #333; 
                                border-color: #333;
                            }

                            .main .filter_results_section .property_option .selected_option_dropdown label{
                                color: white;
                            }

                            .main .filter_results_section .property_option .selected_option_dropdown p{
                                color: white;
                            }

                            .address_search_container input{
                                background-color: #0f0f0f;
                                color: white;
                            }

                            .address_search_container svg{
                                color: white;
                            }

                            .address_suggestions{
                                background-color: #333; 
                            }

                            .address_suggestions a{
                                color: white;
                            }

                            .questionSection, .questionSection .message_content_section .chat_window{
                                background-color: #333;
                                color: white;
                            }

                            .questionSection h2{
                                color: white;
                            }

                            .message{
                                background: #333;
                                color: white;
                            }

                            .output .profile_pic2{
                                background: white;
                            }

                            .ai_chat_button{
                                background: white;
                            }

                            .response, .output .profile_pic{
                                background: #444444;
                            }

                            .ai_button_container p{
                                background: #333;
                            }
                        // }
                    `
                    }</style>
            }
        </Link>
    )
}
