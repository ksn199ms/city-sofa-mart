import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/NavBar";

const AboutUs = () => {
    return (
        <>
        <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-800 mt-20">
        
  
        {/* Full-Width Image Section with Text Overlay */}
        <div className="relative w-full h-[80vh] md:h-[95vh]">
          <img
            src="https://images.unsplash.com/photo-1573866926487-a1865558a9cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern Sofa"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
            <div className="text-center text-white max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Welcome to City Sofa Mart!
              </h2>
              <p className="text-lg md:text-xl  mb-4">
            Founded in 2022, City Sofa Mart has swiftly become a renowned name in the furniture industry, serving as a distinguished wholesaler and trader. We take pride in offering an extensive and diverse range of high-quality products, including Wooden Sofa Legs, Plastic Films, Recliner Mechanisms, 3 Corner Legs, Kulfi Legs Cross, Sofa Arm Handles, Cup Holders, and more.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            At City Sofa Mart, our mission is to provide our customers with superior products that blend durability, style, and affordability. We understand the crucial role that reliable and aesthetically pleasing furniture accessories play in enhancing the overall appeal and functionality of your furniture. This is why we meticulously source our products to ensure they meet the highest standards of quality and craftsmanship.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Our dedication to customer satisfaction is reflected in our commitment to continuous improvement and innovation. We actively seek feedback from our clients to refine our product offerings and services. By fostering strong relationships with our suppliers and staying abreast of industry trends, we ensure that our customers receive the latest and best products available in the market.
          </p> 
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      
      </>
    );
  };
  
  export default AboutUs;
  



  


/*
<p className="text-gray-700 leading-relaxed mb-4">
            Founded in 2022, City Sofa Mart has swiftly become a renowned name in the furniture industry, serving as a distinguished wholesaler and trader. We take pride in offering an extensive and diverse range of high-quality products, including Wooden Sofa Legs, Plastic Films, Recliner Mechanisms, 3 Corner Legs, Kulfi Legs Cross, Sofa Arm Handles, Cup Holders, and more.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At City Sofa Mart, our mission is to provide our customers with superior products that blend durability, style, and affordability. We understand the crucial role that reliable and aesthetically pleasing furniture accessories play in enhancing the overall appeal and functionality of your furniture. This is why we meticulously source our products to ensure they meet the highest standards of quality and craftsmanship.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our dedication to customer satisfaction is reflected in our commitment to continuous improvement and innovation. We actively seek feedback from our clients to refine our product offerings and services. By fostering strong relationships with our suppliers and staying abreast of industry trends, we ensure that our customers receive the latest and best products available in the market.
          </p> 
 */