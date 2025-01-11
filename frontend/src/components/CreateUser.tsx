import axios from 'axios';
import User from 'models/User';
import React, { useEffect, useState } from 'react';

export default function CreateUser() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<User[]>([]);

    // Fetch existing users on component mount
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:4000/users");
                setUsers(response.data);
                console.log("Fetched users:", response.data); // Debugging
            } catch (error: any) {
                setError(error.message || "Failed to fetch users.");
            }
        };
        fetchUsers();
    }, []);

    // Handle name input change
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    // Handle email input change
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name || !email) {
            setError("Name and email are required.");
            return;
        }

        if (users.length === 0) {
            setError("User list is not loaded yet. Please try again.");
            return;
        }

        const userExists = users.some((user) => user.email.toLowerCase() === email.toLowerCase());
        console.log("User exists:", userExists); // Debugging

        if (userExists) {
            setError("User already exists.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("http://localhost:4000/users", { name, email });
            if (response.status === 201) {
                const newUser = response.data; // Assume response contains { id, name, email }
                setSuccess(`User ${name} with email ${email} has been created successfully.`);
                setUsers((prevUsers) => [...prevUsers, newUser]); // Add the new user to the state
            }
        } catch (error: any) {
            setError(error.message || "An unknown error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                disabled={loading}
            />
            <label>Email</label>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                disabled={loading}
            />
            <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
            </button>
            {error && (
                <p style={{ color: "red" }} role="alert">
                    {error}
                </p>
            )}
            {success && <p>{success}</p>}
        </form>
    );
}
