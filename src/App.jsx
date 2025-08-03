import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import JobListing from "./Pages/JobListing";
import JobDetails from "./Pages/JobDetails";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
