"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { handleRedirect } from "@/config/api";

const RazorpaySubscription = ({ subscriptionId }) => {
  const router = useRouter();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const startPayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const options = {
      key: "rzp_test_LmSWny1H2dtdJz",
      subscription_id: subscriptionId,
      name: "Affy Cloud IT Solutions",
      description: "Monthly Plan Subscription",
      handler: function (response) {
        handleRedirect()
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      console.error("❌ Payment failed:", response.error);
      alert("Payment failed: " + response.error.description);
    });

    rzp.open();
  };

  useEffect(() => {
    if (subscriptionId) {
      startPayment();
    }
  }, [subscriptionId]);

  return null;
};

export default RazorpaySubscription;
