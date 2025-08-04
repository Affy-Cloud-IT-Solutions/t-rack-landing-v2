"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RazorpaySubscription from "./RazorpaySubscription";
import { decodeToken } from "../app/utils/decodeToken";
import apiClient, { GET_ALL_PACKAGES } from "@/config/api";
import { Check } from "lucide-react";
import axios from "axios";

export default function Plans() {
  const router = useRouter();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subscriptionId, setSubscriptionId] = useState(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get(GET_ALL_PACKAGES);
        const plansArray = res.data?.meta?.packages;
        if (!Array.isArray(plansArray)) {
          throw new Error("Invalid data format");
        }
        if (!res.data.error) {
          setPlans(plansArray);
        }
      } catch (error) {
        console.error("❌ Failed to load plans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleBuy = (plan) => {
    if (!isAuthenticated) {
      router.push("/email-verification");
    } else {
      assignPlan(plan);
    }
  };

  const assignPlan = async (plan) => {
    try {
      const response = await apiClient.post(
        `/packages/assign?packageId=${plan.id}`
      );

      const subId = response.data.subscriptionId;

      if (subId) {
        setSubscriptionId(subId);
      } else {
        throw new Error("No subscription ID returned");
      }
    } catch (error) {
      console.error("❌ Purchase failed:", error);
      alert(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong."
      );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">
            Loading Plans...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a plan and unlock premium features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ${
                hoveredPlan === plan.id ? "scale-105" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-10"></div>

              <div className="relative bg-white bg-opacity-90 backdrop-blur-sm p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.packageName}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                      ₹{plan.finalAmount}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">
                      /{plan.razorpayPeriod}
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <FeatureItem
                      text={`Billed every ${plan.razorpayInterval} ${plan.razorpayPeriod}`}
                    />
                    <FeatureItem text={`Users: ${plan.assignedUser}`} />
                    {plan.discount > 0 && (
                      <FeatureItem
                        text={`${
                          plan.discountType === "PERCENT"
                            ? `${plan.discount}% discount`
                            : `₹${plan.discount} discount`
                        }`}
                      />
                    )}
                    <FeatureItem
                      text={`Additional fee: ₹${plan.additionalAmount}`}
                    />
                  </div>
                </div>

                <button
                  onClick={() => handleBuy(plan)}
                  className="mt-auto w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {subscriptionId && (
        <div className="mt-16 max-w-2xl mx-auto">
          <RazorpaySubscription subscriptionId={subscriptionId} />
        </div>
      )}
    </div>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-center">
      <Check className="w-5 h-5 text-cyan-500 mr-2" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
