"use client"

import styles from "../styles/search.module.css";
import styles2 from "../../styles/page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Image from "next/image";
import Img2 from "../../images/hotel.jpg";
import Img3 from "../../images/2.jpg";
import Link from "next/link";

export default function SearchResultsPage() {
  const [saleOptionsOpened, setSaleOptionsOpened] = useState(false);

  const [priceOptionsOpened, setPriceOptionsOpened] = useState(false);

  const featuredHomes = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
  ];

  return (
    <div className={`${styles.filter_results_section} filter_results_section`}>
      <div style={{display: "flex", gap: "20px"}}>
        <div className={`${styles.property_option} property_option`}>
          <div 
            onClick={(e)=>{
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
                  <input type="radio" id="sale" name="type_of_property" value="sale"/>
                  <label htmlFor="sale">For Sale</label>
                </div>
                <div className={styles.input_container}>
                  <input type="radio" id="rent" name="type_of_property" value="rent"/>
                  <label htmlFor="rent">For Rent</label>
                </div>
                <div className={styles.input_container}>
                  <input type="radio" id="lease" name="type_of_property" value="lease"/>
                  <label htmlFor="lease">Lease</label>
                </div>
              </div>
            )
          }
        </div>

        <div className={`${styles.property_option} property_option`}>
          <div 
            onClick={(e)=>{
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
                      <option value="500">$500</option>
                      <option value="1000">$1000</option>
                      <option value="1500">$1500</option>
                      <option value="10000">$10000</option>
                      <option value="50000">$50000</option>
                      <option value="10000">$10000</option>
                    </select>
                  </div>
      
                  <div className={styles.label}>
                    <p>Maximum</p>
      
                    <select name="maximum">
                      <option value="500">$500</option>
                      <option value="1000">$1000</option>
                      <option value="1500">$1500</option>
                      <option value="10000">$10000</option>
                      <option value="50000">$50000</option>
                      <option value="10000">$10000</option>
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
              <Link href="/product" className={styles.search_result_image_container}>
                <Image
                  src={Img2}
                  alt="Lobby Image 2"
                  placeholder="blur"
                  quality={40}
                />
                <Image
                  src={Img3}
                  alt="Lobby Image 2"
                  placeholder="blur"
                  quality={40}
                />
                <div className={styles.image_overlay_info}>
                  <p>6 days ago</p>
                </div>
              </Link>
              <h3>$450,000</h3>
              
              <div className={`${styles.bottom_section} bottom_section`}>
                <p><span style={{fontWeight: "bold"}}>3</span> beds | <span style={{fontWeight: "bold"}}>2</span>ba | <span style={{fontWeight: "bold"}}>912</span> sqft - House for Sale</p>
                <p><FontAwesomeIcon icon={faLocationDot} /> 206 Watson Rd, North Syracuse, NY 13212</p>
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
            `
          }
      </style>
    </div>
  )
}
