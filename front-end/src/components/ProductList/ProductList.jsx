/* eslint-disable react/prop-types */
import ProductItem from "../ProductItem/ProductItem";
import { sofaLegsList } from "../../assets/asset";

const ProductList = ({ selectedFilters }) => {
  const filteredProducts = sofaLegsList.filter((product) => {
    // Normalize all filter values
    const selectedCategory = selectedFilters["sofa-legs"]
      ?.toLowerCase()
      .replace(/\s+/g, "-") // Match subCategory format (Stainless-Steel-leg)
      .trim();

    const selectedElastic = selectedFilters["Elastics"]?.toLowerCase().trim();
    const selectedSize = selectedFilters["Size"]
      ?.toLowerCase()
      .replace(/\s+/g, "") // Remove spaces (match "2Inch" format)
      .trim();

    // 1. Sub-Category Filter
    if (
      selectedCategory !== "all" &&
      product.subCategory?.toLowerCase().trim() !== selectedCategory
    ) {
      return false;
    }

    // 2. Elastic Filter (if applicable)
    if (
      selectedElastic &&
      selectedElastic !== "all" &&
      product.elastic?.toLowerCase().trim() !== selectedElastic
    ) {
      return false;
    }

    // 3. Size Filter (Updated)
    if (selectedSize !== "all") {
      // Check if product has ANY size matching the filter
      const hasSizeMatch = product.sizes?.some((size) => {
        const normalizedSize = size.toLowerCase().replace(/\s+/g, "");
        return normalizedSize === selectedSize;
      });

      if (!hasSizeMatch) return false;
    }

    return true;
  });

  // Price sorting remains unchanged
  if (selectedFilters["Price"] === "Low-High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedFilters["Price"] === "High-Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductItem key={product._id} id={product._id} {...product} />
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-3">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;