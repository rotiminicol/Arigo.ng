import { useState } from 'react';

function Deals() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const deals = [
    {
      id: 1,
      title: 'Summer Vacation Package',
      description: '7 nights in Bali with flights and breakfast included',
      price: 899,
      originalPrice: 1299,
      discount: 30,
      category: 'travel',
      image: 'https://images.unsplash.com/photo-1518544866338-9f57a3b818a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      expiry: '2023-08-31'
    },
    {
      id: 2,
      title: 'Smartphone Mega Discount',
      description: 'Latest model with 128GB storage and 48MP camera',
      price: 599,
      originalPrice: 799,
      discount: 25,
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      expiry: '2023-07-15'
    },
    {
      id: 3,
      title: 'Fitness Bundle',
      description: 'Yoga mat, resistance bands, and water bottle set',
      price: 39.99,
      originalPrice: 59.99,
      discount: 33,
      category: 'fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      expiry: '2023-09-30'
    },
    {
      id: 4,
      title: 'Gourmet Dinner for Two',
      description: '3-course meal with wine pairing at top-rated restaurant',
      price: 89,
      originalPrice: 135,
      discount: 34,
      category: 'dining',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      expiry: '2023-08-15'
    },
    {
      id: 5,
      title: 'Home Theater System',
      description: '5.1 surround sound with wireless subwoofer',
      price: 349,
      originalPrice: 499,
      discount: 30,
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      expiry: '2023-07-31'
    },
    {
      id: 6,
      title: 'Weekend Spa Retreat',
      description: 'Massage, facial, and access to premium facilities',
      price: 159,
      originalPrice: 225,
      discount: 29,
      category: 'wellness',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      expiry: '2023-09-15'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Deals' },
    { id: 'travel', name: 'Travel' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'dining', name: 'Dining' },
    { id: 'wellness', name: 'Wellness' }
  ];

  const filteredDeals = activeCategory === 'all' 
    ? deals 
    : deals.filter(deal => deal.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Todays Best Deals</h2>
      
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Deals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDeals.map(deal => (
          <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={deal.image} 
                alt={deal.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {deal.discount}% OFF
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{deal.title}</h3>
                <div className="text-right">
                  <span className="text-gray-500 line-through text-sm">${deal.originalPrice}</span>
                  <span className="block text-xl font-bold text-blue-600">${deal.price}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
              
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Expires: {new Date(deal.expiry).toLocaleDateString()}</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                  Get Deal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredDeals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No deals available in this category</p>
        </div>
      )}
    </div>
  );
}

export default Deals;