import React, { useState } from 'react';

import { creatAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

function SignUp() {
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
            return
        } 
        try {
            const { user } = await creatAuthUserWithEmailAndPassword(email, password);
            await creatUserDocumentFromAuth(user, { displayName })
            ResetFormFields();
        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Email already in use')
            }
            console.log('Error in creating user with email and password' + error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;                       // here we get name and value of each input
        setFormFields({ ...formFields, [name]: value });        // we set the specific key of the FormFields object
        // Let's create a form validation in Utils for the content of this form.
    }
    return (
        <div>
            <h1>Sign up with your Email & Password</h1>
            <form onSubmit = { Submit }>
                <label>Display Name</label>
                <input type="text" name="displayName" onChange={handleChange} required value={displayName}/>

                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} required value={email}/>

                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} required value={password}/>

                <label>Confirm Password</label>
                <input type="password" name='confirmPassword' onChange={handleChange} required value={confirmPassword}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;