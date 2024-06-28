import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectIsAuth } from '../redux/slices/auth'
import { Navigate } from 'react-router-dom'

const Header = ({title}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  
  const onClickLogout = () => {
    dispatch(logout())
    return <Navigate to='/'/>
  }

  return (
    <header>
      <h1>
        <Link to='/'>{title}</Link>
      </h1>
      <nav>
        {
          isAuth ?
            <>
              <Link to='/profile'>Профіль</Link>
              <Link to='/test'>Тестування</Link>
              <button onClick={onClickLogout}>Вийти</button>
            </>
            : <>
              <Link to='/login'>Вхід</Link>
              <Link to='/register'>Регістрація</Link>
            </>
        }
      </nav>
    </header> 
  )
}

export default Header
