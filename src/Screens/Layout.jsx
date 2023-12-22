import { Footer } from "../Components/Homepage";
import Navbar from "../Components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout" style={{ height: "100vh" }}>
      
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
