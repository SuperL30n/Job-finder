import jobsData from "../data/jobs.json";

export const fetchJobs = async (query) => {
  try {
    if (!query) return jobsData;

    const filteredJobs = jobsData.filter((job) =>
      job.job_title.toLowerCase().includes(query.toLowerCase())
    );

    return filteredJobs;
  } catch (error) {
    console.error("Failed to fetch local jobs", error);
    return [];
  }
};

export const fetchJobById = async (id) => {
  try {
    return jobsData.find((job) => job.job_id == id);
  } catch (error) {
    console.error("Failed to fetch job by ID", error);
    return null;
  }
};
