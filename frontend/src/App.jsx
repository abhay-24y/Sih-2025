import Header from "./components/Header";
import { Outlet } from "react-router";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A1120]">
      <main className="flex-1">
        <Outlet />
      </main>
      <Copyright />
    </div>
  );
};

export default App;
