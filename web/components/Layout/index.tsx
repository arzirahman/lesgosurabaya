import Alert from "../Alert";
import Loading from "../Loading";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <main className="flex flex-col font-montserrat">
            <Loading />
            <Alert />
            <Navbar />
            <Outlet />
        </main>
    )
}