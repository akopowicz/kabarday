import React, { useEffect } from 'react';
import {  Route, Routes, useLocation } from "react-router-dom";
import './App.css'

const RegisterComponent = React.lazy(() => import("./RegisterComponent/RegisterComponent"));
// import { LogIn } from './LogIn/LogIn';
// import { AdminPanel } from './Panel/AdminPanel';
const AdminPanel= React.lazy(() => import("./Panel/AdminPanel"));
// import { AddNewProduct } from './Panel/AddNewProduct/AddNewProduct';
const AddNewProduct = React.lazy(() => import("./Panel/AddNewProduct/AddNewProduct"));

const RemoveProduct = React.lazy(() => import("./Panel/RemoveProduct/RemoveProduct"));
const EditProduct = React.lazy(() => import("./Panel/EditProduct/EditProduct"));
import { ProtectedWrapper } from './ProtectedWrapper/ProtectedWrapper';
const Products = React.lazy(() => import('./Products/Products'));
const ProductCard = React.lazy(() => import('./Products/ProductCard/ProductCard'));
import { HomePage } from './HomePage/HomePage';
import { ProductType } from './Products/ProductType/ProductType';
import AllProducts from './Products/AllProducts/AllProducts';
// import ReactGA from'react-ga4';

const About = React.lazy(() => import('./About/About'));
const Order = React.lazy(() => import("./Order/Order"));


// import { Contact } from './Contact/Contact';
const Contact = React.lazy(() => import("./Contact/Contact"));

export const RoutesElement = () => {
      const location = useLocation();
  useEffect(() => {
    // analyticsEvent(location.pathname + location.search)
    // ReactGA.send({ hitType: "pageview", page: location.pathname + location.search, title: location.pathname + location.search });
    gtag("event", "pageview",{
        page: location.pathname + location.search,
      })
    
  }, [location]);

  
    return (
        <Routes>
        <Route index element={<HomePage />} />
        <Route path="/panel">
          <Route element={<ProtectedWrapper role={"admin"} ><AdminPanel /></ProtectedWrapper>} index />
          <Route path="/panel/addProuct" element={<AddNewProduct />} />

        </Route>
        <Route path="/product">
          <Route path="/product/:id/remove" element={<RemoveProduct />} />
          <Route path="/product/:id/edit" element={<EditProduct />} />
        </Route>
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="/products/:id" element={<ProductType />} />
          <Route path="/products/:id/:id" element={<ProductCard />} />
        </Route>
        <Route element={<About />} path="/o-nas" />
        <Route element={<Order />} path="/jak-zamowic" />
        <Route element={<Contact />} path="/kontakt" />
        <Route element={<RegisterComponent />} path="/register" />
        <Route element={<AllProducts allProducts={[]} productType={''} />} path="/allProducts" />
        <Route element={<div>404</div>} path="*" />
      </Routes>
    )
}