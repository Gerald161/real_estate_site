import styles from "./styles/footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faXTwitter, faInstagram, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    

    return (
        <>
            <footer>
                <div className={styles.footer_info}>
                    <h2>COMPANY INFO</h2>

                    <Link href="#">About Us</Link>
                    <Link href="#">Investor Relations</Link>
                    <Link href="#">Career Opportunities</Link>
                    <Link href="#">Terms of Use</Link>
                </div>

                <div className={styles.footer_info}>
                    <h2>POLICIES</h2>
                    <Link href="#">Terms & Condition</Link>
                    <Link href="#">Accessibility Statement</Link>
                    <Link href="#">Privacy Policy</Link>
                </div>

                <div className={styles.footer_info}>
                    <h2>CUSTOMER CARE</h2>

                    <Link href="#">Contact Us</Link>
                    <Link href="#">0100000000</Link>
                    <Link href="#">goldfern@mail.com</Link>
                </div>

                <div className={styles.footer_info}>
                    <h2>Social Media</h2>

                    <Link href="#" target="_blank"><FontAwesomeIcon icon={faFacebook}/></Link>
                    <Link href="#" target="_blank"><FontAwesomeIcon icon={faInstagram}/></Link>
                    <Link href="#"><FontAwesomeIcon icon={faXTwitter}/></Link>
                    <Link href="#" target="_blank"><FontAwesomeIcon icon={faYoutube}/></Link>
                    <Link href="#"><FontAwesomeIcon icon={faWhatsapp}/></Link>
                </div>
            </footer>
            <p style={{textAlign: "center", padding: "20px 15px 15px 15px", marginBottom: "0", color: "rgb(61, 57, 53)"}}>Copyright GoldFern Limited 2024 All Rights Reserved</p>
        </>
    )
}
