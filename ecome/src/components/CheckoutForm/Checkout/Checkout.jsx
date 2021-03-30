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

    

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    );
    
    const From = () => activeStep === 0 
    ? <AddressFrom checkoutToken={checkoutToken} /> 
    : <PayementFrom />
        
    return (
        <div>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                <Typography variant='h4' align="center">Checkout</Typography>
                    <Stepper activeStep={0} className={classes.stepper} >
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
