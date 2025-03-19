

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/userSlice';
import { Eye, EyeOff } from 'react-feather';
import Modal from '../components/Model';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email address';
    if (users.some((user) => user.email === email)) newErrors.email = 'Email is already registered';
    if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      dispatch(registerUser({ name, email, password }));
      setTimeout(() => {
        toast.success('Registration successful!');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setIsSubmitting(false);
        onClose();
        onSwitchToLogin();
      
      }, 1500);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="text-2xl font-bold text-gray-900 text-center">Create an Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

        <input
          type="email"
          className="w-full border p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full border p-2 rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

        <input
          type="password"
          className="w-full border p-2 rounded"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}

        <button
          type="submit"
          className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>

      <p className="mt-4 text-sm text-center">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} className="text-red-600 hover:text-red-800">
          Login
        </button>
      </p>
    </Modal>
  );
};

export default RegisterModal;



