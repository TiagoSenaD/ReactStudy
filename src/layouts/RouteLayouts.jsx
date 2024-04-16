import { Outlet } from "react-router-dom";
import Header from "../components/Header/index";


export default function RootLayouts() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>

  );
}