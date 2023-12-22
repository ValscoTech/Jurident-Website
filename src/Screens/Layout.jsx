import { Footer } from "../Components/Homepage";
import Navbar from "../Components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
