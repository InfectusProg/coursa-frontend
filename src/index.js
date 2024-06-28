import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/components.css';
import './pages/pages.css';
import App from './App';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     errorElement: <NotFoundPage/>
//   },
//   {
//     path: '/profile',
//     element: <ProfilePage/>
//   }
// ]);
/* <RouterProvider router={router}/> */