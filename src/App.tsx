import { Suspense } from 'react'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
  QueryCache
} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Footer } from './Footer/Footer';
import { Navigation } from './Navigation/Navigation';
import { UserProductsContextProvider } from './Context/UserProductsContextProvider';
import { RoutesElement } from './RoutesElement';
import { ProductsContextProvider } from './Context/ProductsContextProvider';
// import { HelmetProvider } from 'react-helmet-async';
// const helmetContext = {};
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
      {/* <HelmetProvider context={helmetContext}> */}
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV === "development" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
          <UserProductsContextProvider>
            <ProductsContextProvider>
              <Suspense>
                <BrowserRouter>
                  <Navigation />
                  <RoutesElement />
                  <Footer />
                </BrowserRouter>
              </Suspense>
            </ProductsContextProvider>
          </UserProductsContextProvider>
        </QueryClientProvider>
      {/* </HelmetProvider> */}
    </>
  )
}

export default App
