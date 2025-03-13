import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
        if (password.length < 8) errors.password = 'Password must be at least 8 characters';
        if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
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
        <div className="bg-gray-50 min-h-screen flex items-center justify-center mt-30 p-4">
            <div className="w-full max-w-md">
                
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">

                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Create an Account</h1>
                    <p className="text-gray-600 text-sm">Join us today!</p>
                </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" className="w-full border rounded-md p-3" value={name} onChange={(e) => setName(e.target.value)} />
                            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="w-full border rounded-md p-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" className="w-full border rounded-md p-3" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" className="w-full border rounded-md p-3" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-md" disabled={isSubmitting}>
                            {isSubmitting ? 'Registering...' : 'Register'}
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Already have an account? <Link to="/login" className="text-indigo-600">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
