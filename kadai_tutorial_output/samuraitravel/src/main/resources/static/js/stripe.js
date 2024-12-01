const stripe = Stripe('pk_test_51QLzzoD1ZW8pE0k3PmtcaKUNlYamzu3Q4tlqqRnq7wfloQUTC63zXRcvKQd6n6DnhLFf3mqglMl1PG09fRchwJNv00CXYXQqnM');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });

