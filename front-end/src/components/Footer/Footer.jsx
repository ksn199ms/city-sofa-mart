import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 mt-10">
      {/* Separation Line */}
      <div className="border-t border-gray-300 mb-6"></div>

      <div className="container mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo and Description */}
          <div>
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="City Sofa Mart" className="h-10" />
              ``
            </div>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Founded in 2022, City Sofa Mart has swiftly become a renowned name in the
              furniture industry, serving as a distinguished wholesaler and trader.
            </p>
          </div>

          {/* Middle Section - Links */}
          <div>
            <h3 className="text-gray-400 font-semibold uppercase">Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="text-black hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-black hover:text-orange-500">Shop</a></li>
              <li><a href="#" className="text-black hover:text-orange-500">About</a></li>
              <li><a href="#" className="text-black hover:text-orange-500">Contact</a></li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h3 className="text-gray-400 font-semibold uppercase">Contact Info</h3>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-orange-500" />
                <span className="text-black">+91 9999999999</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-500" />
                <span className="text-black">gmail@.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <span className="text-black">
                  No.988, Ground Floor, N/A 1st Stage, 2nd Block Main Road, Urban, <br />
                  Bengaluru - 560043, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
