import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import OrderDetails from "../pages/Orders/OrderDetails";
import OrderTracking from "../pages/OrderTracking/OrderTracking";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Notifications from "../pages/Notifications/Notifications";

function AppRoutes() {

    return (

        

            <Routes>

                <Route element={<MainLayout />}>

                    {/* Home */}
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    {/* Shop */}
                    <Route
                        path="/shop"
                        element={<Shop />}
                    />

                    {/* Product Details */}
                    <Route
                        path="/shop/:slug"
                        element={<ProductDetails />}
                    />

                    {/* Cart */}
                    <Route
                        path="/cart"
                        element={
                            <ProtectedRoute>
                                <Cart />
                            </ProtectedRoute>
                        }
                    />

                    {/* Wishlist */}
                    <Route
                        path="/wishlist"
                        element={
                            <ProtectedRoute>
                                <Wishlist />
                            </ProtectedRoute>
                        }
                    />

                    {/* Checkout */}
                    <Route
                        path="/checkout"
                        element={
                            <ProtectedRoute>
                                <Checkout />
                            </ProtectedRoute>
                        }
                    />

                    {/* Orders */}
                    <Route
                        path="/orders"
                        element={
                            <ProtectedRoute>
                                <Orders />
                            </ProtectedRoute>
                        }
                    />

                    {/* Order Details */}
                    <Route
                        path="/orders/:id"
                        element={
                            <ProtectedRoute>
                                <OrderDetails />
                            </ProtectedRoute>
                        }
                    />

                    {/* Order Tracking */}
                    <Route
                        path="/orders/:id/tracking"
                        element={
                            <ProtectedRoute>
                                <OrderTracking />
                            </ProtectedRoute>
                        }
                    />

                    {/* Profile */}
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />

                    {/* Notifications */}
                    <Route
                        path="/notifications"
                        element={
                            <ProtectedRoute>
                                <Notifications />
                            </ProtectedRoute>
                        }
                    />

                </Route>

                {/* Authentication */}
                <Route element={<AuthLayout />}>

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/register"
                        element={<Register />}
                    />

                </Route>

                {/* 404 */}
                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        

    );

}

export default AppRoutes;