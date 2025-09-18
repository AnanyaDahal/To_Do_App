import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 border border-zinc-700 p-8 rounded-md w-full max-w-sm text-white"
      >
        <h1 className="text-4xl font-bold text-center mb-8 font-logo">Ananya's To do app</h1>

        <input
          type="email"
          placeholder="Phone number, username, or email"
          className="mb-4 px-4 py-3 w-full bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-zinc-400 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 px-4 py-3 w-full bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-zinc-400 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded font-semibold mt-1"
        >
          Log In
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-zinc-600" />
          <span className="mx-4 text-zinc-400">OR</span>
          <hr className="flex-grow border-zinc-600" />
        </div>

    
      
        <div className="text-center text-white text-sm mt-6">
        Don't have an account?{' '}
        <a href="/register" className="text-blue-500 font-semibold hover:underline">
          Sign up
        </a>
      </div>
      </form>

      
    </div>
  );
};

export default Login;
