import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../../../models/FormSchema';
import axios from 'axios';
import { z } from 'zod';
import { Button } from '../../ui/button';

type FormData = z.infer<typeof formSchema>;

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>('');

  const userLogin = async (data: FormData) => {
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:4000/auth/login',
        data,
        { headers: { 'Content-Type': 'application/json' } }
      );
      setSuccess('Successfully logged in!');
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError(error.message || 'Cannot log in');
      }
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) =>{
        await userLogin(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input {...register('username')} />
      {errors.username && <p>{errors.username.message}</p>}

      <label>Password</label>
      <input {...register("password")}/>
      {errors.password && <p>{errors.password.message}</p>}

      <Button> Login </Button>
    </form>
  );
};
