import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    if (!isOpen) return null;

    const validateEmail = () => {
        if (!email.trim()) {
            setEmailError('Email is required');
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Invalid email address');
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
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                dispatch(loginUser({ email, password }));
                alert('Login successful!');
                onClose();
                navigate('/');
            } else {
                setEmailError('Invalid credentials');
                setPasswordError('Invalid credentials');
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray bg-opacity-50 z-40">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                <button className="absolute top-2 right-3 text-gray-600 text-xl" onClick={onClose}>×</button>
                <h1 className="text-2xl font-bold text-gray-900 text-center">E-Shop Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4" noValidate>
                    <input type="email" className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} />
                    {emailError && <p className="text-red-600 text-sm">{emailError}</p>}

                    <div className="relative">
                        <input type={showPassword ? 'text' : 'password'} className="w-full border p-2 rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2 text-gray-600">{showPassword ? '🙈' : '👁️'}</button>
                    </div>
                    {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}

                    <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded" disabled={isSubmitting}>
                        {isSubmitting ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>
                <p className="mt-4 text-sm text-center">Don't have an account? <Link to="/register" className="text-indigo-600">Register</Link></p>
            </div>
        </div>
    );
};

export default LoginModal;
