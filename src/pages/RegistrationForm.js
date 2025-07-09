import React from 'react';
import { useForm } from 'react-hook-form';

function RegistrationForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isSubmitted}
    } = useForm({ mode: 'onChange' });

    const onSubmit = (data) => {
        console.log("Form Submitted", data);
    }

    return (<div style={{width: '400px', margin: '50px auto', border: '1px solid #000', padding: '20px'}}>
        <h3>React Hook Registration Form</h3>

        {isSubmitted && <p>Form Sumitted successfully!</p>}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div style={{ margin: '10px 0'}}>
                <label>Name:</label><br/>
                <input style={{width: '340px'}}
                    {...register('name',{ required:'Name is required' })}
                    placeholder='Enter your name' />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div style={{ margin: '10px 0'}}>
                <label>Email:</label><br/>
                <input style={{width: '340px'}}
                    {...register('email',{
                        required:'Email is required',
                        pattern:{
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: 'Invalid email format',
                        },
                    })}
                    placeholder='Enter your email' />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div style={{ margin: '10px 0'}}>
                <label>Password:</label><br/>
                <input style={{width: '340px'}}
                    type='password'
                    {...register('password',{
                        required:'Password is required',
                        minLength:{
                            value: 6,
                            message: 'Password must be atleast 6 characters',
                        },
                    })}
                    placeholder='Enter your password' />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div style={{ margin: '10px 0'}}>
                <label>Confirm Password:</label><br/>
                <input style={{width: '340px'}}
                    type='password'
                    {...register('confirmPassword',{
                        required:'Please confirm your password',
                        validate: (value) => value === watch('password') || 'Passwords do not match',})}
                    placeholder='Confirm your password' />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>

            <div style={{ margin: '10px 0'}}>
                <button type='submit'>Register</button>
            </div>
        </form>
    </div>)
}

export default RegistrationForm;
