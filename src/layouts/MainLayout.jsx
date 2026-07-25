import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import ChatWidget from "../chatbot/ChatWidget/ChatWidget";

function MainLayout() {

    return (
        <>

            <Navbar />

            <Outlet />

            <ChatWidget />

            {/* Footer Next */}

        </>
    );

}

export default MainLayout;