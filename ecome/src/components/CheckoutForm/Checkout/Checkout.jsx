import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, CircularProgress, Divider, Typography, Button} from '@material-ui/core';
import useStyles from './styles';
import AddressFrom from '../AddressFrom';
import PayementFrom from '../PaymentFrom'
import { commerce } from '../../../lib/commerce'

const steps = ['Shipping address', 'Payement details'];

const Checkout = ({ cart }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({})
    const classes = useStyles();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});

               console.log(token)

                setCheckoutToken(token);
            } catch (error) {
                
            }
        }


        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1 )
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1 )

    const next = (data) => {
        setShippingData(data)

        nextStep();
    }

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    );
    
    const From = () => activeStep === 0 
    ? <AddressFrom checkoutToken={checkoutToken} next={next} /> 
    : <PayementFrom shippingData={shippingData} checkoutToken={checkoutToken} />
        
    return (
        <div>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                <Typography variant='h4' align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper} >
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <From />}
                </Paper>     
            </main>
        </div>
    )
}

export default Checkout
