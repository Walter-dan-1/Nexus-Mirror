import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

export default function MainLayout() {
  return (
    <div className="h-screen flex">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Header />

        <Dashboard />

      </div>

    </div>
  );
}