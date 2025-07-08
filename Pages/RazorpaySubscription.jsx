import React from 'react';

const RazorpaySubscription = ({ subscriptionId }) => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();

    if (!isScriptLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }


// azorpay.key.id=rzp_test_LmSWny1H2dtdJzrazorpay.key.secret=COrz5ybn4V6BLUZkFP5UKiPm

    const options = {
      key: 'rzp_test_LmSWny1H2dtdJz', // Replace with your Razorpay Key ID
      subscription_id: subscriptionId,
      name: 'Your Company Name',
      description: 'Monthly Subscription',
      image: 'https://yourlogo.url/logo.png',
      handler: function (response) {
        console.log('Payment success:', response);
        // TODO: Send to backend to verify:
        // response.razorpay_payment_id
        // response.razorpay_subscription_id
        // response.razorpay_signature
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9876543210'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={handlePayment}>Subscribe Now</button>
  );
};

export default RazorpaySubscription;