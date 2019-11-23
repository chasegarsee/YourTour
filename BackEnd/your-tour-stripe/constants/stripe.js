const configureStripe = require("stripe");

const STRIPE_SECRET_KEY = "sk_test_rvy6rdzXDKcwMkpm6JvQxFFO00F5tiWmkp";
// process.env.NODE_ENV === 'production'
//     ? 'sk_live_MY_SECRET_KEY'
//     : 'sk_test_MY_SECRET_KEY';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
