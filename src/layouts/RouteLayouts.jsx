import { Outlet } from "react-router-dom";

//componentes
import Header from "../components/Header/index";
import Footer from "../components/Footer/Footer";

export default function RootLayouts() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>

  );
}