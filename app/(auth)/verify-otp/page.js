"use client";
import OtpVerificationForm from '@/Pages/auth/OtpVerificationForm'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div><OtpVerificationForm/></div>
  )
}

export default page