"use client"

import styles from "./styles/houseDetailsPage.module.css";
import img from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import QuestionsSection from "./components/QuestionsSection";
import LocalMap from "./components/LocalMap";

export default function HouseDetailsPage() {
    const allImages = [img, img2, img3, img2, img3];

    const [selectedIndex, setSelectedIndex] = useState(0);

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const slideValueResized = useRef<string | undefined>("0");

    const slideValue = useRef<string | undefined>("0");

    function slideImage(e: React.MouseEvent<HTMLElement>, index: number){
        setSelectedIndex(index);

        sliderRef.current!.style.transition = 'all 0.7s';

        if (e !== null && e.target instanceof HTMLElement) {
            
            slideValueResized.current = e.target.dataset.left2;

            slideValue.current = e.target.dataset.left;

            if(sliderRef.current !== null){
                if(window.innerWidth <= 700){
                    sliderRef.current.style.left = `-${e.target.dataset.left2}vw`;
                }else{
                    sliderRef.current.style.left = `-${e.target.dataset.left}vw`;
                }
            }
        }
    }

    function slideRight(e: React.MouseEvent<HTMLElement>){
        if(selectedIndex === allImages.length - 1){
            sliderRef.current!.style.transition = 'unset';
            sliderRef.current!.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
            sliderRef.current!.style.left = `0vw`;
            setSelectedIndex(0);
        }else{
            sliderRef.current!.style.transition = 'all 0.7s';

            setSelectedIndex((prevState)=>(
                prevState += 1
            ));

            if(sliderRef.current !== null){
                if(window.innerWidth <= 700){
                    sliderRef.current.style.left = `-${(selectedIndex + 1) * 100}vw`;
                    slideValue.current = ((selectedIndex + 1) * 100 ).toString();
                }else{
                    sliderRef.current.style.left = `-${(selectedIndex + 1) * 70}vw`;
                    slideValue.current = ((selectedIndex + 1) * 70 ).toString();
                }
            }
        }
    }

    function slideLeft(e: React.MouseEvent<HTMLElement>){
        if(selectedIndex === 0){
            sliderRef.current!.style.transition = 'unset';
            sliderRef.current!.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
            if(window.innerWidth <= 700){
                sliderRef.current!.style.left = `-${(allImages.length - 1) * 100}vw`;
            }else{
                sliderRef.current!.style.left = `-${(allImages.length - 1) * 70}vw`;
            }
            
            setSelectedIndex(allImages.length - 1);
        }else{
            sliderRef.current!.style.transition = 'all 0.7s';

            setSelectedIndex((prevState)=>(
                prevState -= 1
            ));

            if(sliderRef.current !== null){
                if(window.innerWidth <= 700){
                    sliderRef.current.style.left = `-${(selectedIndex - 1) * 100}vw`;
                    slideValue.current = ((selectedIndex - 1) * 100 ).toString();
                }else{
                    sliderRef.current.style.left = `-${(selectedIndex - 1) * 70}vw`;
                    slideValue.current = ((selectedIndex - 1) * 70 ).toString();
                }
            }
        }
    }

    function handleResize(){
        if(sliderRef.current !== null){
            if(window.innerWidth <= 700){
                sliderRef.current.style.left = `-${slideValueResized.current}vw`;
            }else{
                sliderRef.current.style.left = `-${slideValue.current}vw`;
            }
        }
    }

    useEffect(()=>{
        if(sliderRef.current !== null){
          window.addEventListener('resize', handleResize);
        }
      },[])

    return (
        <main>
            <div className={`${styles.first_section} first_section`}>
                <div className={styles.first}>
                    <div className={styles.slider} ref={sliderRef}>
                        {
                            allImages.map((image,index)=>(
                                <div key={index} 
                                    className={styles.img}
                                >
                                <Image
                                    src={image}
                                    alt="Placeholder Image"
                                    placeholder="blur"
                                    quality={100}
                                />
                                </div>
                            ))
                        }
                    </div>

                    <a className={styles.prev}
                        onClick={(e)=>{
                            slideLeft(e);
                        }}
                    >&#10094;
                    </a>
                    <a className={styles.next}
                        onClick={(e)=>{
                            slideRight(e);
                        }}
                    >&#10095;
                    </a> 
                </div>

                <div className={`${styles.extra_info} extra_info`}>
                    <h3>Apartment for sale</h3>

                    <div className={styles.additional_images}>
                        {
                            allImages.map((image, index)=>(
                                <div key={index} 
                                    className={styles.additional_image}
                                    onClick={
                                        (e)=>{slideImage(e, index)}
                                    }
                                >
                                    <Image
                                        src={image}
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

                <h2 style={{textAlign: "center"}}>Map & Location</h2>

                <p style={{textAlign: "center", margin: "20px"}}><FontAwesomeIcon icon={faLocationDot} /> 41 SE 5th St Apt 1608, Miami, FL 33131</p>

                <LocalMap/>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "20px"}}>
                    <button className={styles.order_button}>Add to WishList</button>
                </div>
            </div>

            <QuestionsSection slug="Apartment"/>
        </main>
    )
}
