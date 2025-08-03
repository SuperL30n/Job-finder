import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchJobById } from "../Services/api";
import styles from "./JobDetails.module.css";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJob = async () => {
      setLoading(true);
      setError(null);

      const data = await fetchJobById(id);

      if (!data) {
        setError("Job not found or failed to load.");
      } else {
        setJob(data);
      }

      setLoading(false);
    };

    loadJob();
  }, [id]);

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <Link to="/jobs">← Back to Listings</Link>
      <h2>{job.job_title}</h2>
      <p>
        <strong>Company:</strong> {job.employer_name}
      </p>
      <p>
        <strong>Location:</strong> {job.job_city}, {job.job_country}
      </p>
      <p>
        <strong>Type:</strong> {job.job_type || "N/A"}
      </p>
      <p>
        <strong>Salary:</strong> {job.salary || "Not specified"}
      </p>
      <p>
        <strong>Description:</strong>
      </p>
      <p>{job.job_description}</p>

      <a href="#" target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </div>
  );
}

export default JobDetails;
