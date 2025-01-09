import User from 'models/User';
import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function FetchUser() {

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const fetchUser = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get("http://localhost:4000/users");
            setUsers(response.data);
            console.log(users);
        } catch (error) {
            setError(String(error));
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (loading) {
        return <h1 className="text-center text-xl font-bold text-blue-500">LOADING...</h1>;
    }

    if (error) {
        return <h1 className="text-center text-xl font-bold text-red-500">ERROR: {error}</h1>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-blue-700 text-center mb-4">Users</h1>
            <form className="space-y-2">
                {users.map(user => (
                    <div
                        key={user.email}
                        className="border rounded-lg p-4 shadow-md bg-gray-100 hover:bg-gray-200 transition"
                    >
                        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
                        <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                ))}
            </form>
        </div>
    );
}
