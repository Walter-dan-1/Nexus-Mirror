import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import TitleBar from "../components/TitleBar";

export default function MainLayout() {

    return (

        <div className="h-screen flex flex-col">

            <TitleBar/>

            <div className="flex flex-1">

                <Sidebar/>

                <Dashboard/>

            </div>

        </div>

    );

}