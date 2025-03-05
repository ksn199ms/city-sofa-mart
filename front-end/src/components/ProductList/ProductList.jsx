import ProductItem from '../ProductItem/ProductItem';
import ProductMore from '../UI/Buttons/ProductMore/ProductMore';
import { sofaLegsList } from '../../assets/asset';

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sofaLegsList.map((product) => (
        <ProductItem
          key={product._id}
          id={product._id}
          name={product.name}
          price={product.price}
          description={product.description}
          images={product.images}
        />
      ))}
    </div>
  );
};


export default ProductList;



