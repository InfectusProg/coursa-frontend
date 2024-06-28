import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import TestSelect from './pages/TestSelect';
import TestingPage from './pages/TestingPage';
import TestRedactor from './pages/TestRedactor';
import Register from './components/register/Register';
import Login from './components/login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import { Navigate } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
    
    useEffect(()=>{
      if(window.localStorage.getItem('token')){
        dispatch(fetchAuthMe())
      }
    },[])
    
    return (
      <div className="App">
        <Header 
          title={'Testarea'}
        />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/add-test' element={<TestRedactor/>}/>
          <Route path='/testpage/:id' element={<TestingPage/>}/>
          <Route path='/test' element={<TestSelect/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </div>
    );
}

export default App;
// npx json-server -p 3500 -w data/db.json
