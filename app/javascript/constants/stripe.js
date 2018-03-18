const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_OEo4Fj3Pb21IVWmWSvYI8zUG'
  : 'pk_test_mq7yUzQWFdLTp3tV7UoRKxXW';

export default STRIPE_PUBLISHABLE;
