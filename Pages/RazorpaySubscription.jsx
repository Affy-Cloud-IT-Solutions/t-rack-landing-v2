"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

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
      key: "rzp_test_LmSWny1H2dtdJz", // ✅ test key
      subscription_id: subscriptionId,
      name: "AmaanCorps",
      description: "Monthly Plan Subscription",
      handler: function (response) {
        console.log("✅ Payment success:", response);
        const token = localStorage.getItem('authToken');
        const role = localStorage.getItem('userRole');
        alert("Payment successful. Redirecting...");
        // router.push("/dashboard");
        const redirectUrl = `http://localhost:5173/company?token=${encodeURIComponent(token)}&role=${encodeURIComponent(role)}`;
        // const redirectUrl = `https://app.t-racktool.com/company?token=${encodeURIComponent(token)}&role=${encodeURIComponent(role)}`;
        
        // Redirect to the protected page
        window.location.href = redirectUrl;
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
