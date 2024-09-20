import Link from "next/link";
import styles from "./styles/page.module.css";
import Image from "next/image";
import Img1 from "./images/bath.jpg";
import Img2 from "./images/hotel.jpg";
import Img3 from "./images/2.jpg";
import Img4 from "./images/8.jpg";
import Img5 from "./images/1.jpg";
import Img6 from "./images/10.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const preferences = [
    {
      img: Img3,
      desc: "Buying"
    }, {
      img: Img4,
      desc: "Selling"
    }, {
      img: Img5,
      desc: "Renting"
    }, {
      img: Img6 ,
      desc: "Leasing"
    }
  ];

  const featuredStyles2 = [
    {
      img1: "",
      img2: "",
      desc: "Apartments"
    },
    {
      img1: "",
      img2: "",
      desc: "Houses"
    },
    {
      img1: "",
      img2: "",
      desc: "Condos"
    },
    {
      img1: "",
      img2: "",
      desc: "Vacation Homes"
    },
  ];

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

  const cities = [
    {
      img: "",
      city: "New York"
    },
    {
      img: "",
      city: "Texas"
    },
    {
      img: "",
      city: "London"
    },
    {
      img: "",
      city: "Sydney"
    },
  ]

  return (
    <>
      <div className={styles.services_list}>
        <div className={`${styles.services_list_left} services_list_left`}>
            <Link href="#">Buy</Link>
            <Link href="#">Rent</Link>
            <Link href="#">Sell</Link>
            <Link href="#">Home Loans</Link>
        </div>
        <div className={`${styles.services_list_right} services_list_right`}>
            <Link href="#">Advertise</Link>
            <Link href="#">Manage Rentals</Link>
        </div>
      </div>

      <div className={styles.welcome_container}>
          <Image
              src={Img1}
              alt="Welcome Image 1"
              placeholder="blur"
              quality={100}
          />
          <Image
              src={Img2}
              alt="Welcome Image 2"
              placeholder="blur"
              quality={100}
          />
          <div className={styles.overlay}>
              <div className={styles.welcome_description}>
                  <h1>LIGHTEN UP</h1> 
                  <p>Bigger, bolder and better than ever! The biggest trend in homes and home design is proof that sometimes more is more.</p>
                  <button>BROWSE NOW</button>
              </div>
          </div>
      </div>

      <div className={`${styles.short_desc} short_desc`}>
        <h2>Start Your Home Journey</h2>
        <p>Discover curated Homes to find your perfect fit</p>
      </div>

      <div className={styles.featured_styles}>
        {
          preferences.map((preference, index)=>
            <Link key={index} href="/search" className={styles.featured_style}>
              <Image
                  src={preference.img}
                  alt={`Featured Image ${index}`}
                  placeholder="blur"
                  quality={40}
              />
              <div className={styles.overlay}>
                <h1>{preference.desc}</h1>
              </div>
          </Link>
          )
        }
      </div>

      <div className={`${styles.short_desc} short_desc`}>
        <h2>What are you interested in?</h2>
        <p>From subtle elegance to bold statements.</p>
      </div>

      <div className={`${styles.featured_styles} ${styles.featured_styles_second}`}>
        {
          featuredStyles2.map((featuredStyle, index)=>
            <Link key={index} href="search.html" className={`${styles.featured_style} ${styles.big_feature}`}>
              <Image
                src={Img1}
                alt="Lobby Image 1"
                placeholder="blur"
                quality={40}
              />
              <Image
                src={Img2}
                alt="Lobby Image 2"
                placeholder="blur"
                quality={40}
              />

              <div className={styles.overlay}>
                <h1>{featuredStyle.desc}</h1>
                <button>Browse</button>
              </div>
            </Link>
          )
        }
      </div>

      <div className={`${styles.short_desc} short_desc`}>
        <h2>Select your preferred location</h2>
        <p>We offer beautiful homes at excellent locations</p>
      </div>

      <div className={styles.featured_styles}>
        {
          cities.map((city, index)=>
            <Link key={index} href="/search" className={styles.featured_style2}>
              <div className={styles.img_container}>
                <Image
                  src={Img2}
                  alt="Lobby Image 2"
                  placeholder="blur"
                  quality={40}
                />
              </div>
              <h2>{city.city}</h2>
            </Link>
          )
        }
      </div>

      <div className={`${styles.short_desc} short_desc`}>
        <h2>Featured Houses for Sale and Rent</h2>
        <p>Check out some of our featured homes available for purchase or rent</p>
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
    </>
  );
}
