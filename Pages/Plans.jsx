// "use client";
// import React, { useEffect, useState } from "react";
// import { decodeToken } from "../app/utils/decodeToken"; // Make sure the path is correct
// import RazorpaySubscription from "./RazorpaySubscription";
// import { GET_ALL_PACKAGES } from "@/config/api";

// export default function Plans() {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [subscriptionId, setSubscriptionId] = useState(null); console.log(subscriptionId,'amaan')

//   // ✅ Handle token from query params and save to localStorage
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");

//     if (token) {
//       localStorage.setItem("authToken", token);
//       console.log("✅ Token saved:", token);
//     }
//   }, []);

//   // ✅ Fetch available plans
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const res = await fetch(GET_ALL_PACKAGES);
//         const data = await res.json();

//         const plansArray = data?.meta?.packages;
//         if (!Array.isArray(plansArray)) {
//           throw new Error("Invalid data format received for plans");
//         }

//         setPlans(plansArray);
//       } catch (error) {
//         console.error("❌ Failed to load plans:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlans();
//   }, []);

//   // ✅ Assign plan and update subscriptionId state
//   const handleBuy = async (plan) => {
//     try {
//       setSelectedPlan(plan);
//       const token = localStorage.getItem("authToken");

//       if (!token) {
//         alert("Token not found. Please log in again.");
//         return;
//       }

//       const decoded = decodeToken(token);
//       const userId = decoded?.id || decoded?.userId;

//       if (!userId) {
//         alert("User ID not found in token.");
//         return;
//       }

//       const queryParams = new URLSearchParams({
//         packageId: plan.id,
//         // Optionally add userId if backend expects it:
//         // userId: userId,
//       }).toString();

//       const res = await fetch(
//         `http://192.168.29.44:8080/api/packages/assign?${queryParams}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await res.json();
//       console.log("Assign API response:", data);

//       if (!res.ok) throw new Error(data.message || "Failed to assign package");

//       const newToken = data.meta?.token;
//       const subscriptionIdFromAPI = data.subscriptionId; // 👈 correct key name

//       if (newToken) {
//         localStorage.setItem("authToken", newToken);
//       }

//       if (subscriptionIdFromAPI) {
//         setSubscriptionId(subscriptionIdFromAPI); // ✅ Set the Razorpay subscription ID
//       } else {
//         throw new Error("No subscription ID received.");
//       }
//     } catch (error) {
//       console.error("❌ Purchase failed:", error);
//       alert(error.message || "Something went wrong.");
//     }
//   };

//   if (loading) {
//     return <div className="text-center py-10 text-lg">Loading Plans...</div>;
//   }

//   if (!plans.length) {
//     return (
//       <div className="text-center py-10 text-lg text-gray-600">
//         No plans available at the moment.
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 mt-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
//           Choose Your Plan
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {plans.map((plan) => (
//             <div
//               key={plan.id}
//               className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
//             >
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">
//                   {plan.packageName}
//                 </h3>
//                 <p className="text-gray-600 mb-2">{plan.description}</p>
//                 <p className="text-gray-700 text-sm mb-1">
//                   Billing: Every {plan.razorpayInterval} {plan.razorpayPeriod}
//                 </p>

//                 {plan.discount > 0 && (
//                   <p className="text-sm text-green-600 mb-1">
//                     Discount: {plan.discount}
//                     {plan.discountType === "PERCENT" ? "%" : " ₹"}
//                   </p>
//                 )}

//                 <p className="text-gray-500 text-sm mb-1">
//                   Additional Fee: ₹{plan.additionalAmount}
//                 </p>

//                 <p className="text-2xl font-bold text-cyan-600 mb-4">
//                   ₹{plan.finalAmount}
//                 </p>
//               </div>

//               <button
//                 onClick={() => handleBuy(plan)}
//                 className="mt-auto bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700"
//               >
//                 Select Plan
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Pass subscriptionId to RazorpaySubscription component */}
//       {subscriptionId && (
//         <div className="mt-10">
//           <RazorpaySubscription subscriptionId={subscriptionId} />
//         </div>
//       )}
//     </div>
//   );
// }





// "use client";
// import React, { useEffect, useState } from "react";
// import { decodeToken } from "../app/utils/decodeToken";
// import RazorpaySubscription from "./RazorpaySubscription";

// export default function Plans() {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [subscriptionId, setSubscriptionId] = useState(null);
//   const [hoveredPlan, setHoveredPlan] = useState(null);

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");

//     if (token) {
//       localStorage.setItem("authToken", token);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         // const res = await apiClient.get(GET_ALL_PACKAGES);");
//         const res = await fetch("http://localhost:9090/api/packages");
//         const data = await res.json();

//         const plansArray = data?.meta?.packages;
//         if (!Array.isArray(plansArray)) {
//           throw new Error("Invalid data format received for plans");
//         }

//         setPlans(plansArray);
//       } catch (error) {
//         console.error("❌ Failed to load plans:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlans();
//   }, []);

//   const handleBuy = async (plan) => {
//     try {
//       setSelectedPlan(plan);
//       const token = localStorage.getItem("authToken");

//       if (!token) {
//         alert("Token not found. Please log in again.");
//         return;
//       }

//       const decoded = decodeToken(token);
//       const userId = decoded?.id || decoded?.userId;

//       if (!userId) {
//         alert("User ID not found in token.");
//         return;
//       }

//       const queryParams = new URLSearchParams({
//         packageId: plan.id,
//       }).toString();

//       const res = await fetch(
//         `http://192.168.29.44:8080/api/packages/assign?${queryParams}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await res.json();
//       console.log("Assign API response:", data);

//       if (!res.ok) throw new Error(data.message || "Failed to assign package");

//       const newToken = data.meta?.token;
//       const subscriptionIdFromAPI = data.subscriptionId;

//       if (newToken) {
//         localStorage.setItem("authToken", newToken);
//       }

//       if (subscriptionIdFromAPI) {
//         setSubscriptionId(subscriptionIdFromAPI);
//       } else {
//         throw new Error("No subscription ID received.");
//       }
//     } catch (error) {
//       console.error("❌ Purchase failed:", error);
//       alert(error.message || "Something went wrong.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//           <p className="mt-4 text-lg font-medium text-gray-700">Loading Plans...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!plans.length) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <div className="text-5xl mb-4">😕</div>
//           <h3 className="text-2xl font-bold text-gray-800 mb-2">No Plans Available</h3>
//           <p className="text-gray-600">Please check back later for our subscription options.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
//             Choose Your Perfect Plan
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Select the subscription that fits your needs and unlock premium features.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {plans.map((plan) => (
//             <div
//               key={plan.id}
//               className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform ${
//                 hoveredPlan === plan.id ? "scale-105" : "scale-100"
//               }`}
//               onMouseEnter={() => setHoveredPlan(plan.id)}
//               onMouseLeave={() => setHoveredPlan(null)}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-10"></div>

//               <div className="relative bg-white bg-opacity-90 backdrop-blur-sm p-8 h-full flex flex-col">
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                     {plan.packageName}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{plan.description}</p>

//                   <div className="mb-6">
//                     <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
//                       ₹{plan.finalAmount}
//                     </span>
//                     <span className="text-gray-500 text-sm ml-1">
//                       /{plan.razorpayPeriod}
//                     </span>
//                   </div>

//                   <div className="space-y-2 mb-6">
//                     <div className="flex items-center">
//                       <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                       <span className="text-gray-700">Billed every {plan.razorpayInterval} {plan.razorpayPeriod}</span>
//                     </div>

//                     <div className="flex items-center">
//                       <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                       <span className="text-gray-700">Users {plan.assignedUser}</span>
//                     </div>


//                     {plan.discount > 0 && (
//                       <div className="flex items-center">
//                         <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                         </svg>
//                         <span className="text-gray-700">
//                           {plan.discount}
//                           {plan.discountType === "PERCENT" ? "% discount" : " ₹ discount"}
//                         </span>
//                       </div>
//                     )}

//                     <div className="flex items-center">
//                       <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                       <span className="text-gray-700">Additional fee: ₹{plan.additionalAmount}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleBuy(plan)}
//                   className="mt-auto w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {subscriptionId && (
//         <div className="mt-16 max-w-2xl mx-auto">
//           <RazorpaySubscription subscriptionId={subscriptionId} />
//         </div>
//       )}
//     </div>
//   );
// }








// "use client";
// import React, { useEffect, useState } from "react";
// import { decodeToken } from "../app/utils/decodeToken";
// import RazorpaySubscription from "./RazorpaySubscription";
// import { useRouter } from "next/navigation";
// import apiClient from "@/config/api";

// export default function Plans() {
//   const router = useRouter();
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [subscriptionId, setSubscriptionId] = useState(null);
//   const [hoveredPlan, setHoveredPlan] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [showLoginPrompt, setShowLoginPrompt] = useState(false);

//   useEffect(() => {
//     const checkAuth = () => {
//       const token = localStorage.getItem("authToken");
//       const params = new URLSearchParams(window.location.search);
//       const queryToken = params.get("token");

//       if (queryToken) {
//         localStorage.setItem("authToken", queryToken);
//         setIsAuthenticated(true);
//         window.history.replaceState({}, document.title, window.location.pathname);
//         return;
//       }

//       if (!token) {
//         setIsAuthenticated(false);
//         return;
//       }

//       // Verify token is valid
//       try {
//         const decoded = decodeToken(token);
//         if (decoded && (decoded.id || decoded.userId)) {
//           setIsAuthenticated(true);
//         } else {
//           localStorage.removeItem("authToken");
//           setIsAuthenticated(false);
//         }
//       } catch (error) {
//         localStorage.removeItem("authToken");
//         setIsAuthenticated(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   useEffect(() => {
//     if (!isAuthenticated) return;

//     const fetchPlans = async () => {
//       try {
//         const response = await apiClient.get("/api/packages");
//         const data = response.data;

//         const plansArray = data?.meta?.packages;
//         if (!Array.isArray(plansArray)) {
//           throw new Error("Invalid data format received for plans");
//         }

//         setPlans(plansArray);
//       } catch (error) {
//         console.error("❌ Failed to load plans:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlans();
//   }, [isAuthenticated]);

//   const handleBuy = async (plan) => {
//     if (!isAuthenticated) {
//       setShowLoginPrompt(true);
//       return;
//     }

//     try {
//       setSelectedPlan(plan);
//       const token = localStorage.getItem("authToken");

//       const response = await apiClient.post(
//         `/api/packages/assign?packageId=${plan.id}`,
//         null,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = response.data;
//       console.log("Assign API response:", data);

//       const newToken = data.meta?.token;
//       const subscriptionIdFromAPI = data.subscriptionId;

//       if (newToken) {
//         localStorage.setItem("authToken", newToken);
//       }

//       if (subscriptionIdFromAPI) {
//         setSubscriptionId(subscriptionIdFromAPI);
//       } else {
//         throw new Error("No subscription ID received.");
//       }
//     } catch (error) {
//       console.error("❌ Purchase failed:", error);
//       alert(error.response?.data?.message || error.message || "Something went wrong.");
//     }
//   };

//   const handleLoginRedirect = () => {
//     router.push("/email-verification");
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//         <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-xl shadow-lg">
//           <div className="mb-6">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Premium Plans
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Unlock all features with our subscription plans
//             </p>
//             <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 Please login to view plans
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 You need to be logged in to access our subscription options.
//               </p>
//               <button
//                 onClick={handleLoginRedirect}
//                 className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md"
//               >
//                 Login / Register
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//           <p className="mt-4 text-lg font-medium text-gray-700">Loading Plans...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       {showLoginPrompt && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg max-w-md mx-4">
//             <h3 className="text-xl font-semibold mb-4">Login Required</h3>
//             <p className="mb-6">You need to be logged in to select a plan.</p>
//             <div className="flex justify-end space-x-3">
//               <button
//                 onClick={() => setShowLoginPrompt(false)}
//                 className="px-4 py-2 border border-gray-300 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleLoginRedirect}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//               >
//                 Go to Login
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
//             Choose Your Perfect Plan
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Select the subscription that fits your needs and unlock premium features.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {plans.map((plan) => (
//             <div
//               key={plan.id}
//               className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform ${
//                 hoveredPlan === plan.id ? "scale-105" : "scale-100"
//               }`}
//               onMouseEnter={() => setHoveredPlan(plan.id)}
//               onMouseLeave={() => setHoveredPlan(null)}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-10"></div>

//               <div className="relative bg-white bg-opacity-90 backdrop-blur-sm p-8 h-full flex flex-col">
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                     {plan.packageName}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{plan.description}</p>

//                   <div className="mb-6">
//                     <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
//                       ₹{plan.finalAmount}
//                     </span>
//                     <span className="text-gray-500 text-sm ml-1">
//                       /{plan.razorpayPeriod}
//                     </span>
//                   </div>

//                   <div className="space-y-2 mb-6">
//                     <div className="flex items-center">
//                       <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                       <span className="text-gray-700">Billed every {plan.razorpayInterval} {plan.razorpayPeriod}</span>
//                     </div>

//                     <div className="flex items-center">
//                       <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                       <span className="text-gray-700">Users {plan.assignedUser}</span>
//                     </div>

//                     {plan.discount > 0 && (
//                       <div className="flex items-center">
//                         <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                         </svg>
//                         <span className="text-gray-700">
//                           {plan.discount}
//                           {plan.discountType === "PERCENT" ? "% discount" : " ₹ discount"}
//                         </span>
//                       </div>
//                     )}

//                     <div className="flex items-center">
//                       <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                       <span className="text-gray-700">Additional fee: ₹{plan.additionalAmount}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleBuy(plan)}
//                   className="mt-auto w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {subscriptionId && (
//         <div className="mt-16 max-w-2xl mx-auto">
//           <RazorpaySubscription subscriptionId={subscriptionId} />
//         </div>
//       )}
//     </div>
//   );
// }







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

  // Check authentication
  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   const params = new URLSearchParams(window.location.search);
  //   const queryToken = params.get("token");

  //   // if (queryToken) {
  //   //   localStorage.setItem("authToken", queryToken);
  //   //   setIsAuthenticated(true);
  //   //   window.history.replaceState({}, document.title, window.location.pathname);
  //   // } else 
  //   if (token) {
  //     try {
  //       const decoded = decodeToken(token);
  //       if (decoded?.id || decoded?.userId) {
  //         console.log(decoded?.id || decoded?.userId,'decoded?.id || decoded?.userId')
  //         console.log(isAuthenticated,'deisAuthenticated')
          
  //         setIsAuthenticated(true);
  //       } else {
  //         localStorage.removeItem("authToken");
  //         console.log("first")
  //       }
  //     } catch {
  //       localStorage.removeItem("authToken");
  //       console.log("first")
  //     }
  //   }
  // }, []);


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
        // const res = await apiClient.get(GET_ALL_PACKAGES);
        const res = await axios.get(`https://apiv2.t-racktool.com/api/packages`);
        // const res = await axios.get(`http://192.168.29.44:8080/api/packages`);
        const plansArray = res.data?.meta?.packages;
        if (!Array.isArray(plansArray)) {
          throw new Error("Invalid data format");
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

  const handleBuy = (plan) => {
    if (!isAuthenticated) {
      router.push("/email-verification");
    } else {
      assignPlan(plan);
    }
  };

  const assignPlan = async (plan) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await apiClient.post(
        `/packages/assign?packageId=${plan.id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // const newToken = response.data.meta?.token;
      const subId = response.data.subscriptionId;

      // if (newToken) localStorage.setItem("authToken", newToken);
      if (subId) {
        setSubscriptionId(subId);
      } else {
        throw new Error("No subscription ID returned");
      }
    } catch (error) {
      console.error("❌ Purchase failed:", error);
      alert(error.response?.data?.message || error.message || "Something went wrong.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading Plans...</p>
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
              className={`relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ${hoveredPlan === plan.id ? "scale-105" : "scale-100"
                }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-10"></div>

              <div className="relative bg-white bg-opacity-90 backdrop-blur-sm p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.packageName}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                      ₹{plan.finalAmount}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">/{plan.razorpayPeriod}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <FeatureItem text={`Billed every ${plan.razorpayInterval} ${plan.razorpayPeriod}`} />
                    <FeatureItem text={`Users: ${plan.assignedUser}`} />
                    {plan.discount > 0 && (
                      <FeatureItem
                        text={`${plan.discountType === "PERCENT"
                            ? `${plan.discount}% discount`
                            : `₹${plan.discount} discount`
                          }`}
                      />
                    )}
                    <FeatureItem text={`Additional fee: ₹${plan.additionalAmount}`} />
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
