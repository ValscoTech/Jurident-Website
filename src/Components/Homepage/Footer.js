import { Link } from "react-router-dom";
import { GrTwitter, GrFacebook, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-white-900font-gray">
      <div className=" mx-auto py-12">
        <hr className="border-t border-gray-600" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 mx-2">
            <h1 className="text-4xl font-bold mb-6">JURIDENT</h1>
            <div className="text-xl flex flex-col gap-4">
              <Link to="/">Our Services</Link>

              <Link to="/blogs">Blog</Link>

              <Link to="/">Terms and Conditions</Link>

              <Link to="/PrivacyPolicy">Privacy Policy</Link>

              <Link to="/">Support</Link>

              <Link to="/Contact">Contact us</Link>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold">Social Media</h3>
            <div className="mt-4 flex">
              <GrTwitter size={25} className="mr-4" />
              <GrFacebook size={25} className="mr-4" />
              <GrInstagram size={25} />
            </div>
            <h3 className="mt-6 text-2xl">Phone</h3>
            <div className="text-xl font-medium">
              <h1 className="mt-4">044-27390135</h1>
              <h1 className="mt-2">9877870012</h1>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold">E-Mail</h3>
            <a href="mailto:lorem@gmail.com" className="text-xl">
              lorem@gmail.com
            </a>
            <h3 className="mt-6 text-2xl font-bold">Support</h3>
            <a href="mailto:Support.lorem@gmail.com" className="text-xl">
              support.lorem@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-8 border border-gray-600"></div>
        <div className="text-2xl mt-6 flex p-3 justify-between">
          <h3 className="font-light">Copyrights</h3>
          <h3>India</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
