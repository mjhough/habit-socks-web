const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
  ? 'sk_live_N14twY2mXN8r04W80HuPX56R' 
  : 'sk_test_2EKwBcSjSvCcT73YBiZtibSe';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
