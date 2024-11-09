import styles from "./styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../icon.png";
import LogoImage2 from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import SmallScreenButtons from "./SmallScreenButtons";
import SmallScreenOptions from "./SmallScreenOptions";
import ThemeSwitch from "./ThemeSwitch";
import NavBarSearchForm from "./NavBarSearchForm";


export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/" className={`${styles.logo} logo`}>
          <Image
            src={LogoImage2}
            alt="Logo Image"
            placeholder="blur"
            quality={40}
          />
          <Image
            src={LogoImage}
            alt="Logo Image"
            placeholder="blur"
            quality={40}
          />
          <h5>Gold Fern</h5>
        </Link>

        <NavBarSearchForm/>
        
        <div className={styles.third_section}>
          <Link href="#" className={`${styles.options} options`}>
            <FontAwesomeIcon icon={faHeart}/>
            {/* <p>Wish List</p> */}
          </Link>

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
