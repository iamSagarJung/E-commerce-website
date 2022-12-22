import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Header/Error";
import Loading from "./components/Loading";
const LoginForm = lazy(() => import("./components/authentication/LoginForm"));
const Navbar = lazy(() => import("./components/Header/Navbar"));
const Cart = lazy(() => import("./pages/Cart"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const SingleProduct = lazy(() => import("./pages/ProductDetails"));
const Footers = lazy(() => import("./components/Header/Footer"));


const App = () => {
  return (
    <>
      {/* <LoginForm/> */}
      <Navbar />
      {/* <Home/> */}
      <Routes>
        <Route
          path="/home"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/product"
          element={
            <Suspense fallback={<Loading />}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<Loading />}>
              <Cart/>
            </Suspense>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Suspense fallback={<Loading />}>
              <SingleProduct />
            </Suspense>
          }
        />

         <Route
          path="/*"
          element={
            <Suspense fallback={<Loading />}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
      <Suspense fallback={<Loading />}>
        <Footers />
      </Suspense>
    </>
  );
};

export default App;
