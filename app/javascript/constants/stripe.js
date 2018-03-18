const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'expired'
  : 'expired';

export default STRIPE_PUBLISHABLE;
