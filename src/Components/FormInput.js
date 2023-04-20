import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Label, FormGroup, Input, Form } from 'reactstrap';
import axios from 'axios';
const FormInput = () => {

    const [countryCurrency, setCountryCurrency] = useState('')
    const [currency, setCurrency] = useState(0)
    const [formData, setFormData] = useState({
        amount: '',
        fromCountryName: 'INR',
        toCountryName: 'INR',
    })
    const fetchCountryData = () => {
        return axios.get(`https://v6.exchangerate-api.com/v6/80c74c3e96a80e75505cc322/latest/INR`)
            .then((response) => setCountryCurrency(response.data.conversion_rates))
    }
    const countries = Object.keys(countryCurrency);
    useEffect(() => {
        fetchCountryData()
    }, [])

    const { amount, fromCountryName, toCountryName } = formData

    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.get(`https://v6.exchangerate-api.com/v6/80c74c3e96a80e75505cc322/latest/${fromCountryName}`)
            .then((response) => setCurrency(response.data.conversion_rates[toCountryName]))

    }

    let totalPrice = (amount * currency)

    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className='container'>

            <Form onSubmit={handleSubmit}>

                <FormGroup className='text-start'>
                    <Label for="exampleNumber " >
                        ENTER AMOUNT
                    </Label>
                    <Input
                        required
                        id="exampleNumber"
                        name="amount"
                        placeholder="Enter Amount here"
                        type="number"
                        value={formData.amount}
                        onChange={handleInputs}
                    />
                </FormGroup>
                <FormGroup className='text-start' >
                    <Label for="exampleSelect" >
                        From
                    </Label>
                    <Input
                        required
                        id="exampleSelect"
                        name="fromCountryName"
                        type="select"
                        value={formData.fromCountryName}
                        onChange={handleInputs}

                    >
                        {countries.map((country, id) => {
                            return (
                                <option key={id}>
                                    {country}
                                </option>
                            )
                        })}

                    </Input>
                </FormGroup>
                <FormGroup className='text-start'>
                    <Label for="exampleSelect">
                        To
                    </Label>
                    <Input
                        required
                        id="exampleSelect"
                        name="toCountryName"
                        type="select"
                        value={formData.toCountryName}
                        onChange={handleInputs}
                    >
                        {countries.map((country, id) => {
                            return (
                                <option key={id}>
                                    {country}
                                </option>
                            )
                        })}
                    </Input>
                </FormGroup>

                <Button className='text-start ' type='submit'>CONVERT</Button>

                <div className='mt-4'>
                    <Button backgroundColor='blue.600' color='white'>Converted Value :  {totalPrice}</Button>
                </div>
            </Form>
        </div>
    )
}

export default FormInput