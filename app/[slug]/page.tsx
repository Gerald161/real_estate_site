"use client"

import styles from "./styles/houseDetailsPage.module.css";
import img from "../images/1.jpg";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function HouseDetailsPage() {
    const allImages = ["", "", ""];

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <main>
            <div className={`${styles.first_section} first_section`}>
                <div className={styles.first}>
                    <div className={styles.slider}>
                        {
                            allImages.map((image,index)=>(
                                <div key={index} className={styles.img}>
                                <Image
                                    src={img}
                                    alt="Placeholder Image"
                                    placeholder="blur"
                                    quality={100}
                                />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={`${styles.extra_info} extra_info`}>
                    <h3>Apartment for sale</h3>

                    <div className={styles.additional_images}>
                        {
                            allImages.map((image, index)=>(
                                <div key={index} className={styles.additional_image}>
                                    <Image
                                        src={img}
                                        alt="Welcome Image 1"
                                        placeholder="blur"
                                        quality={30}
                                        className={index !== selectedIndex ? styles.inactive : ""}
                                        data-left={index * 70} data-left2={index * 100} 
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <h2 style={{textAlign: "center"}}>$250,000</h2>

                <p style={{margin: "20px", textAlign: "center"}}><span style={{fontWeight: "bold"}}>2</span> bed | <span style={{fontWeight: "bold"}}>2</span> bath | <span style={{fontWeight: "bold"}}>1,402</span> sqft</p>

                <p style={{textAlign: "center"}}><FontAwesomeIcon icon={faLocationDot} /> 41 SE 5th St Apt 1608, Miami, FL 33131</p>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "20px"}}>
                    <button className={styles.order_button}>Add to WishList</button>
                </div>
            </div>
        </main>
    )
}
