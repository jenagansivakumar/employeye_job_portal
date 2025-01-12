import  { useEffect, useState } from "react";
import { Job } from "../../../models/JobSchema";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";

export const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJobs = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/jobs/fetch");
      setJobs(response.data);
    } catch (error: any) {
      setError(error.message || "Cannot fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">All Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          {loading && (
            <div className="flex justify-center my-4">
              <h2>Loading </h2>
            </div>
          )}
          {error && <p className="text-sm text-red-500">{error}</p>}
          {!loading && jobs.length === 0 && <p>No jobs available</p>}
          {!loading && jobs.length > 0 && (
            <ul className="space-y-2">
              {jobs.map((job) => (
                <li key={job.id} className="p-4 border rounded-lg">
                  <strong>{job.jobTitle}</strong>: {job.jobDescription}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
      <Button onClick={fetchJobs} className="mt-4">
        Refresh
      </Button>
    </div>
  );
};
