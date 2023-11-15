import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
