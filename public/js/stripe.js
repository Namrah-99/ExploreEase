/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
// const stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY);
const stripe = Stripe(
  'pk_test_51L1tQQEQ3poQqO1oE6jYqIWvrF0trwzeVMNdVqB44g58D6bCWBFLXKbZFCOemRl41smibF4UThfcAkioCdfwtwNA00bvUmVhm8',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`,
      // `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`,
    );
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
