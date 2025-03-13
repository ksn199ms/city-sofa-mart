/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { FaSlidersH } from "react-icons/fa";

const FilterComponent = ({ selectedFilters, onFilterChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isSofaLegsOpen, setIsSofaLegsOpen] = useState(true); // Default open
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

  useEffect(() => {
    // Initialize sofa-legs filter if it doesn't exist
    if (!selectedFilters["sofa-legs"]) {
      onFilterChange("sofa-legs", "All");
    }

    if (!selectedFilters["Size"]) {
      onFilterChange("Size", "All");
    }
  }, []);

  return (
    <div
      ref={filterRef}
      className={`transition-all bg-white shadow-lg rounded-lg p-4 ${
        isFilterOpen ? "w-full md:w-1/4" : "w-16"
      }`}
    >
      {/* Header with Toggle Button */}
      <div className="flex justify-between items-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFilterOpen(!isFilterOpen);
          }}
          className="text-lg font-bold flex items-center gap-2"
        >
          <FaSlidersH className="cursor-pointer" />
          {isFilterOpen && <span>Filter</span>}
        </button>
      </div>

      {/* Filters (Only Visible if Open) */}
      {isFilterOpen && (
        <div className="mt-4 space-y-4 text-sm">
          {/* CATEGORIES */}
          <div>
            <h3 className="font-semibold text-gray-700">CATEGORIES</h3>

            {/* Sofa Legs (Default Open) */}
            <div>
              <button
                className="font-medium text-blue-600 mt-2"
                onClick={() => setIsSofaLegsOpen(!isSofaLegsOpen)}
              >
                sofa-legs {isSofaLegsOpen ? "▼" : "▶"}
              </button>
              {isSofaLegsOpen && (
                <div className="ml-4 mt-2">
                  {["All", "Stainless Steel leg", "PVC leg", "Wooden leg"].map(
                    (cat) => (
                      <label key={cat} className="flex items-center gap-2 mt-2">
                        <input
                          type="checkbox"
                          name="sofa-legs"
                          className="w-4 h-4"
                          checked={selectedFilters["sofa-legs"] === cat}
                          onChange={() => onFilterChange("sofa-legs", cat)}
                        />
                        {cat}
                      </label>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Elastics */}
            <div>
              <button
                className="font-medium text-blue-600 mt-2"
                onClick={() => setIsElasticOpen(!isElasticOpen)}
              >
                Elastics {isElasticOpen ? "▼" : "▶"}
              </button>
              {isElasticOpen && (
                <div className="ml-4 mt-2">
                  {["All", "Elastic1", "Elastic2", "Elastic3"].map(
                    (elastic) => (
                      <label
                        key={elastic}
                        className="flex items-center gap-2 mt-2"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          checked={selectedFilters["Elastics"] === elastic}
                          onChange={() => onFilterChange("Elastics", elastic)}
                        />{" "}
                        {elastic}
                      </label>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* SIZE FILTER */}
          <div>
            <h3 className="font-semibold text-gray-700">SIZE</h3>
            <div className="ml-4 mt-2 space-y-2">
              {["All", "2 Inch", "4 Inch", "6 Inch"].map((size) => (
                <label key={size} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedFilters["Size"] === size}
                    onChange={() => onFilterChange("Size", size)}
                  />{" "}
                  {size}
                </label>
              ))}
            </div>
          </div>

          {/* PRICE FILTER */}
          <div>
            <h3 className="font-semibold text-gray-700">PRICE</h3>
            <div className="ml-4 mt-2 space-y-2">
              {["All Price", "Low-High", "High-Low"].map((price) => (
                <label key={price} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedFilters["Price"] === price}
                    onChange={() => onFilterChange("Price", price)}
                  />{" "}
                  {price}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
