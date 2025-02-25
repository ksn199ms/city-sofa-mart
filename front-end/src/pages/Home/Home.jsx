import NavBar from '../../components/NavBar/NavBar'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FilterComponent from '../../components/Filter/Filter'
import ProductGrid from '../../components/ProductList/ProductList'
import Footer from '../../components/Footer/Footer'

import '../../index.css';

const Home = () => {
    return (
        <>
          <NavBar />
          <ExploreMenu />
    
          {/* Layout with Filter & Product Grid */}
          <div className="flex flex-col md:flex-row gap-6 p-4">
            {/* Sidebar Filter */}
            <FilterComponent />
    
            {/* Product Grid */}
            <div className="w-full md:w-3/4">
              <ProductGrid />
            </div>
          </div>
    
          <Footer />
        </>
      
      )
}

export default Home