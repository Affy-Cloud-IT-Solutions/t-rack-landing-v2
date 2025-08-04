"use client";
import { useRouter } from 'next/navigation';
import {  useSearchParams } from 'next/navigation';
import apiClient, { VERIFY_OTP, RESEND_OTP, FORGOT_PASSWORD_OR_RESEND_OTP } from '@/config/api';
import { useEffect, useState } from 'react';

export default function OtpVerificationForm() {
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const [formData, setFormData] = useState({
    otp: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resending, setResending] = useState(false);

  const handleResendOTP = async () => {
    setResending(true);
    setError('');

    try {
      const response = await apiClient.post(`${FORGOT_PASSWORD_OR_RESEND_OTP}?email=${encodeURIComponent(email)}`);

      if (!response.data.error) {
        alert('OTP resent successfully');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message || 'Failed to resend OTP');
    } finally {
      setResending(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // or a loading skeleton



  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (formData.password !== formData.confirmPassword) {
  //       setError('Passwords do not match');
  //       return;
  //     }

  //     if (formData.password.length < 6) {
  //       setError('Password must be at least 6 characters long');
  //       return;
  //     }

  //     setLoading(true);
  //     setError('');

  //     try {
  //       const response = await apiClient.post(VERIFY_OTP, {
  //         email,
  //         otp: formData.otp,
  //         password: formData.password  
  //       });

  //       // Check if the response indicates success
  //       if (!response.data.error) {
  //         const { token, isVerified } = response.data.meta;

  //         localStorage.setItem("authToken", token);
  //         localStorage.setItem("userRole", "COMPANY");

  //         const tokenSet = localStorage.getItem("authToken");
  // const roleSet = localStorage.getItem("userRole");

  // if (tokenSet && roleSet) {
  //   router.push('/plans');
  // } else {
  //   setError('Failed to save authentication data');
  //   console.error('Storage failed:', { tokenSet, roleSet });
  // }

  //         // Check if user is verified
  //         if (isVerified) {
  //           // Remove setTimeout and directly navigate
  //           // router.push('/plans');
  //         } else {
  //           setError('Account verification failed');
  //         }
  //       } else {
  //         setError(response.data.message || 'Verification failed');
  //       }
  //     } catch (error) {
  //       // Handle specific error cases
  //       if (error.response?.data?.message) {
  //         setError(error.response.data.message);
  //       } else if (error.message) {
  //         setError(error.message);
  //       } else {
  //         setError('OTP verification failed. Please try again.');
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  // ...existing code...

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await apiClient.post(VERIFY_OTP, {
        email,
        otp: formData.otp,
        password: formData.password
      });

      if (!response.data.error) {
        const { accessToken,refreshToken } = response.data.meta;

        // Store token first
        window.localStorage.setItem('authToken', accessToken);
        window.localStorage.setItem('refreshToken', refreshToken);

        // Wait briefly to ensure token is stored
        await new Promise(resolve => setTimeout(resolve, 100));

        // Then store role
        window.localStorage.setItem('userRole', 'COMPANY');

        // Verify storage
        const storedToken = window.localStorage.getItem('authToken');
        const storedRole = window.localStorage.getItem('userRole');

        if (storedToken && storedRole) {
          // Use Next.js router for navigation instead of page reload
          setTimeout(() => {
            router.push('/plans');
          }, 200);
        } else {
          setError('Failed to store authentication data');
        }
      } else {
        setError(response.data.message || 'Verification failed');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  // ...existing code...

  if (!email) {
    router.push('/email-verification');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-lg">
        <div>
          <h2 className="text-3xl font-bold text-center">Verify OTP AMaan</h2>
          <p className="mt-2 text-center text-gray-600">
            Enter the OTP sent to {email}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                OTP Code
              </label>
              <div className="mt-1 flex items-center gap-2">
                <input
                  id="otp"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                />
                <button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={resending}
                  className="whitespace-nowrap px-4 py-2 text-sm font-medium text-cyan-600 hover:text-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resending ? 'Resending...' : 'Resend OTP'}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Create password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Verifying...' : 'Verify & Continue'}
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <button
            onClick={() => router.push('/email-verification')}
            className="font-medium text-cyan-600 hover:text-cyan-500"
          >
            Try with different email
          </button>
        </div>
      </div>
    </div>
  );
}