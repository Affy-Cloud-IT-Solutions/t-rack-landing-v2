"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterUserModal from "../Pages/RegisterUserModal";

export default function AuthFlowModal({ isOpen, onClose }) {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [userData, setUserData] = useState({ name: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const resetState = () => {
    setStep(1);
    setEmail("");
    setOtp("");
    setUserData({ name: "", password: "" });
    setError("");
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const sendOtp = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://192.168.29.44:8080/api/company/otp/send?email=${email}`,
        { method: "POST" }
      );

      const data = await res.json();
      if (!res.ok) {
        if (data.message?.includes("already exists")) {
          setShowLoginModal(true);
          return;
        }
        throw new Error(data.message || "Failed to send OTP");
      }

      setStep(2);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "http://192.168.29.44:8080/api/company/register/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
            password: userData.password,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid OTP");

      if (data.meta?.token) {
        localStorage.setItem("authToken", data.meta.token);
      }
      if (data.meta?.user?.id) {
        localStorage.setItem("userId", data.meta.user.id);
      }

      setShowRegisterModal(true);
      setStep(3);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://192.168.29.44:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password: userData.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
console.log(data)
      if (data.meta?.token) {
        localStorage.setItem("authToken", data.meta.token);
      }
      if (data.meta?.user?.id) {
        localStorage.setItem("userId", data.meta.user.id);
      }

      setShowLoginModal(false);
      setShowRegisterModal(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Main Auth Modal */}
      <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-sm rounded-xl p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-2 right-3 text-gray-600 hover:text-black"
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold mb-4">
            {step === 1 && "Enter Your Email"}
            {step === 2 && "Enter OTP"}
          </h2>

          {error && <p className="text-red-600 mb-2">{error}</p>}

          {step === 1 && (
            <>
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-4 py-2 rounded mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={sendOtp}
                className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <input
                type="email"
                value={email}
                readOnly
                className="w-full border px-4 py-2 rounded mb-4 bg-gray-100 text-gray-500"
              />
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full border px-4 py-2 rounded mb-4"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <input
                type="password"
                placeholder="Create Password"
                className="w-full border px-4 py-2 rounded mb-4"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
              <button
                onClick={verifyOtp}
                className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-sm rounded-xl p-6 relative">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            {error && <p className="text-red-600 mb-2">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-2 rounded mb-4"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <button
              onClick={handleLogin}
              className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </div>
      )}

      {/* Register User Modal */}
      {showRegisterModal && (
        <RegisterUserModal
          email={email}
          password={userData.password}
          onClose={handleClose}
        />
      )}
    </>
  );
}
