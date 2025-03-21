import React from 'react';
import { CategoryList } from '../assets/home/mockData';
import image from '../assets/home/images/img1.jpg';
import InfoSection from '../components/InfoSection';
import CategoriesSection from '../components/CategoriesSection';
import ProductList from '../components/ProductList';
import Shop from './Shop';
import { Link ,useNavigate} from 'react-router-dom';


const Home = ({ isModalOpen }) => {
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    // Convert category to lowercase and handle any special formatting
    const categoryParam = category.toLowerCase().replace(/\s+/g, '-');
    navigate(`/shop?category=${categoryParam}`);
  };
  return (
    <div className={`bg-white-200 mt-28 px-4 md:px-16 lg:px-24 transition-all duration-300 ${isModalOpen ? "blur-lg bg-opacity-50" : ""}`}>
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
      <div className="w-full md:w-3/12">
          <h2 className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">SHOP BY CATEGORIES</h2>
          <ul className="space-y-4 bg-gray-100 p-3">
            {CategoryList.map((category, index) => (
              <li 
                key={index} 
                className="flex items-center text-sm font-bold cursor-pointer hover:text-red-600 transition-colors duration-200"
                onClick={() => handleCategoryClick(category)}
              > 
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))} 
          </ul>
        </div>
        <div className="w-full md:w-9/12 relative">
          <img src={image} alt="banner" className="w-full h-96 object-cover rounded-md" />
          <div className="absolute top-16 left-8 text-white">
            <p className='text-gray-600'>Yousof | e-Shop</p>
            <h1 className="text-4xl text-black font-bold my-2">WELCOME TO E-SHOP</h1>
            <p className='text-black font-bold text-3xl my-3'>MILLIONS+ PRODUCTS</p>
            <Link to="/shop">
              <button className="px-4 py-2 text-xl bg-red-600 text-white rounded-md hover:bg-red-400">SHOP NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategoriesSection />
      <ProductList />
      <Shop />
    </div>
  );
};

export default Home;
