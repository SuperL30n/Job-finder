import styles from "./Filters.module.css";

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles.filters}>
      <select name="job_type" onChange={handleChange} value={filters.job_type}>
        <option value="">All Job Types</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Internship">Internship</option>
        <option value="Contract">Contract</option>
      </select>

      <select name="job_city" onChange={handleChange} value={filters.job_city}>
        <option value="">All Locations</option>
        <option value="Lagos">Lagos</option>
        <option value="Calabar">Calabar</option>
        <option value="Benin City">Benin City</option>
        <option value="Port Harcourt">Port Harcourt</option>
        <option value="Ibadan">Ibadan</option>
        <option value="Abuja">Abuja</option>
      </select>

      <select
        name="job_setup"
        onChange={handleChange}
        value={filters.job_setup}
      >
        <option value="">All Work Setups</option>
        <option value="Remote">Remote</option>
        <option value="On-site">On-site</option>
        <option value="Hybrid">Hybrid</option>
      </select>
    </div>
  );
};

export default Filters;
