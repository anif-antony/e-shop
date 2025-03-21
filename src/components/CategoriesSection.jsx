import React from 'react';
import { useNavigate } from 'react-router-dom';
import ManCategories from '../assets/home/images/manCategories.jpg';
import WomanCategories from '../assets/home/images/womanCategories.jpg';
import KidsCategories from '../assets/home/images/kidsCategories.jpg';

const Categories = [
  {
    image: ManCategories,
    title: 'Men',
    category: 'men'
  },
  {
    image: WomanCategories,
    title: 'Women',
    category: 'women'
  },
  {
    image: KidsCategories,
    title: 'Kids',
    category: 'kids'
  }
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Navigate to shop page with the selected category as a query parameter
    navigate(`/shop?category=${category}`);
  };

  return (
    <div>
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {Categories.map((category, index) => (
            <div
              key={index}
              className="relative bg-white p-4 rounded-md shadow-md flex flex-col items-center space-y-2 hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleCategoryClick(category.category)}
            >
              <div className="relative w-full h-full">
                <img src={category.image} alt={`${category.title} category`} className="w-full h-full object-cover rounded-md" />
                <div className='absolute top-10 left-10'>
                  <p className="text-2xl font-bold text-black bg-opacity-50 rounded">{category.title}</p>
                  <p className='text-gray-600 hover:underline'>View All</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;