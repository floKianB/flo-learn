import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./sign-in-form.scss";


import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

function SignInForm() {
    const navigate = useNavigate();

    const defaultFormFields = {
        email: '',
        password: '',
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const ResetFormFields = () => setFormFields(defaultFormFields);


    const logGoogleUserPopup = async () => {
        await signInWithGooglePopup();
    }

    const Submit = async (e) => {
        e.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            navigate('/')
        } catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("incorrect password");
                    break;
                case "auth/user-not-found":
                    alert("user not found");
                    break;
                default:
                    console.log(error);
                
                ResetFormFields();
            }
        }
    }
    const logGoogleUserPopupHnadler = async () => {
        try {
            await logGoogleUserPopup();
            navigate('/');
        } catch (error){
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;                       // here we get name and value of each input
        setFormFields({ ...formFields, [name]: value });        // we set the specific key of the FormFields object
        // Let's create a form validation in Utils for the content of this form.
    }
    return (
        <>
        <div className='sign-in-container'>
            <h2>I already have an account?</h2>
            <form onSubmit = { Submit } action='/' >
                <FormInput label="Email" type="email" name="email" onChange={handleChange} required value={email} />
                <FormInput label="Password" type="password" name="password" onChange={handleChange} required value={password} />
                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    <Button type="button" onClick={() => logGoogleUserPopupHnadler()} buttonType="google">Google Sign In</Button>
                </div>
            </form>
        </div>
        </>
        
    )
}

export default SignInForm;