import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import ItemPage from "./ItemPage/ItemPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import ModalContent from "./ModalContent/ModalContent";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="App">
                <ModalContent />
                <NavBar />
                <Header />
                <MainPage />
                <Footer />
            </div>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: "/ItemPage",
        element: <ItemPage />,
    },
]);

function App() {
    // const [count, setCount] = useState(0);
    return <RouterProvider router={router} />;
}

export default App;
