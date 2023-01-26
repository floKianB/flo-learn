import React, { useState } from 'react';

function SignUp() {
    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handleChange = (e) => {
        const { name, value } = e.target;                       // here we get name and value of each input
        setFormFields({ ...formFields, [name]: value });        // we set the specific key of the FormFields object
        // Let's create a form validation in Utils for the content of this form.
    }
    return (
        <div>
            <h1>Sign up with your Email & Password</h1>
            <form onSubmit={() => {}}>
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