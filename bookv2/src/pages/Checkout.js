import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51J5aMxSJNn2qx1J3cOsZbE6Fh71oAl7TOPMDUIWCvMqGJBx1MPjIPQpv2TrVC3dIttDsDjCKSPlx3xmD7OrPt2Od00Hiea3vWb');
    

    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Checkout
