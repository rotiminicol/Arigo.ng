import  { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase() || '';
  const [products] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: '₦1,200,000',
      image: '/placeholder.svg?height=300&width=300&text=iPhone+15',
      brand: 'Apple',
      category: 'Smartphones',
    },
    {
      id: 2,
      name: 'PlayStation 5 Digital Edition',
      price: '₦450,000',
      image: '/placeholder.svg?height=300&width=300&text=PS5',
      brand: 'Sony',
      category: 'Gaming',
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5 Headphones',
      price: '₦280,000',
      image: '/placeholder.svg?height=300&width=300&text=Sony+XM5',
      brand: 'Sony',
      category: 'Audio',
    },
    {
      id: 4,
      name: 'Samsung Galaxy S23 Ultra',
      price: '₦950,000',
      image: '/placeholder.svg?height=300&width=300&text=S23+Ultra',
      brand: 'Samsung',
      category: 'Smartphones',
    },
    {
      id: 5,
      name: 'Apple AirPods Pro (2nd Gen)',
      price: '₦180,000',
      image: '/placeholder.svg?height=300&width=300&text=AirPods+Pro',
      brand: 'Apple',
      category: 'Audio',
    },
    {
      id: 6,
      name: 'Xbox Series X',
      price: '₦380,000',
      image: '/placeholder.svg?height=300&width=300&text=Xbox+X',
      brand: 'Microsoft',
      category: 'Gaming',
    },
  ]);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6" style={{ color: '#2c3e50' }}>
        Search Results for {query}
      </h2>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white p-4 rounded-xl shadow-md"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
              <h3 className="font-semibold">{product.name}</h3>
              <p>{product.price}</p>
              <p className="text-gray-500">{product.brand}</p>
            </Link>
          ))}
        </div>
      )}
      <Link to="/" className="mt-6 inline-block text-green-600">
        Back to Home
      </Link>
    </div>
  );
}

export default SearchResults;