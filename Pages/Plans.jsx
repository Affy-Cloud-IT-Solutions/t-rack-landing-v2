"use client";
import React, { useEffect, useState } from "react";
import { decodeToken } from "../app/utils/decodeToken"; // Make sure the path is correct
import RazorpaySubscription from "./RazorpaySubscription";

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [subscriptionId, setSubscriptionId] = useState(null); console.log(subscriptionId,'amaan')

  // ✅ Handle token from query params and save to localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      console.log("✅ Token saved:", token);
    }
  }, []);

  // ✅ Fetch available plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("http://192.168.29.44:8080/api/packages");
        const data = await res.json();

        const plansArray = data?.meta?.packages;
        if (!Array.isArray(plansArray)) {
          throw new Error("Invalid data format received for plans");
        }

        setPlans(plansArray);
      } catch (error) {
        console.error("❌ Failed to load plans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  // ✅ Assign plan and update subscriptionId state
  const handleBuy = async (plan) => {
    try {
      setSelectedPlan(plan);
      const token = localStorage.getItem("authToken");

      if (!token) {
        alert("Token not found. Please log in again.");
        return;
      }

      const decoded = decodeToken(token);
      const userId = decoded?.id || decoded?.userId;

      if (!userId) {
        alert("User ID not found in token.");
        return;
      }

      const queryParams = new URLSearchParams({
        packageId: plan.id,
        // Optionally add userId if backend expects it:
        // userId: userId,
      }).toString();

      const res = await fetch(
        `http://192.168.29.44:8080/api/packages/assign?${queryParams}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      console.log("Assign API response:", data);

      if (!res.ok) throw new Error(data.message || "Failed to assign package");

      const newToken = data.meta?.token;
      const subscriptionIdFromAPI = data?.id;

      if (newToken) {
        localStorage.setItem("authToken", newToken);
      }

      if (subscriptionIdFromAPI) {
        setSubscriptionId(subscriptionIdFromAPI); // ✅ Set the Razorpay subscription ID
      } else {
        throw new Error("No subscription ID received.");
      }
    } catch (error) {
      console.error("❌ Purchase failed:", error);
      alert(error.message || "Something went wrong.");
    }
  };

  if (loading) {
    return <div className="text-center py-10 text-lg">Loading Plans...</div>;
  }

  if (!plans.length) {
    return (
      <div className="text-center py-10 text-lg text-gray-600">
        No plans available at the moment.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 mt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {plan.packageName}
                </h3>
                <p className="text-gray-600 mb-2">{plan.description}</p>
                <p className="text-gray-700 text-sm mb-1">
                  Billing: Every {plan.razorpayInterval} {plan.razorpayPeriod}
                </p>

                {plan.discount > 0 && (
                  <p className="text-sm text-green-600 mb-1">
                    Discount: {plan.discount}
                    {plan.discountType === "PERCENT" ? "%" : " ₹"}
                  </p>
                )}

                <p className="text-gray-500 text-sm mb-1">
                  Additional Fee: ₹{plan.additionalAmount}
                </p>

                <p className="text-2xl font-bold text-cyan-600 mb-4">
                  ₹{plan.finalAmount}
                </p>
              </div>

              <button
                onClick={() => handleBuy(plan)}
                className="mt-auto bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700"
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Pass subscriptionId to RazorpaySubscription component */}
      {subscriptionId && (
        <div className="mt-10">
          <RazorpaySubscription subscriptionId={subscriptionId} />
        </div>
      )}
    </div>
  );
}
