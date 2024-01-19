import { Link } from "react-router-dom";
import { GrTwitter, GrFacebook, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white font-gray">
      <div className="mx-6 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-96 mt-2">
          <div className="p-2 mx-2">
            <h1 className="text-md font-bold">JURIDENT</h1>
            <div className="text-sm flex flex-col gap-1">
              <Link to="/">Our Services</Link>
              <Link to="/blogs">Blog</Link>
              <Link to="/">Terms and Conditions</Link>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
              <Link to="/">Support</Link>
              <Link to="/Contact">Contact us</Link>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-md font-bold">Social Media</h3>
            <div className="mt-1 flex">
              <GrTwitter size={18} className="mr-1" />
              <GrFacebook size={18} className="mr-1" />
              <GrInstagram size={18} />
            </div>
            <h3 className="mt-2 text-md">Phone</h3>
            <div className="text-sm font-medium">
              <h1 className="mt-1">044-27390135</h1>
              <h1 className="mt-1">9877870012</h1>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-md font-bold">E-Mail</h3>
            <a href="mailto:lorem@gmail.com" className="text-sm">
              lorem@gmail.com
            </a>
            <h3 className="mt-2 text-md font-bold">Support</h3>
            <a href="mailto:Support.lorem@gmail.com" className="text-sm">
              support@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-2 border border-white-3600"></div>
        <div className="text-lg flex p-3 justify-between">
          <h3 className="font-light">Copyrights</h3>
          <h3>India</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
