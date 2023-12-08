import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootState } from "./Redux/store";
import { RegisterComponent } from "./RegisterComponent/RegisterComponent"
import './App.css'
import { LogIn } from './LogIn/LogIn';
import { AdminPanel } from './Panel/AdminPanel';
import { AddNewProduct } from './Panel/AddNewProduct/AddNewProduct';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache
} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RemoveProduct } from './Panel/RemoveProduct/RemoveProduct';
import { EditProduct } from './Panel/EditProduct/EditProduct';
import { ProtectedWrapper } from './ProtectedWrapper/ProtectedWrapper';
import { Products } from './Products/Products';
import { ProductCard } from './Products/ProductCard/ProductCard';
import { Footer } from './Footer/Footer';
import {Navigation} from './Navigation/Navigation';

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
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route index element={<LogIn />} />
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
              <Route path="/products/:id" element={<ProductCard />} />
            </Route>

            <Route element={<RegisterComponent />} path="/register" />
            <Route element={<div>404</div>} path="*" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
      
    </>
  )
}

export default App
