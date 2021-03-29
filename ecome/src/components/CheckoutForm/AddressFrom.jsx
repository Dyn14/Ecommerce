import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField'

const AddressFrom = () => {
    const [shippingCountries, setshippingCountries] = useState([]);
    const [shippingCountry, setshippingCountry] = useState('');
    const [shippingSubdivisions, setshippingSubdivision] = useState([]);
    const [shippingContries, setshippingContries] = useState('');
    const [shippingOptions, setshippingOptions] = useState([]);
    const [shippingOption, setshippingOption] = useState('');
    const methods = useForm();

    return (
        <div>
            <Typography variant="h6" gutterBottom >Shipping address</Typography>
            <FormProvider {...methods} >
                <form onSubmit={1}>
                    <Grid container spacing={3} >
                        <FormInput required name='firstname' label='Firstname' />
                        <FormInput required name='lastname' label='Lastname' />
                        <FormInput required name='email' label='Email' />
                        <FormInput required name='address' label='Address' />
                        <FormInput required name='city' label='City' />
                        <FormInput required name='zip' label='Zip "Code postal"' />
                        
                    </Grid>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressFrom
