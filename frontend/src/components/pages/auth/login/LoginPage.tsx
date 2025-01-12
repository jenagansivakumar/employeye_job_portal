import  { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, LoginSchema } from "../../../../models/FormSchema";
import axios from "axios";
import { z } from "zod";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { useNavigate } from "react-router-dom";


type LoginData = z.infer<typeof LoginSchema>;

export const LoginPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");

  const userLogin = async (data: LoginData) => {
    setError("");
    setLoading(true);
    console.log(data)
  

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/login",
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      localStorage.setItem("authToken", response.data.authToken)
      navigate("/jobs/display")
      console.log(response)
      setSuccess("Successfully logged in!");
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError(error.message || "Cannot log in");
      }
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: LoginData) => {
    await userLogin(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-lg font-semibold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                {...register("username")}
                type="text"
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                {...register("password")}
                type="password"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              {loading ? "Logging in..." : "Login"}
            </Button>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            {success && <p className="mt-2 text-sm text-green-500">{success}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
