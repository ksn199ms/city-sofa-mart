import { useState, useEffect, useRef } from "react";
import { FaSlidersH } from "react-icons/fa";

const FilterComponent = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isSofaLegsOpen, setIsSofaLegsOpen] = useState(false);
  const [isElasticOpen, setIsElasticOpen] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        window.innerWidth < 768 &&
        isFilterOpen &&
        filterRef.current &&
        !filterRef.current.contains(e.target)
      ) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isFilterOpen]);

  return (
    <div 
      ref={filterRef} 
      className={`transition-all bg-white shadow-lg rounded-lg p-4 
                  ${isFilterOpen ? "w-full md:w-1/4" : "w-16"}`}>
      
      {/* Header with Toggle Button */}
      <div className="flex justify-between items-center">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsFilterOpen(!isFilterOpen);
          }} 
          className="text-lg font-bold flex items-center gap-2">
          <FaSlidersH className="cursor-pointer" /> 
          {isFilterOpen && <span>Filter</span>}
        </button>
      </div>

      {/* Filters (Only Visible if Open) */}
      {isFilterOpen && (
        <div className="mt-4 space-y-4 text-sm">
          <div>
            <h3 className="font-semibold text-gray-700">CATEGORIES</h3>
            <div>
              <button
                className="font-medium text-blue-600 mt-2"
                onClick={() => setIsSofaLegsOpen(!isSofaLegsOpen)}>
                Sofa Legs {isSofaLegsOpen ? "▼" : "▶"}
              </button>
              {isSofaLegsOpen && (
                <div className="ml-4 mt-2">
                  {["All", "Stainless Steel leg", "PVC leg", "Wooden leg"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 mt-2">
                      <input type="checkbox" className="w-4 h-4" /> {cat}
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                className="font-medium text-blue-600 mt-2"
                onClick={() => setIsElasticOpen(!isElasticOpen)}>
                Elastic {isElasticOpen ? "▼" : "▶"}
              </button>
              {isElasticOpen && (
                <div className="ml-4 mt-2">
                  {["Elastic1", "Elastic2", "Elastic3"].map((elastic) => (
                    <label key={elastic} className="flex items-center gap-2 mt-2">
                      <input type="checkbox" className="w-4 h-4" /> {elastic}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Price */}
          <div>
            <h3 className="font-semibold text-gray-700">PRICE</h3>
            {["All Price", "Low-High", "High-Low"].map((price) => (
              <label key={price} className="flex items-center gap-2 mt-2">
                <input type="checkbox" className="w-4 h-4" /> {price}
              </label>
            ))}
          </div>

          {/* Size */}
          <div>
            <h3 className="font-semibold text-gray-700">SIZE</h3>
            {["All Size", "2-4 inch", "5-6 inch", "above 6 inch"].map((size) => (
              <label key={size} className="flex items-center gap-2 mt-2">
                <input type="checkbox" className="w-4 h-4" /> {size}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
