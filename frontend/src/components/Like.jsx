import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

function Like() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [removing, setRemoving] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data with a slight delay for animation
    setTimeout(() => {
      const storedItems = JSON.parse(localStorage.getItem('wishlist')) || [];
      setWishlistItems(storedItems);
      setIsLoading(false);
    }, 600);
  }, []);

  const removeFromWishlist = (id) => {
    setRemoving(id);
    
    // Delay actual removal to allow animation to play
    setTimeout(() => {
      const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
      setWishlistItems(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setRemoving(null);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span className="font-medium">Back to Shop</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">My Wishlist</h1>
            <div className="w-32"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-pulse flex space-x-2">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
            <p className="mt-4 text-gray-500">Loading your wishlist...</p>
          </div>
        ) : wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Heart size={64} className="text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md">Items you love can be saved here. Start exploring and add your favorites.</p>
            <Link 
              to="/" 
              className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ShoppingBag size={20} className="mr-2" />
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600"><span className="font-semibold">{wishlistItems.length}</span> {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${removing === item.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                >
                  <div className="relative">
                    <div className="bg-gray-100 p-4 relative h-56 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors duration-300"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 size={18} className="text-red-500" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 truncate">{item.name}</h3>
                    <p className="text-purple-600 font-medium text-lg">{item.price}</p>
                    <button 
                      className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                    >
                      <ShoppingBag size={18} className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link 
                to="/" 
                className="flex items-center text-purple-600 hover:text-purple-800 transition-colors font-medium"
              >
                <ArrowLeft size={20} className="mr-1" />
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Like;