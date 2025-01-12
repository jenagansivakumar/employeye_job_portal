import axios from "axios";
import  { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

const JobSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),
  jobDescription: z.string().min(1, "Job description is required"),
});

type JobData = z.infer<typeof JobSchema>;

export const CreateJob = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<JobData>({
    resolver: zodResolver(JobSchema),
  });

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");

  const createJob = async (data: JobData) => {
    setError("");
    setLoading(true);
    try {
      await axios.post("http://localhost:4000/jobs/create", data, {
        headers: { "Content-Type": "application/json" },
      });
      setSuccess("Successfully added job!");
    } catch (err: any) {
      setError(err.response?.data?.message || "Cannot create job");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: JobData) => {
    await createJob(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Create Job</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                {...register("jobTitle")}
                placeholder="Enter job title"
              />
              {errors.jobTitle && (
                <p className="text-sm text-red-500">{errors.jobTitle.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="jobDescription">Job Description</Label>
              <Input
                id="jobDescription"
                {...register("jobDescription")}
                placeholder="Enter job description"
              />
              {errors.jobDescription && (
                <p className="text-sm text-red-500">{errors.jobDescription.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              {loading ? "Submitting..." : "Submit"}
            </Button>
            {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
            {success && <p className="mt-4 text-sm text-green-500">{success}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
