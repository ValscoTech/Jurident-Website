import { Link } from "react-router-dom";
import { GrTwitter, GrFacebook, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-white-900 font-gray">
      <div className="container mx-auto py-12">
        <hr className="border-t border-gray-600" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-6">JURIDENT</h1>
            <ul className="text-xl">
              <li>
                <Link to="/">Our Services</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Support</Link>
              </li>
              <li>
                <Link to="/Contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="p-6">
            <h3 className="text-2xl">Social Media</h3>
            <div className="mt-4 flex">
              <GrTwitter size={25} className="mr-4" />
              <GrFacebook size={25} className="mr-4" />
              <GrInstagram size={25} />
            </div>
            <h3 className="mt-6 text-2xl">Phone</h3>
            <ul className="text-xl font-medium">
              <li className="mt-4">044-27390135</li>
              <li className="mt-2">9877870012</li>
            </ul>
          </div>
          <div className="p-6">
            <h3 className="text-2xl">E-Mail</h3>
            <a href="mailto:lorem@gmail.com" className="text-xl">
              lorem@gmail.com
            </a>
            <h3 className="mt-6 text-2xl">Support</h3>
            <a href="mailto:Support.lorem@gmail.com" className="text-xl">
              support.lorem@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-8 border border-gray-600"></div>
        <div className="text-2xl mt-6 flex justify-between">
          <h3 className="font-light">Copyrights</h3>
          <h3>India</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
