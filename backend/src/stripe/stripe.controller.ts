import { Body, Controller, Post } from '@nestjs/common';
import Stripe from 'stripe';

const stripe = new Stripe(
  'pk_test_51KYcmBCKmuhJOPPhczQzRg8POfoOuW5Q0gvcIfiEJFD1lYr3oFG8CK5HZSfCLb5Tek91Q8u1kAPIwVFlN6I1UGQp00D0LbKpxs',
  { apiVersion: '2022-11-15' },
);

@Controller('create-payment-intent')
export class StripeController {
  @Post('')
  async paymentIntent(@Body() body) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: body.amount,
      currency: 'auto',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return { clientSecret: paymentIntent.client_secret };
  }
}
