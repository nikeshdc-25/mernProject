import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage, { dataLoader } from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { store } from "./store.js";
import {Provider} from 'react-redux'

// const router = createBrowserRouter([
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} loader={dataLoader}/>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
<RouterProvider router={router} />
</Provider>
);
