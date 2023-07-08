import React from 'react'
import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Product from '../pages/Product';
import About from '../pages/About';
import ProductDetail from '../pages/ProductDetail';

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path='/product-detail/:id' element={<ProductDetail />}/>
        </Routes>
    )
}

export default RoutesApp;