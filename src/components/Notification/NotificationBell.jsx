import {
    useEffect,
    useRef,
    useState,
} from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FaBell } from "react-icons/fa";

import { useNotification } from "../../contexts/NotificationContext";

import NotificationDropdown from "./NotificationDropdown";

import "./NotificationBell.css";

function NotificationBell() {

    const {
        unreadCount,
    } = useNotification();

    const [showDropdown, setShowDropdown] =
        useState(false);

    const [ringBell, setRingBell] =
        useState(false);

    const previousUnread =
        useRef(unreadCount);

    const bellRef = useRef(null);

    useEffect(() => {

        if (
            unreadCount >
            previousUnread.current
        ) {

            setRingBell(true);

            const timer = setTimeout(() => {

                setRingBell(false);

            }, 1200);

            previousUnread.current =
                unreadCount;

            return () => clearTimeout(timer);

        }

        previousUnread.current =
            unreadCount;

    }, [unreadCount]);

    useEffect(() => {

        const handleOutsideClick = (event) => {

            if (
                bellRef.current &&
                !bellRef.current.contains(event.target)
            ) {

                setShowDropdown(false);

            }

        };

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );

    }, []);

    const toggleDropdown = () => {

        setShowDropdown(prev => !prev);

    };

    return (

        <div
            className="notification-bell"
            ref={bellRef}
        >

            <motion.button

                whileHover={{
                    scale: 1.05,
                    y: -2,
                }}

                whileTap={{
                    scale: 0.95,
                }}

                className={`bell-btn ${
                    ringBell
                        ? "ring"
                        : ""
                }`}

                onClick={toggleDropdown}

                aria-label="Notifications"

            >

                <FaBell />

                {
                    unreadCount > 0 && (

                        <motion.span

                            key={unreadCount}

                            initial={{
                                scale: 0,
                            }}

                            animate={{
                                scale: 1,
                            }}

                            exit={{
                                scale: 0,
                            }}

                            transition={{
                                duration: 0.25,
                            }}

                            className="notification-badge"

                        >

                            <span className="pulse"></span>

                            {unreadCount > 99
                                ? "99+"
                                : unreadCount}

                        </motion.span>

                    )
                }

            </motion.button>

            <AnimatePresence>

                {
                    showDropdown && (

                        <motion.div

                            initial={{
                                opacity: 0,
                                y: -20,
                                scale: .95,
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}

                            exit={{
                                opacity: 0,
                                y: -15,
                                scale: .95,
                            }}

                            transition={{
                                duration: .25,
                                ease: "easeOut",
                            }}

                        >

                            <NotificationDropdown
                                closeDropdown={() =>
                                    setShowDropdown(false)
                                }
                            />

                        </motion.div>

                    )
                }

            </AnimatePresence>

        </div>

    );

}

export default NotificationBell;