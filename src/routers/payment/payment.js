import express from 'express'
import Stripe from 'stripe';
const router = express.Router()


router.post("/create-payment-intent", async(req, res)=> {
    const {amount, currency, payment_method_type} = req.body
    const stripe = new Stripe(process.env.STRIP_SECRET)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount*100,
        currency, 
        payment_method_types: [payment_method_type]
    })

    res.json({
        clientSecret: paymentIntent.client_secret
    })
})

export default router;