import MapPage from './components/MapPage';
import SearchResultsPage from './components/SearchResultsPage';
import styles from "./styles/search.module.css";

export default function SearchPage() {
  return (
    <div className={`${styles.main} main`}>
      <MapPage/>
      <SearchResultsPage/>
    </div>
  )
}
