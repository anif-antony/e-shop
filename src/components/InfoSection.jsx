import React from 'react'
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock, FaTags } from 'react-icons/fa'

const InfoSection = () => {
   const InfoItems=[
      {
        icon: <FaShippingFast />,
        title: 'Fast Shipping',
        desc: 'We make sure you get your order as soon as possible.'
      },
      {
        icon: <FaHeadset />,
        title: '24/7 Support',
        desc: 'Our customer support is available 24/7 for you.'
      },
      {
        icon:<FaMoneyBillWave />,
        title: 'Money Back Guarantee',
        desc: 'We offer a 30-day return guarantee on all orders'
      },
      
      {
        icon:<FaLock />,
        title: 'Privacy Protection',
        desc: 'We ensure secure payment with SSL Encryption.'
      },
      {
        icon:<FaTags />,
        title: 'Best Price',
        desc: 'We guarantee you the best price on all items.'
      }
   ]

return (
    <div>
            <div className="container mx-auto py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
                    {InfoItems.map((item, index) => (
                            <div 
                                    key={index} 
                                    className="bg-white p-4 rounded-md shadow-md flex flex-col items-center space-y-2 hover:transform hover:scale-105 transition-transform duration-300"
                            >
                            <div className="text-4xl text-red-600">{item.icon}</div>
                            <h3 className="text-xl font-bold text-center">{item.title}</h3>
                            <p className="text-gray-500 text-center">{item.desc}</p>
                            </div>
                    ))}
                    </div>
            </div>
    </div>
)
}

export default InfoSection