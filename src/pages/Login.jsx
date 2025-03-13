import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordMinLength = 8;

    const validateEmail = () => {
        if (!email.trim()) {
            setEmailError('Email is required');
            return false;
        } else if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };

    const validatePassword = () => {
        if (!password.trim()) {
            setPasswordError('Password is required');
            return false;
        } else if (password.length < passwordMinLength) {
            setPasswordError(`Password must be at least ${passwordMinLength} characters`);
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid) {
            setIsSubmitting(true);
            setTimeout(() => {
                alert('Login successful! Welcome to ShopEase.');
                setEmail('');
                setPassword('');
                setIsSubmitting(false);
            }, 1500);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center mt-20 p-4">
            <div className="w-full max-w-md">
                

                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="text-center mb-8">
                    
                    <h1 className="mt-4 text-2xl font-bold text-gray-900">E-Shop</h1>
                    <p className="text-gray-600 text-sm">Sign in to your account</p>
                </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-envelope text-gray-400"></i>
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    className={`pl-10 block w-full rounded-md border py-3 px-4 shadow-sm focus:outline-none focus:ring-2 ${emailError ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-indigo-500'}`}
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={validateEmail}
                                />
                            </div>
                            {emailError && <p className="mt-1 text-sm text-red-600">{emailError}</p>}
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-gray-400"></i>
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className={`pl-10 block w-full rounded-md border py-3 px-4 shadow-sm focus:outline-none focus:ring-2 ${passwordError ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-indigo-500'}`}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={validatePassword}
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                            {passwordError && <p className="mt-1 text-sm text-red-600">{passwordError}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Signing in...' : 'Sign in'}
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Don't have an account? <Link to="/register" className="text-indigo-600 hover:text-indigo-500 font-medium">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
