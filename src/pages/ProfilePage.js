import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuth, fetchAuthMe } from '../redux/slices/auth'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProfilePage = () => {
    const isAuth = useSelector(selectIsAuth)
    const { data } = useSelector(state => state.auth);

    if(!isAuth){
        return <Navigate to="/"/>
    }

    console.log(data)

    const roles = Object.entries(data.roles).map(([key, value]) => [key, ...Object.values(value)])

    console.log(roles)

    return (
        <main>
            <div className='profilePage'>
                <h1>PROFILE PAGE</h1>
                <h2>Ім'я: {data.fullName}</h2>
                <h2>Пошта: {data.email}</h2>
                <div>
                    <h2>Доступ:</h2>
                    {roles.map((item, index) => (<p key={index}>{item}</p>))}
                </div>
                <div>
                    <Link to='/test'>Перейти до тестування</Link>
                </div>
                {
                <div>
                    {roles.length > 1 ? <Link to='/add-test'>Перейти до редактору тесту</Link> : <></>}
                </div>
                }
            </div>
        </main>
    )
}

export default ProfilePage
