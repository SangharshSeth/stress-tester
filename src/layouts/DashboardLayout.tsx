import { Outlet } from "react-router";
import LeftNav from "../components/LeftNav.tsx";

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen" style={{fontFamily: "Inter Variable"}}>
            <LeftNav />
            <main className="flex-1 p-6 overflow-auto ml-64">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;