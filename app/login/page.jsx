'use client';


import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login successful!');
        console.log('Token:', data.token);
        window.location.href = '/';

      } else {
        const data = await response.json();
        setError(data.message || 'Invalid login credentials');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  const redirectToOAuth = (provider) => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/${provider}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-between mb-4">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <button
          onClick={() => redirectToOAuth('google')}
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
        >
          Continue with Google
        </button>
        <button
          onClick={() => redirectToOAuth('linkedin')}
          className="w-full p-3 bg-blue-700 text-white rounded-md hover:bg-blue-800"
        >
          Continue with LinkedIn
        </button>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
