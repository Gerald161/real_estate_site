import styles from "../styles/search.module.css";
import Places from "./Places";

export default function MapPage() {
  return (
    <div className={styles.filter_options_section}>
      <Places/>
    </div>
  )
}
