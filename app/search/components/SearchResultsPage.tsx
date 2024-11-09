"use client"

import styles from "../styles/search.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredHomes } from "@/app/components/FeaturedHomes";

export default function SearchResultsPage() {
  const [saleOptionsOpened, setSaleOptionsOpened] = useState(false);

  const [priceOptionsOpened, setPriceOptionsOpened] = useState(false);

  const [chosenPropertyOption, setChosenPropertyOption] = useState(0)

  return (
    <div className={`${styles.filter_results_section} filter_results_section`}>
      <div style={{display: "flex", gap: "20px"}}>
        <div className={`${styles.property_option} property_option`}>
          <div 
            onClick={()=>{
              setSaleOptionsOpened((prevState)=>
                !prevState
              );
              setPriceOptionsOpened(false);
            }}
            className={`${styles.property_option_button} property_option_button`}>
            For Sale
            <FontAwesomeIcon icon={faCaretDown} />
          </div>

          {
            saleOptionsOpened && (
              <div className={`${styles.selected_option_dropdown} selected_option_dropdown`}>
                <div className={styles.input_container}>
                  <input 
                    type="radio" 
                    id="sale" 
                    checked={chosenPropertyOption == 0} 
                    name="type_of_property" 
                    value="sale"
                    onChange={()=>{
                      setChosenPropertyOption(0)
                    }}
                  />
                  <label htmlFor="sale">For Sale</label>
                </div>
                <div className={styles.input_container}>
                  <input 
                    type="radio" 
                    id="rent" 
                    checked={chosenPropertyOption == 1} 
                    name="type_of_property" 
                    value="rent"
                    onChange={()=>{
                      setChosenPropertyOption(1)
                    }}
                  />
                  <label htmlFor="rent">For Rent</label>
                </div>
                <div className={styles.input_container}>
                  <input 
                    type="radio" 
                    id="lease" 
                    checked={chosenPropertyOption == 2} 
                    name="type_of_property" 
                    value="lease"
                    onChange={()=>{
                      setChosenPropertyOption(2)
                    }}
                  />
                  <label htmlFor="lease">Lease</label>
                </div>
              </div>
            )
          }
        </div>

        <div className={`${styles.property_option} property_option`}>
          <div 
            onClick={()=>{
              setSaleOptionsOpened(false);
              setPriceOptionsOpened((prevState=>
                !prevState
              ));
            }}
            className={`${styles.property_option_button} property_option_button`}>
            Price
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
  
          {
            priceOptionsOpened && (
              <div className={`${styles.selected_option_dropdown} selected_option_dropdown`}>
                <p style={{margin: "10px 10px 0 10px"}}>Price Range</p>

                <div className={styles.select_container}>
                  <div className={styles.label}>
                    <p>Minimum</p>
      
                    <select style={{fontSize: "0.9em", textAlign: "center"}} name="minimum">
                      <option value="">No Min</option>
                      <option value="100000">$100,000</option>
                      <option value="150000">$150,000</option>
                      <option value="200000">$200,000</option>
                      <option value="250000">$250,000</option>
                      <option value="300000">$300,000</option>
                      <option value="350000">$350,000</option>
                    </select>
                  </div>
      
                  <div className={styles.label}>
                    <p>Maximum</p>
      
                    <select name="maximum">
                      <option value="">No Max</option>
                      <option value="150000">$150,000</option>
                      <option value="200000">$200,000</option>
                      <option value="250000">$250,000</option>
                      <option value="300,000">$300,000</option>
                      <option value="350,000">$350,000</option>
                      <option value="400000+">$400,000+</option>
                    </select>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className={`${styles.search_results} search_results`}>
        {
          featuredHomes.map((home, index)=>
            <div key={index} className={`${styles.search_result} search_result`}>
              <Link href={`/property-${index + 1}`} className={styles.search_result_image_container}>
                <Image
                  src={home.img1}
                  alt="Lobby Image 2"
                  placeholder="blur"
                  quality={40}
                />
                <Image
                  src={home.img2}
                  alt="Lobby Image 2"
                  placeholder="blur"
                  quality={40}
                />
                <div className={styles.image_overlay_info}>
                  <p>{home.time_posted} days ago</p>
                </div>
              </Link>
              <h3>${home.price}</h3>
              
              <div className={`${styles.bottom_section} bottom_section`}>
                <p><span style={{fontWeight: "bold"}}>{home.bed}</span> beds | <span style={{fontWeight: "bold"}}>{home.bath}</span> ba | <span style={{fontWeight: "bold"}}>{home.sqft}</span> sqft - {home.description}</p>
                <p><FontAwesomeIcon icon={faLocationDot} />{home.address}</p>
              </div>
            </div>
          )
        }
      </div>

      <p className={`${styles.page_numbering_section} page_numbering_section`}>Viewing page 1 of 7</p>

      <div className={`${styles.pagination_container} pagination_container`}>
        <a href="" className={`${styles.active_page} active_page`}>1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
        <a href="">6</a>
        <a href="">7</a>
      </div>

      <style jsx global>
          {
            `
              .search_box{
                opacity: 0;
                pointer-events: none;
              }

              @media(max-width: 700px){
                .search_box{
                  opacity: 1;
                  pointer-events: auto;
                  display: block !important;
                }

                .search_box input{
                  min-width: 100%;
                  padding-right: 25px;
                }

                .nav_icon2{
                  display: none !important;
                }

                h5{
                  display: none;
                }
              }
            `
          }
      </style>
    </div>
  )
}
