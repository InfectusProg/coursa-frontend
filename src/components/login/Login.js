import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth'


const Login = () => {
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
            email: 'my.thing228@gmail.com',
            password: '1234567890'
        },
        mode: 'onChange'
    })
    
    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values))

        if(!data.payload) {
            return alert('Не вдалося авторизуватися')
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
            <p>Login</p>
            <form onSubmit={handleSubmit(onSubmit)}>
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

export default Login;
