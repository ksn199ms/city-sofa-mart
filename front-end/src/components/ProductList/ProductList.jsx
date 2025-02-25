import ProductItem from '../ProductItem/ProductItem';
import ProductMore from '../UI/Buttons/ProductMore/ProductMore';

const ProductList = () => {
  return (
    <div className="container mx-auto p-4 ">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

      <ProductMore />

    </div>
  );
};

export default ProductList;



