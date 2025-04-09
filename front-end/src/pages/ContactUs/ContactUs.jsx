import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/NavBar"


const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 mt-20">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
        {/* Contact Info */}
        <div className="md:w-1/2 pr-6 border-r border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Get In Touch With Us</h2>
          <p className="text-gray-600 mt-2 text-sm">
            For more information about our products & services, please feel free to drop us an email. Our staff is always ready to help you out. Do not hesitate!
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-yellow-500 text-lg" />
              <p className="text-gray-800 font-medium">+91 9999999999</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-500 text-lg" />
              <p className="text-gray-800 font-medium">demo@gmail.com</p>
            </div>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-yellow-500 text-lg" />
              <p className="text-gray-800 font-medium">
                No.988, Ground Floor, N/A 1st Stage, <br /> 2nd Block Main Road, Urban, <br /> Bengaluru-560043, Karnataka, India
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <form className="space-y-4">
            <div>
              <label className="text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Subject</label>
              <input
                type="text"
                placeholder="This is optional"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                placeholder="Hi! I'd like to ask about..."
                className="w-full mt-1 p-3 border rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <button className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-md hover:bg-yellow-600 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ContactUs