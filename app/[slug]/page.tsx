"use client"

import styles from "./styles/houseDetailsPage.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import QuestionsSection from "./components/QuestionsSection";
import LocalMap from "./components/LocalMap";
import { notFound } from "next/navigation";
import { featuredHomes } from "../components/FeaturedHomes";

export default function HouseDetailsPage({ params }: { params: { slug: string }}) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const slideValueResized = useRef<string | undefined>("0");

    const slideValue = useRef<string | undefined>("0");

    const propertyIndex = useRef((parseInt(params.slug.split("-")[1]) - 1))

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

    // e: React.MouseEvent<HTMLElement>
    function slideRight(){
        if(selectedIndex === featuredHomes[propertyIndex.current].carousel_images.length - 1){
            sliderRef.current!.style.transition = 'unset';
            sliderRef.current!.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
            sliderRef.current!.style.left = `0vw`;
            slideValue.current = "0";
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

    function slideLeft(){
        if(selectedIndex === 0){
            sliderRef.current!.style.transition = 'unset';
            sliderRef.current!.animate([{opacity:'0.2'},{opacity:"1.0"}],{duration:500,fill:'forwards'});
            if(window.innerWidth <= 700){
                sliderRef.current!.style.left = `-${(featuredHomes[propertyIndex.current].carousel_images.length - 1) * 100}vw`;
                slideValue.current = ((featuredHomes[propertyIndex.current].carousel_images.length - 1) * 100 ).toString();
            }else{
                sliderRef.current!.style.left = `-${(featuredHomes[propertyIndex.current].carousel_images.length - 1) * 70}vw`;
                slideValue.current = ((featuredHomes[propertyIndex.current].carousel_images.length - 1) * 70 ).toString();
            }
            
            setSelectedIndex(featuredHomes[propertyIndex.current].carousel_images.length - 1);
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

    if((parseInt(params.slug.split("-")[1])) > featuredHomes.length){
        notFound()
    }else{
        return (
            <main>
                <div className={`${styles.first_section} first_section`}>
                    <div className={styles.first}>
                        <div className={styles.slider} ref={sliderRef}>
                            {
                                featuredHomes[propertyIndex.current].carousel_images.map((image,index)=>(
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
                            onClick={()=>{
                                slideLeft();
                            }}
                        >&#10094;
                        </a>
                        <a className={styles.next}
                            onClick={()=>{
                                slideRight();
                            }}
                        >&#10095;
                        </a> 
                    </div>
    
                    <div className={`${styles.extra_info} extra_info`}>
                        <h3>{featuredHomes[propertyIndex.current].description}</h3>
    
                        <div className={styles.additional_images}>
                            {
                                featuredHomes[propertyIndex.current].carousel_images.map((image, index)=>(
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
    
                    <h2 style={{textAlign: "center"}}>${featuredHomes[propertyIndex.current].price}</h2>
    
                    <p style={{margin: "20px", textAlign: "center"}}><span style={{fontWeight: "bold"}}>{featuredHomes[propertyIndex.current].bed}</span> bed | <span style={{fontWeight: "bold"}}>{featuredHomes[propertyIndex.current].bath}</span> bath | <span style={{fontWeight: "bold"}}>{featuredHomes[propertyIndex.current].sqft}</span> sqft</p>
    
                    <h2 style={{textAlign: "center"}}>Map & Location</h2>
    
                    <p style={{textAlign: "center", margin: "20px"}}><FontAwesomeIcon icon={faLocationDot} />{featuredHomes[propertyIndex.current].address}</p>
    
                    <LocalMap params={{
                        latitude: featuredHomes[propertyIndex.current].location.latitude,
                        longitude: featuredHomes[propertyIndex.current].location.longitude,
                    }}/>
    
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "20px"}}>
                        <button className={styles.order_button}>Add to WishList</button>
                    </div>
                </div>
    
                <QuestionsSection slug={JSON.stringify(featuredHomes[propertyIndex.current])}/>
            </main>
        )
    }
}
