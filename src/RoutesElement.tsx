import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css'

const RegisterComponent = React.lazy(() => import("./RegisterComponent/RegisterComponent"));
// import { LogIn } from './LogIn/LogIn';
// import { AdminPanel } from './Panel/AdminPanel';
const AdminPanel = React.lazy(() => import("./Panel/AdminPanel"));
// import { AddNewProduct } from './Panel/AddNewProduct/AddNewProduct';
const AddNewProduct = React.lazy(() => import("./Panel/AddNewProduct/AddNewProduct"));

const RemoveProduct = React.lazy(() => import("./Panel/RemoveProduct/RemoveProduct"));
const EditProduct = React.lazy(() => import("./Panel/EditProduct/EditProduct"));
import { ProtectedWrapper } from './ProtectedWrapper/ProtectedWrapper';
const Products = React.lazy(() => import('./Products/Products'));
const ProductCard = React.lazy(() => import('./Products/ProductCard/ProductCard'));
import { HomePage } from './HomePage/HomePage';
import { ProductType } from './Products/ProductType/ProductType';
// import AllProducts from './Products/AllProducts/AllProducts';
import { Policy } from './Policy/Policy';
// import { Delivery } from './Delivery/Delivery';
// import Contact from './Contact/Contact';
import { ROUTES } from './constants';
import { Page404 } from './404/404';
import { Regulations } from './Regulations/Regulations';
import { Return } from './Return/Return';
// import { Cookie } from './Policy/Cookie/Cookie';
// import ReactGA from'react-ga4';

const About = React.lazy(() => import('./About/About'));
const Order = React.lazy(() => import("./Order/Order"));
const Delivery = React.lazy(() => import("./Delivery/Delivery"));
const AllProducts = React.lazy(() => import("./Products/AllProducts/AllProducts"));
// import { Contact } from './Contact/Contact';
const Contact = React.lazy(() => import("./Contact/Contact"));
const Payment = React.lazy(() => import('./Payment/Payment'));
const Realization = React.lazy(() => import('./Realization/Realization'));

export const RoutesElement = () => {
  const location = useLocation();
  useEffect(() => {
    // analyticsEvent(location.pathname + location.search)
    // ReactGA.send({ hitType: "pageview", page: location.pathname + location.search, title: location.pathname + location.search });
    gtag("event", "pageview", {
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
      <Route path={"/product"}>
        <Route path={ROUTES.removeProduct(":id")} element={<RemoveProduct />} />
        <Route path="/product/:id/edit" element={<EditProduct />} />
      </Route>
      <Route path={ROUTES.products}>
        <Route index element={<Products />} />
        <Route path={`${ROUTES.products}/:id`} element={<ProductType />} />
        <Route path={`${ROUTES.products}/:id/:id`} element={<ProductCard />} />
      </Route>
      <Route element={<About />} path={ROUTES.about} />
      <Route element={<Order />} path={ROUTES.jakZamowic} />
      <Route element={<Contact />} path={ROUTES.contact} />
      <Route element={<Delivery />} path={ROUTES.delivery} />
      <Route element={<Payment />} path={ROUTES.payment} />
      <Route element={<Realization />} path={ROUTES.realization} />
      <Route element={<RegisterComponent />} path="/register" />
      <Route element={<AllProducts allProducts={[]} productType={''} />} path="/allProducts" />
      <Route element={<Policy />} path={ROUTES.privacyPolicy}></Route>
      <Route element={<Regulations />} path={ROUTES.regulation}></Route>
      <Route element={<Return />} path={ROUTES.return}></Route>
      {/* <Route element={<Cookie/>} path='/polityka-cookie'></Route> */}

      <Route element={<Page404 />} path="*" />

    </Routes>
  )
}