
import { Outlet } from "react-router";
import LeftNav from "../components/LeftNav.tsx";

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen" style={{fontFamily: "Inter Variable"}}>
            <div className="w-64 flex-shrink-0">
                <LeftNav />
            </div>
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;