
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RiderNavbar from './RiderNavbar/RiderNavbar';
import RiderProfile from './RiderProfile/RiderProfile';
import RiderOrder from './RiderOrders/RiderOrder';
import RiderProfileUpdate from './RiderUpdateProfile/RiderProfileUpdate';
import RiderSignup from './RiderSignup/RiderSignup';
import RiderLogin from './RiderLogin/RiderLogin';
import RiderHome from './RiderHome/RiderHome';
import Footer from './Footer/Footer';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <RiderNavbar />
        <Routes>
          <Route path='/rider/RiderLogin' element={<div><RiderLogin /></div>} />
          <Route path='/rider/riderSignup' element={<div><RiderSignup /></div>} />
          <Route path='/rider/updateRiderProfile' element={<div><RiderProfileUpdate /></div>} />
          <Route path='/rider/RiderProfile' element={<div><RiderProfile /></div>} />
          <Route path='/rider/RiderOrders' element={<div><RiderOrder /></div>} />
          <Route path='/rider/RiderHome' element={<div><RiderHome /></div>} />
        </Routes> 
      <Footer />
      <ToastContainer/>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();