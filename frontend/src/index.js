import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/login'; // Correct the import name to Login
import NewProduct from './pages/Newproduct'; // Correct the import name to NewProduct
import Farmer from './pages/Farmer';
import Signup from './pages/Signup';
import { store } from "./redux/index";
import { Provider } from 'react-redux';
import ProductDetails from './pages/productdetails'; // Correct the import name to ProductDetails
import Fruits from './pages/fruits'; // Correct the import name to Fruits
import Vegetables from './pages/Vegetables';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="newproduct" element={<NewProduct />} />
          <Route path="signup" element={<Signup />} />
          <Route path="Farmer" element={<Farmer />} />
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="fruits" element={<Fruits />} />
          <Route path="vegetables" element={<Vegetables />} />
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
