import { useState, useEffect, useRef } from "react";
import {
    Link,
    NavLink,
    useNavigate,
} from "react-router-dom";

import {
    motion,
    AnimatePresence,
} from "framer-motion";

import {
    FiMenu,
    FiX,
    FiShoppingCart,
    FiHeart,
    FiSearch,
    FiUser,
    FiLogOut,
    FiChevronDown,
} from "react-icons/fi";

import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { useAuth } from "../../contexts/AuthContext";

import NotificationBell from "../Notification/NotificationBell";

import "./Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const profileRef = useRef(null);

    const [mobileMenu, setMobileMenu] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const [profileMenu, setProfileMenu] = useState(false);

    const [showSearch, setShowSearch] = useState(false);

    const [search, setSearch] = useState("");

    const { totalItems } = useCart();

    const { wishlistCount } = useWishlist();

    const {
        user,
        logout,
        isAuthenticated,
    } = useAuth();

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 50);

        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );

    }, []);

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {

                setProfileMenu(false);

            }

        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

    }, []);

    const handleLogout = () => {

        const confirmLogout = window.confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmLogout) return;

        logout();

        navigate("/login");

    };

    return (

        <nav
            className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""
                }`}
        >

            <div className="container-custom navbar-wrapper">

                {/* Logo */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="navbar-logo"
                >

                    <Link to="/">

                        AI <span>ShopSphere</span>

                    </Link>

                </motion.div>

                {/* Navigation */}

                <ul
                    className={`navbar-links ${mobileMenu ? "active" : ""
                        }`}
                >

                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/shop">
                            Shop
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/wishlist">
                            Wishlist
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/orders">
                            Orders
                        </NavLink>
                    </li>

                </ul>

                {/* Right */}

                <div className="navbar-icons">

                    <button
                        className="icon-btn"
                        onClick={() => setShowSearch(!showSearch)}
                    >

                        <FiSearch />

                    </button>
                    {
                        showSearch && (

                            <form
                                className="navbar-search"
                                onSubmit={(e) => {

                                    e.preventDefault();

                                    if (!search.trim()) return;

                                    navigate(
                                        `/shop?search=${encodeURIComponent(search)}`
                                    );

                                    setShowSearch(false);

                                }}
                            >

                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                />

                            </form>

                        )
                    }

                    {isAuthenticated && (

                        <NotificationBell />

                    )}

                    {/* Wishlist */}

                    <Link
                        to="/wishlist"
                        className="icon-btn wishlist-icon"
                    >

                        <FiHeart />

                        {
                            wishlistCount > 0 && (

                                <span className="wishlist-badge">

                                    {wishlistCount}

                                </span>

                            )
                        }

                    </Link>

                    {/* Cart */}

                    <Link
                        to="/cart"
                        className="icon-btn cart-icon"
                    >

                        <FiShoppingCart />

                        {
                            totalItems > 0 && (

                                <span className="cart-badge">

                                    {totalItems}

                                </span>

                            )
                        }

                    </Link>

                    {/* Authentication */}

                    {
                        isAuthenticated ? (

                            <div
                                className="profile-wrapper"
                                ref={profileRef}
                            >

                                <button
                                    className="profile-btn"
                                    onClick={() =>
                                        setProfileMenu(!profileMenu)
                                    }
                                >

                                    <div className="avatar">

                                        {(
                                            user?.first_name ||
                                            user?.username ||
                                            "U"
                                        )
                                            .charAt(0)
                                            .toUpperCase()}

                                    </div>

                                    <span className="profile-name">

                                        {
                                            user?.first_name ||
                                            user?.username
                                        }

                                    </span>

                                    <FiChevronDown />

                                </button>

                                <AnimatePresence>

                                    {
                                        profileMenu && (

                                            <motion.div
                                                className="profile-dropdown"
                                                initial={{
                                                    opacity: 0,
                                                    y: -10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -10,
                                                }}
                                                transition={{
                                                    duration: .2,
                                                }}
                                            >

                                                <Link
                                                    to="/profile"
                                                    onClick={() =>
                                                        setProfileMenu(false)
                                                    }
                                                >

                                                    <FiUser />

                                                    My Profile

                                                </Link>

                                                <button
                                                    onClick={handleLogout}
                                                >

                                                    <FiLogOut />

                                                    Logout

                                                </button>

                                            </motion.div>

                                        )
                                    }

                                </AnimatePresence>

                            </div>

                        ) : (

                            <Link
                                to="/login"
                                className="login-btn"
                            >

                                Login

                            </Link>

                        )
                    }

                    {/* Mobile */}

                    <button
                        className="mobile-btn"
                        onClick={() =>
                            setMobileMenu(!mobileMenu)
                        }
                    >

                        {
                            mobileMenu ? (
                                <FiX />
                            ) : (
                                <FiMenu />
                            )
                        }

                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;