import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import Img1 from '../../assets/product/p-1.jpg';
import Img2 from '../../assets/product/p-2.jpg';
import Img3 from '../../assets/product/p-3.jpg';
import Img4 from '../../assets/product/p-4.jpg';
import Img5 from '../../assets/product/p-5.jpg';
// import Img6 from '../../assets/product/p-6.jpg';
import Img7 from '../../assets/product/p-7.jpg';
// import Img8 from '../../assets/product/p-8.jpg';
import Img9 from '../../assets/product/p-9.jpg';

const productsData = [
  {
    id: 1,
    title: 'Product Test',
    image: Img1,
    price: 120,
    aosDelay: 0
  },
  {
    id: 2,
    title: 'Product Test',
    image: Img2,
    price: 430,
    aosDelay: 0
  },
  {
    id: 3,
    title: 'Product Test',
    image: Img3,
    price: 330,
    aosDelay: 0
  },
  {
    id: 4,
    title: 'Product Test',
    image: Img4,
    price: 1120,
    aosDelay: 0
  },
  {
    id: 5,
    title: 'Product Test',
    image: Img5,
    price: 540,
    aosDelay: 0
  },
  {
    id: 6,
    title: 'Product Test',
    image: Img2,
    price: 280,
    aosDelay: 0
  },
  {
    id: 7,
    title: 'Product Test',
    image: Img7,
    price: 120,
    aosDelay: 0
  },
  {
    id: 9,
    title: 'Product Test',
    image: Img9,
    price: 990,
    aosDelay: 0
  },
]

const Products = () => {
  return (
    <div className='py-12'>
      <div className="container">
        <div className="grid">
          {/* Header Section */}
          <Heading
            title="Best Seller Products"
            subtitle="Explore Our Products"
          />
          {/* Products Section */}
          <ProductCard productsData={productsData} />
        </div>
      </div>
    </div>
  )
}

export default Products