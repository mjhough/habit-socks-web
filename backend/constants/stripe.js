const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
  ? process.env.STRIPE_SECRET
  : process.env.STRIPE_TEST_SECRET;

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
