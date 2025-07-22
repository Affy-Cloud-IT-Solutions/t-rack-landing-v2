// import React from 'react';

// const RazorpaySubscription = ({ subscriptionId }) => {
//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async () => {
//     const isScriptLoaded = await loadRazorpayScript();

//     if (!isScriptLoaded) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }


// // azorpay.key.id=rzp_test_LmSWny1H2dtdJzrazorpay.key.secret=COrz5ybn4V6BLUZkFP5UKiPm

//     const options = {
//       key: 'rzp_test_LmSWny1H2dtdJz', // Replace with your Razorpay Key ID
//       subscription_id: subscriptionId,
//       name: 'Your Company Name',
//       description: 'Monthly Subscription',
//       image: 'https://yourlogo.url/logo.png',
//       handler: function (response) {
//         console.log('Payment success:', response);
//         // TODO: Send to backend to verify:
//         // response.razorpay_payment_id
//         // response.razorpay_subscription_id
//         // response.razorpay_signature
//       },
//       prefill: {
//         name: 'John Doe',
//         email: 'john@example.com',
//         contact: '9876543210'
//       },
//       theme: {
//         color: '#3399cc'
//       }
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <button className='bg-red-500 text-white' onClick={handlePayment}>Subscribe Now</button>
//   );
// };

// export default RazorpaySubscription;



// import React, { useState } from "react";
// import axios from "axios";

// const RazorpaySubscriptionButton = ({ packageId, userToken }) => {
//   const [loading, setLoading] = useState(false);

//   const loadRazorpayScript = () =>
//     new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });

//   const assignAndSubscribe = async () => {
//     setLoading(true);

//     const isScriptLoaded = await loadRazorpayScript();
//     if (!isScriptLoaded) {
//       alert("Razorpay SDK failed to load.");
//       return;
//     }

//     try {
//       // 🔴 Step 1: Call backend to assign package and get subscriptionId
//       const response = await axios.post(
//         `/api/assign?packageId=${packageId}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${userToken}`,
//           },
//         }
//       );

//       const subscriptionId = response.data;
//       console.log("📦 Received Subscription ID:", subscriptionId);

//       // 🔴 Step 2: Open Razorpay payment popup
//       const options = {
//         key: "rzp_test_LmSWny1H2dtdJz",
//         subscription_id: subscriptionId,
//         name: "My Company",
//         description: "Premium Plan",
//         handler: async function (razorResponse) {
//           console.log("✅ Payment Success:", razorResponse);

//           alert("Payment successful! Please wait while we verify...");

//           // OPTIONAL: Poll for confirmation if you want
//           // or rely on webhook
//         },
//         prefill: {
//           name: "Your Name",
//           email: "user@example.com",
//           contact: "9876543210",
//         },
//         theme: {
//           color: "#0f172a",
//         },
//       };

//       const rzp = new window.Razorpay(options);

//       // 🔴 Optional: Payment failure handler
//       rzp.on("payment.failed", function (response) {
//         console.error("❌ Payment Failed:", response.error);
//         alert("Payment failed. Please try again.");
//       });

//       rzp.open();
//     } catch (err) {
//       console.error("🚨 Subscription Error:", err);
//       alert("Subscription creation failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       className="bg-blue-600 text-white px-4 py-2 rounded"
//       disabled={loading}
//       onClick={assignAndSubscribe}
//     >
//       {loading ? "Processing..." : "Subscribe Now"}
//     </button>
//   );
// };

// export default RazorpaySubscriptionButton;






// import React, { useEffect } from "react";

// const RazorpaySubscription = ({ subscriptionId }) => {
//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const startPayment = async () => {
//     const isScriptLoaded = await loadRazorpayScript();
//     if (!isScriptLoaded) {
//       alert("Razorpay SDK failed to load");
//       return;
//     }

//     const options = {
//       key: "rzp_test_LmSWny1H2dtdJz",
//       subscription_id: subscriptionId,
//       name: "Your Company Name",
//       description: "Monthly Subscription",
//       image: "https://yourlogo.url/logo.png",
//       handler: function (response) {
//         console.log("✅ Payment success:", response);
//         alert("Payment Successful!");
//         // Optionally: call your backend verify or redirect
//       },
//       prefill: {
//         name: "John Doe",
//         email: "john@example.com",
//         contact: "9876543210",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp = new window.Razorpay(options);

//     rzp.on("payment.failed", function (response) {
//       console.error("❌ Payment failed:", response.error);
//       alert("Payment failed, please try again.");
//     });

//     rzp.open();
//   };

//   useEffect(() => {
//     if (subscriptionId) {
//       startPayment();
//     }
//   }, [subscriptionId]);

//   return null; // No button, auto-triggered on subscriptionId
// };

// export default RazorpaySubscription;





// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation"; // or 'next/router' for older Next.js

// const RazorpaySubscription = ({ subscriptionId }) => {
//   const router = useRouter();

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const startPayment = async () => {
//     const isScriptLoaded = await loadRazorpayScript();
//     if (!isScriptLoaded) {
//       alert("Razorpay SDK failed to load");
//       return;
//     }

//     const options = {
//       key: "rzp_test_LmSWny1H2dtdJz", // Replace with your actual Razorpay Key
//       subscription_id: subscriptionId,
//       name: "Your Company Name",
//       description: "Subscription Payment",
//       image: "https://yourlogo.url/logo.png",
//       handler: function (response) {
//         console.log("✅ Payment success:", response);

//         // You can verify on backend here using razorpay_payment_id etc. if needed

//         alert("Payment successful!");
//         // router.push("/dashboard"); // ✅ Redirect to your portal/dashboard
//       },
//       prefill: {
//         name: "John Doe",
//         email: "john@example.com",
//         contact: "9876543210",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp = new window.Razorpay(options);

//     rzp.on("payment.failed", function (response) {
//       console.error("❌ Payment failed:", response.error);
//       const retry = confirm("Payment failed. Do you want to try again?");
//       if (retry) {
//         rzp.open(); // ❌ Retry the same payment
//       } else {
//         alert("You can try purchasing the plan again later.");
//       }
//     });

//     rzp.open();
//   };

//   useEffect(() => {
//     if (subscriptionId) {
//       startPayment();
//     }
//   }, [subscriptionId]);

//   return null; // No need to render anything
// };

// export default RazorpaySubscription;



// RazorpaySubscription.jsx







// "use client";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const RazorpaySubscription = ({ subscriptionId }) => {
//   const router = useRouter();
// console.log(subscriptionId, "Subscription ID in RazorpaySubscription");
//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const startPayment = async () => {
//     const isScriptLoaded = await loadRazorpayScript();
//     if (!isScriptLoaded) {
//       alert("Razorpay SDK failed to load");
//       return;
//     }

//     const options = {
//       key: "rzp_test_LmSWny1H2dtdJz", // test key
//       subscription_id: subscriptionId,
//       name: "AmaanCorps",
//       description: "Monthly Plan Subscription",
//       handler: function (response) {
//         console.log("✅ Payment success:", response);
//         alert("Payment successful. Redirecting...");
//         router.push("/dashboard");
//       },
//       prefill: {
//         name: "John Doe",
//         email: "john@example.com",
//         contact: "9876543210",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };


//     const rzp = new window.Razorpay(options);

//     rzp.on("payment.failed", function (response) {
//       console.error("❌ Payment failed:", response.error);
//       alert("Payment failed. Please try again.");
//     });

//     rzp.open();
//   };

//   useEffect(() => {
//     if (subscriptionId) {
//       startPayment();
//     }
//   }, [subscriptionId]);

//   return null;
// };

// export default RazorpaySubscription;




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
        // const redirectUrl = `http://localhost:5173/company?token=${encodeURIComponent(token)}&role=${encodeURIComponent(role)}`;
        const redirectUrl = `https://app.t-racktool.com/company?token=${encodeURIComponent(token)}&role=${encodeURIComponent(role)}`;
        
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
