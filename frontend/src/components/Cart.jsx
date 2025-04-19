import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart,  ChevronLeft, Trash2, Plus, Minus } from 'lucide-react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
      setIsLoading(false);
    }, 600);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g, '')) * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-t-green-500 border-r-green-500 border-b-gray-200 border-l-gray-200 rounded-full"
        />
        <p className="mt-4 text-gray-600 font-medium">Loading your cart...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <div className="flex items-center justify-between mb-8">
        <motion.h2 
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="text-3xl font-bold text-gray-800 flex items-center"
        >
          <ShoppingCart className="mr-3 text-green-500" />
          <span>My Cart</span>
          {totalItems > 0 && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-3 text-sm bg-green-500 text-white py-1 px-3 rounded-full"
            >
              {totalItems} item{totalItems !== 1 && 's'}
            </motion.span>
          )}
        </motion.h2>
        <Link to="/" className="flex items-center text-green-600 hover:text-green-700 transition duration-200">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Continue Shopping</span>
        </Link>
      </div>

      <motion.div 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 px-8 text-center"
          >
            <div className="flex justify-center mb-6">
              <ShoppingCart className="w-20 h-20 text-gray-300" />
            </div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-8">Looks like you havent added any items to your cart yet.</p>
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-200 transform hover:scale-105"
            >
              Start Shopping
            </Link>
          </motion.div>
        ) : (
          <div>
            <div className="border-b border-gray-100 py-4 px-6 hidden md:flex text-sm font-medium text-gray-500">
              <div className="w-2/5">Product</div>
              <div className="w-1/5 text-center">Price</div>
              <div className="w-1/5 text-center">Quantity</div>
              <div className="w-1/5 text-right">Total</div>
            </div>
            
            <div className="divide-y divide-gray-100">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row items-center py-6 px-6"
                  >
                    <div className="w-full md:w-2/5 flex items-center mb-4 md:mb-0">
                      <div className="w-24 h-24 rounded-lg bg-gray-50 p-2 flex items-center justify-center mr-4 overflow-hidden">
                        <motion.img 
                          whileHover={{ scale: 1.1 }}
                          src={item.image} 
                          alt={item.name} 
                          className="max-w-full max-h-full object-contain" 
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.id}</p>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/5 text-center mb-4 md:mb-0">
                      <p className="font-medium text-gray-800">{item.price}</p>
                    </div>
                    
                    <div className="w-full md:w-1/5 flex justify-center mb-4 md:mb-0">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        >
                          <Minus className="w-4 h-4" />
                        </motion.button>
                        <span className="w-10 text-center font-medium">{item.quantity}</span>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        >
                          <Plus className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/5 flex justify-between md:justify-end items-center">
                      <p className="font-medium text-gray-800 md:mr-6">
                        ₦{(parseFloat(item.price.replace(/[^0-9.-]+/g, '')) * item.quantity).toLocaleString()}
                      </p>
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)} 
                        className="text-red-500 hover:text-red-600 transition duration-200"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 py-8 px-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-500 mb-1">Subtotal ({totalItems} item{totalItems !== 1 && 's'})</p>
                  <p className="text-2xl font-bold text-gray-800">₦{totalPrice.toLocaleString()}</p>
                </div>
                
                <Link to="/checkout">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition duration-200 flex items-center"
                  >
                    Proceed to Checkout
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center text-sm text-gray-500"
      >
        <p>Need help with your order? <a href="#" className="text-green-500 hover:underline">Contact our support team</a></p>
      </motion.div>
    </motion.div>
  );
}

export default Cart;