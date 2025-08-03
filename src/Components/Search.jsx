import { useState } from "react";
import styles from "./Search.module.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    const value = e.target.value || "";
    setQuery(value);
    onSearch(value.trim().toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim().toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Search jobs..."
        value={query}
        onChange={handleChange}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default Search;
