import React from 'react';
import { Typography, Divider, Button } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStrip } from '@stripe/stripe-js'

import Review from './Review'

const PaymentFrom = ({ checkoutToken }) => {
    return (
        <div>
            <Review checkoutToken={checkoutToken} />
        </div>
    )
}

export default PaymentFrom
