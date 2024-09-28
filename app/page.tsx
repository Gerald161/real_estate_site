import Link from "next/link";
import styles from "./styles/page.module.css";
import Image from "next/image";
import Img1 from "./images/bath.jpg";
import Img2 from "./images/hotel.jpg";
import Img3 from "./images/2.jpg";
import Img4 from "./images/8.jpg";
import Img5 from "./images/1.jpg";
import Img6 from "./images/10.jpg";
import Img7 from "./images/lobby1.jpg";
import Img8 from "./images/lobby2.jpg";
import Img9 from "./images/lobby3.jpg";
import Img10 from "./images/sauna.jpg";
import Img11 from "./images/kitchen.jpg";
import Img12 from "./images/outdoor.jpg";
import Img13 from "./images/3.jpg";
import Img14 from "./images/4.jpg";
import Img15 from "./images/5.jpg";
import Img16 from "./images/bath3.jpg";
import Img17 from "./images/6.jpg";
import Img18 from "./images/7.jpg";
import Img19 from "./images/welcome.jpg";
import Img20 from "./images/12.jpg";
import Img21 from "./images/9.jpg";
import Img22 from "./images/13.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const featuredHomes = [
  {
    img1: Img5,
    img2: Img10,
    time_posted: "6",
    price: "450,000",
    bed: "3",
    bath: "2",
    sqft: "912",
    address: "206 Watson Rd, North Syracuse, NY 13212"
  },
  {
    img1: Img2,
    img2: Img11,
    time_posted: "7",
    price: "370,000",
    bed: "4",
    bath: "2",
    sqft: "960",
    address: "302 Mackay Ave, Syracuse, NY 13219"
  },
  {
    img1: Img3,
    img2: Img9,
    time_posted: "5",
    price: "750,000",
    bed: "6",
    bath: "3",
    sqft: "1050",
    address: "410 Park Avenue, Yonkers, NY 10703"
  },
  {
    img1: Img13,
    img2: Img1,
    time_posted: "3",
    price: "260,000",
    bed: "3",
    bath: "1",
    sqft: "850",
    address: "37 Longledge Drive, Rye Brook, NY 10573"
  },
  {
    img1: Img14,
    img2: Img7,
    time_posted: "20",
    price: "1,500000",
    bed: "8",
    bath: "4",
    sqft: "1250",
    address: "135 Daley Blvd, Rochester, NY 14617"
  },
  {
    img1: Img15,
    img2: Img16,
    time_posted: "2",
    price: "630,000",
    bed: "5",
    bath: "2",
    sqft: "970",
    address: "38 The Glen, Katonah, NY 10576"
  },
  {
    img1: Img17,
    img2: Img12,
    time_posted: "4",
    price: "400,000",
    bed: "3",
    bath: "1",
    sqft: "800",
    address: "135 Daley Blvd, Rochester, NY 14617"
  },
  {
    img1: Img18,
    img2: Img19,
    time_posted: "12",
    price: "510,000",
    bed: "4",
    bath: "2",
    sqft: "1010",
    address: "87 Cabot Road, Massapequa, NY 11758"
  },
  {
    img1: Img4,
    img2: Img20,
    time_posted: "10",
    price: "200,000",
    bed: "3",
    bath: "2",
    sqft: "850",
    address: "1480 Pine Avenue, Bohemia, NY 11716"
  },
  {
    img1: Img21,
    img2: Img22,
    time_posted: "8",
    price: "950,000",
    bed: "8",
    bath: "5",
    sqft: "1050",
    address: "2015 Bogart Avenue, Bronx, NY 10462"
  },
];

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
      img1: Img8,
      img2: Img7,
      desc: "Apartments"
    },
    {
      img1: Img1,
      img2: Img2,
      desc: "Houses"
    },
    {
      img1: Img10,
      img2: Img9,
      desc: "Condos"
    },
    {
      img1: Img3,
      img2: Img12,
      desc: "Vacation Homes"
    },
  ];

  const cities = [
    {
      img: Img3,
      city: "New York"
    },
    {
      img: Img13,
      city: "Texas"
    },
    {
      img: Img14,
      city: "London"
    },
    {
      img: Img5,
      city: "Sydney"
    },
  ]

  return (
    <>
      <div className={styles.services_list}>
        <div className={`${styles.services_list_left} services_list_left`}>
            <Link href="/a">Buy</Link>
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
            <Link key={index} href="/a" className={styles.featured_style}>
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
                src={featuredStyle.img1}
                alt="Lobby Image 1"
                placeholder="blur"
                quality={40}
              />
              <Image
                src={featuredStyle.img2}
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
                  src={city.img}
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
                <p><span style={{fontWeight: "bold"}}>{home.bed}</span> beds | <span style={{fontWeight: "bold"}}>{home.bath}</span> ba | <span style={{fontWeight: "bold"}}>{home.sqft}</span> sqft - House for Sale</p>
                <p><FontAwesomeIcon icon={faLocationDot} />{home.address}</p>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}
