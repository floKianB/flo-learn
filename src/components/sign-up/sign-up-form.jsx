import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import "./sign-up-form.scss";


import { creatAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

function SignUpForm() {
    const navigate = useNavigate();

    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const ResetFormFields = () => setFormFields(defaultFormFields);

    const Submit = async (e) => {
        e.preventDefault();
        if(confirmPassword !== password) {
            alert('Passwords do not match');
            return;
        } 
        try {
            const { user } = await creatAuthUserWithEmailAndPassword(email, password);
            await creatUserDocumentFromAuth(user, { displayName });
            ResetFormFields();
            navigate('/')
        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Email already in use')
            }
            console.log('Error in creating user with email and password' + error);
            ResetFormFields();
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;                       // here we get name and value of each input
        setFormFields({ ...formFields, [name]: value });        // we set the specific key of the FormFields object
        // Let's create a form validation in Utils for the content of this form.
    }
    return (
        <>
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <form onSubmit={ Submit }>
                <FormInput label="Display Name" type="text" name="displayName" onChange={handleChange} required value={displayName} />
                <FormInput label="Email" type="email" name="email" onChange={handleChange} required value={email} />
                <FormInput label="Password" type="password" name="password" onChange={handleChange} required value={password} />
                <FormInput label="Confirm Password" type="password" name='confirmPassword' onChange={handleChange} required value={confirmPassword} />
                <Button type="submit" >Sign Up</Button>            
            </form>
        </div>
        </>
        
    )
}

export default SignUpForm;