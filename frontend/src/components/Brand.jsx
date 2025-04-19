import { useState } from 'react';
import { Search } from 'lucide-react';

function Brands() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample brand data
  const brands = [
    { id: 1, name: "Nike", logo: "/api/placeholder/80/80", category: "Sportswear", featured: true },
    { id: 2, name: "Apple", logo: "/api/placeholder/80/80", category: "Technology", featured: true },
    { id: 3, name: "Coca-Cola", logo: "/api/placeholder/80/80", category: "Beverages", featured: true },
    { id: 4, name: "Samsung", logo: "/api/placeholder/80/80", category: "Technology", featured: false },
    { id: 5, name: "Adidas", logo: "/api/placeholder/80/80", category: "Sportswear", featured: false },
    { id: 6, name: "Toyota", logo: "/api/placeholder/80/80", category: "Automotive", featured: false },
    { id: 7, name: "Microsoft", logo: "/api/placeholder/80/80", category: "Technology", featured: false },
    { id: 8, name: "Amazon", logo: "/api/placeholder/80/80", category: "E-commerce", featured: false }
  ];

  // Filter brands based on search term
  const filteredBrands = brands.filter(brand => 
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get featured brands
  const featuredBrands = brands.filter(brand => brand.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Partner Brands</h1>
      
      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search brands or categories..."
          className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Featured Brands Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBrands.map(brand => (
            <div key={brand.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex items-center p-6">
                <img src={brand.logo} alt={`${brand.name} logo`} className="w-16 h-16 object-contain mr-4" />
                <div>
                  <h3 className="text-xl font-bold">{brand.name}</h3>
                  <p className="text-gray-600">{brand.category}</p>
                </div>
              </div>
              <div className="px-6 pb-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  View Products
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Brands Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">All Brands</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBrands.map(brand => (
            <div key={brand.id} className="bg-white rounded-lg shadow p-4 flex items-center hover:shadow-md transition-shadow">
              <img src={brand.logo} alt={`${brand.name} logo`} className="w-12 h-12 object-contain mr-3" />
              <div>
                <h3 className="font-medium">{brand.name}</h3>
                <p className="text-sm text-gray-500">{brand.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* No results message */}
      {filteredBrands.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No brands found matching {searchTerm}</p>
        </div>
      )}
    </div>
  );
}

export default Brands;