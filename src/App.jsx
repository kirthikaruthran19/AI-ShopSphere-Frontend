import AppRoutes from "./routes/AppRoutes";
import ChatWidget from "./chatbot/ChatWidget/ChatWidget";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
    return (
        <>
            <ScrollToTop />

            <AppRoutes />

            <Footer />

            <ChatWidget />
        </>
    );
}

export default App;
