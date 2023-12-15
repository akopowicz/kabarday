import React from 'react';
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

const RegisterComponent = React.lazy(() => import("./RegisterComponent/RegisterComponent"));
import { LogIn } from './LogIn/LogIn';
// import { AdminPanel } from './Panel/AdminPanel';
const AdminPanel= React.lazy(() => import("./Panel/AdminPanel"));
// import { AddNewProduct } from './Panel/AddNewProduct/AddNewProduct';
const AddNewProduct = React.lazy(() => import("./Panel/AddNewProduct/AddNewProduct"));
import {
  QueryClient,
  QueryClientProvider,
  QueryCache
} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { RemoveProduct } from './Panel/RemoveProduct/RemoveProduct';
const RemoveProduct = React.lazy(() => import("./Panel/RemoveProduct/RemoveProduct"));
// import { EditProduct } from './Panel/EditProduct/EditProduct';
const EditProduct = React.lazy(() => import("./Panel/EditProduct/EditProduct"));
import { ProtectedWrapper } from './ProtectedWrapper/ProtectedWrapper';
// import { Products } from './Products/Products';
const Products = React.lazy(() => import('./Products/Products'));
// import { ProductCard } from './Products/ProductCard/ProductCard';
const ProductCard = React.lazy(() => import('./Products/ProductCard/ProductCard'));
import { Footer } from './Footer/Footer';
import { Navigation } from './Navigation/Navigation';
import { HomePage } from './HomePage/HomePage';
import { UserProductsContextProvider } from './Context/UserProductsContextProvider';
import { ProductType } from './Products/ProductType/ProductType';
const About = React.lazy(() => import('./About/About'));
const Order = React.lazy(() => import("./Order/Order"));


// import { Contact } from './Contact/Contact';
const Contact = React.lazy(() => import("./Contact/Contact"));

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      staleTime: 60_000,
    }
  }
})


function App() {


  return (
    <>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools position="top-right" initialIsOpen={false} />
        )}
        <UserProductsContextProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
              <Navigation />
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
                <Route element={<div>404</div>} path="*" />
              </Routes>
              <Footer />
            </BrowserRouter>
          </Suspense>

        </UserProductsContextProvider>
      </QueryClientProvider>

    </>
  )
}

export default App
