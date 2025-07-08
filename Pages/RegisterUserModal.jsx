// components/RegisterUserModal.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterUserModal({ email, password, onClose }) {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    companyName: "",
    phoneNumber: "",
    address: {
      country: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const registerUser = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("name", userData.name);
      formData.append("password", password);
      formData.append("companyName", userData.companyName);
      formData.append("phoneNumber", userData.phoneNumber);
      formData.append("address.country", userData.address.country);
      formData.append("address.city", userData.address.city);
      formData.append("address.state", userData.address.state);
      formData.append("address.zipCode", userData.address.zipCode);

      const res = await fetch("http://192.168.29.44:8080/api/company", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken") || ""}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      onClose();
      router.push("/plans");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-sm rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Create Your Account</h2>
        {error && <p className="text-red-600 mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-4 py-2 rounded mb-4"
          value={userData.name}
          onChange={(e) =>
            setUserData({ ...userData, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full border px-4 py-2 rounded mb-4"
          value={userData.companyName}
          onChange={(e) =>
            setUserData({ ...userData, companyName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border px-4 py-2 rounded mb-4"
          value={userData.phoneNumber}
          onChange={(e) =>
            setUserData({ ...userData, phoneNumber: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Country"
          className="w-full border px-4 py-2 rounded mb-4"
          value={userData.address.country}
          onChange={(e) =>
            setUserData({
              ...userData,
              address: { ...userData.address, country: e.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="City"
          className="w-full border px-4 py-2 rounded mb-4"
          value={userData.address.city}
          onChange={(e) =>
            setUserData({
              ...userData,
              address: { ...userData.address, city: e.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="State"
          className="w-full border px-4 py-2 rounded mb-4"
          value={userData.address.state}
          onChange={(e) =>
            setUserData({
              ...userData,
              address: { ...userData.address, state: e.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="Zip Code"
          className="w-full border px-4 py-2 rounded mb-4"
          value={userData.address.zipCode}
          onChange={(e) =>
            setUserData({
              ...userData,
              address: { ...userData.address, zipCode: e.target.value },
            })
          }
        />

        <button
          onClick={registerUser}
          className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
}
