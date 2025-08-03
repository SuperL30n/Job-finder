import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import styles from "./JobListing.module.css";
import { fetchJobs } from "../Services/api";
import Search from "../Components/Search";
import Filters from "../Components/Filters";

function JobListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    job_type: "",
    job_city: "",
    job_setup: "",
  });
  const [visibleCount, setVisibleCount] = useState(5);

  const loadJobs = async (term) => {
    setLoading(true);
    setError(null);

    try {
      const results = await fetchJobs();

      const filtered = results.filter((job) => {
        const matchesQuery = term
          ? job.job_title.toLowerCase().includes(term.toLowerCase())
          : true;

        const matchesType = filters.job_type
          ? job.job_type === filters.job_type
          : true;

        const matchesCity = filters.job_city
          ? job.job_city === filters.job_city
          : true;

        const matchesSetup = filters.job_setup
          ? job.job_setup === filters.job_setup
          : true;

        return matchesQuery && matchesType && matchesCity && matchesSetup;
      });

      if (filtered.length === 0) {
        setError("No jobs found.");
      }

      setJobs(filtered);
    } catch {
      setError("Something went wrong while fetching jobs.");
    }

    setLoading(false);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  useEffect(() => {
    loadJobs(queryParam);
  }, [queryParam, filters]);

  const handleSearch = (query) => {
    if (query) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className={styles.container}>
      <h2>Job Listings</h2>

      <Search onSearch={handleSearch} />
      <Filters filters={filters} setFilters={setFilters} />

      {loading && <p>Loading jobs...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <ul className={styles.jobList}>
        {jobs.slice(0, visibleCount).map((job) => (
          <li key={job.job_id} className={styles.jobItem}>
            <h3>{job.job_title}</h3>
            <p>{job.employer_name}</p>
            <p>
              {job.job_city}, {job.job_country}
            </p>
            <Link to={`/jobs/${job.job_id}`}>View Details</Link>
          </li>
        ))}
      </ul>
      {visibleCount < jobs.length && (
        <button onClick={handleLoadMore} className={styles.loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default JobListing;
