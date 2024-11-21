import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <header className="sticky top-0 z-50 ">
          <Topbar />
        </header>
        <Sidebar />
      </div>
    </>
  );
}
