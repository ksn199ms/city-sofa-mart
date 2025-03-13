import { useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FilterComponent from "../../components/Filter/Filter";
import ProductGrid from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";

import "../../index.css";

const Home = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    "Sofa Legs": "All",
    "Elastics": "All",
    "Price": "All Price",
  });

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,  // Updates only the selected category
    }));
  };

  return (
    <>
      <NavBar />
      <ExploreMenu />

      {/* Layout with Filter & Product Grid */}
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Sidebar Filter */}
        <FilterComponent selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />

        {/* Product Grid (Filtered) */}
        <div className="w-full md:w-3/4">
          <ProductGrid selectedFilters={selectedFilters} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
