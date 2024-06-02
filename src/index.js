import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import UserHome from './Components/UserHome';
import AddBook from './Components/AddBook';
import Viewbooks from './Components/Viewbooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/UserHome' element={<UserHome/>}></Route>
          <Route path='/Addbook' element={<AddBook/>}></Route>
          <Route path='/Viewbooks' element={<Viewbooks/>}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

