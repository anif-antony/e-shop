// src/components/Register.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/userSlice';
import { Link } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        let errors = {};
        if (!name.trim()) errors.name = 'Name is required';
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = 'Invalid email address';
        if (users.some(user => user.email === email)) errors.email = 'Email is already registered';
        if (password.length < 8) errors.password = 'Password must be at least 8 characters';
        if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            dispatch(registerUser({ name, email, password }));
            setTimeout(() => {
                alert('Registration successful!');
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setIsSubmitting(false);
            }, 1500);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900 text-center">Create an Account</h1>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <input type="text" className="w-full border p-2 rounded" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

                    <input type="email" className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

                    <input type="password" className="w-full border p-2 rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

                    <input type="password" className="w-full border p-2 rounded" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}

                    <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded" disabled={isSubmitting}>
                        {isSubmitting ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <p className="mt-4 text-sm text-center">Already have an account? <Link to="/login" className="text-indigo-600">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;