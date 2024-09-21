import styles from "./styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../icon.png";
import LogoImage2 from "../images/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMoon, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import SmallScreenButtons from "./SmallScreenButtons";
import SmallScreenOptions from "./SmallScreenOptions";
import ThemeSwitch from "./ThemeSwitch";


export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/" className={`${styles.logo} logo`}>
          <Image
            src={LogoImage}
            alt="Logo Image"
            placeholder="blur"
            quality={40}
          />
          <Image
            src={LogoImage2}
            alt="Logo Image"
            placeholder="blur"
            quality={40}
          />
          <h4>Gold Fern</h4>
        </Link>

        <form method="get" action="search.html" className={`${styles.search_box} search_box`}>
          <input type="text" placeholder="Type your preferred location"/>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </form>
        
        <div className={styles.third_section}>
            <ThemeSwitch/>
            <Link href="#" className={`${styles.options} options`}>
              <FontAwesomeIcon icon={faCircleUser} />
              <p>Sign In</p>
            </Link>
        </div>

        <SmallScreenButtons/>
      </nav>

      <SmallScreenOptions/>
    </>
  )
}
