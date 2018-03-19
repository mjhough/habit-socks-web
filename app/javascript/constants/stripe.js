const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? process.env.STRIPE_KEY
  : process.env.STRIPE_TEST_KEY;

export default STRIPE_PUBLISHABLE;
