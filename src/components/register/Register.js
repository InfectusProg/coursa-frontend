import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { fetchAuth, fetchRegister, selectIsAuth } from '../../redux/slices/auth'


const Register = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth)
    const { 
        register, 
        handleSubmit, 
        setError, 
        formState: { 
            errors,
            isValid 
        } 
    } = useForm({
        defaultValues:{
            fullName: 'Vlad',
            email: 'asafasfasfas@asda.com',
            password: '1234567890',
        },
        mode: 'onChange'
    })
    
    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values))

        if(!data.payload) {
            return alert('Не вдалося зареэструватися')
        }
        
        if('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token)
        } 
    };

    if(isAuth){
        return <Navigate to="/"/>
    }

    return (
        <div className='authForm'>
            <p>Register</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='email'>Name</label>
                <input
                    type="text" 
                    name='fullName'
                    {...register('fullName', {required: 'Укажіть ім`я'})}
                />
                {Boolean(errors.fullName?.message) ? <div className="error">{errors.fullName?.message}</div> : <></>}
                <label htmlFor='email'>Email</label>
                <input
                    type="email" 
                    name='email'
                    {...register('email', {required: 'Укажіть пошту'})}
                />
                {Boolean(errors.email?.message) ? <div className="error">{errors.email?.message}</div> : <></>}
                <label htmlFor='password'>Password</label>
                <input 
                    type="password" 
                    name='password'
                    {...register('password', {required: 'Укажіть пароль'})}
                />
                {Boolean(errors.password?.message) ? <div className="error">{errors.password?.message}</div> : <></>}
                <input
                    disabled={!isValid}
                    type="submit"
                    value="Apply"
                />
            </form>
        </div>
        
    )
}

export default Register;
