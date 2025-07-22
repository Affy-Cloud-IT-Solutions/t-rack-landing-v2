"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import apiClient, { SEND_OTP } from '@/config/api';


export default function EmailVerification() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
        await apiClient.post(`${SEND_OTP}?email=${encodeURIComponent(email)}`);
      router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-lg">
        <div>
          <h2 className="text-3xl font-bold text-center">Get Started</h2>
          <p className="mt-2 text-center text-gray-600">
            Enter your email to receive OTP
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSendOTP} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <button
            onClick={() => router.push('/login')}
            className="font-medium text-cyan-600 hover:text-cyan-500"
          >
            Already have an account? Sign in
          </button>
        </div>
      </div>
    </div>
  );
}