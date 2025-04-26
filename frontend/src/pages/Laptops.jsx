import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const laptops = [
  {
    id: 1,
    brand: 'Apple',
    model: 'MacBook Pro 14"',
    price: 1999,
    specs: 'M2 Pro, 16GB RAM, 512GB SSD',
    image: 'https://images.unsplash.com/photo-1611186871348-8d3b7a3a8d78?q=80&w=1470',
    description: 'The MacBook Pro 14" features the powerful M2 Pro chip, delivering incredible performance and battery life. Perfect for creative professionals and developers who need reliable performance on the go.'
  },
  {
    id: 2,
    brand: 'Dell',
    model: 'XPS 13',
    price: 1299,
    specs: 'Intel i7, 16GB RAM, 1TB SSD',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1470',
    description: 'The Dell XPS 13 combines premium design with powerful performance. Its InfinityEdge display provides a nearly borderless viewing experience in an incredibly compact form factor.'
  },
  {
    id: 3,
    brand: 'HP',
    model: 'Spectre x360',
    price: 1499,
    specs: 'Intel i7, 16GB RAM, 512GB SSD',
    image: 'https://images.unsplash.com/photo-1542393545-6b9f5f0a80bc?q=80&w=1470',
    description: 'The HP Spectre x360 is a versatile 2-in-1 laptop with a gem-cut design. The 360-degree hinge allows you to use it as a traditional laptop, tablet, or in tent mode for presentations.'
  },
  {
    id: 4,
    brand: 'Lenovo',
    model: 'ThinkPad X1 Carbon',
    price: 1699,
    specs: 'Intel i7, 32GB RAM, 1TB SSD',
    image: 'https://images.unsplash.com/photo-1516321318423-7b57e8580f1b?q=80&w=1470',
    description: 'The ThinkPad X1 Carbon is built for business with military-grade durability. It combines lightweight carbon fiber construction with powerful performance and security features.'
  },
  {
    id: 5,
    brand: 'Asus',
    model: 'ROG Zephyrus G14',
    price: 1799,
    specs: 'Ryzen 9, 16GB RAM, 1TB SSD, RTX 3060',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1470',
    description: 'The ASUS ROG Zephyrus G14 is a gaming powerhouse in a compact form. With AMD Ryzen 9 and RTX graphics, it delivers desktop-class gaming performance in a 14-inch laptop.'
  },
  {
    id: 6,
    brand: 'Microsoft',
    model: 'Surface Laptop 5',
    price: 1399,
    specs: 'Intel i5, 16GB RAM, 512GB SSD',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470',
    description: 'The Surface Laptop 5 offers the perfect combination of style and performance. Its vibrant PixelSense touchscreen display and all-day battery life make it ideal for productivity and entertainment.'
  },
  {
    id: 7,
    brand: 'Razer',
    model: 'Blade 15',
    price: 2299,
    specs: 'Intel i9, 32GB RAM, 1TB SSD, RTX 3080',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470',
    description: 'The Razer Blade 15 is the ultimate gaming laptop with a premium CNC aluminum chassis. It features a 360Hz display and powerful RTX graphics for the most demanding games and creative tasks.'
  },
  {
    id: 8,
    brand: 'Acer',
    model: 'Swift 5',
    price: 1099,
    specs: 'Intel i5, 8GB RAM, 512GB SSD',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1470',
    description: 'The Acer Swift 5 is one of the lightest 14-inch laptops available. Its magnesium-lithium and magnesium-aluminum alloy body makes it incredibly portable without sacrificing performance.'
  },
  {
    id: 9,
    brand: 'MSI',
    model: 'Creator Z16',
    price: 2499,
    specs: 'Intel i7, 32GB RAM, 1TB SSD, RTX 3060',
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1470',
    description: 'The MSI Creator Z16 is designed for creative professionals with a 16:10 QHD+ touch display. Its powerful hardware and color-accurate screen make it perfect for video editing and graphic design.'
  },
  {
    id: 10,
    brand: 'Samsung',
    model: 'Galaxy Book Pro',
    price: 1299,
    specs: 'Intel i7, 16GB RAM, 512GB SSD',
    image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=1470',
    description: 'The Samsung Galaxy Book Pro features a vibrant AMOLED display in an ultra-thin and light design. It integrates seamlessly with Galaxy smartphones for a connected ecosystem experience.'
  },
  {
    id: 11,
    brand: 'LG',
    model: 'Gram 17',
    price: 1599,
    specs: 'Intel i7, 16GB RAM, 1TB SSD',
    image: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1470',
    description: 'The LG Gram 17 offers a massive 17-inch display in an incredibly lightweight package. Despite its large screen, it weighs less than many 15-inch laptops and offers exceptional battery life.'
  },
  {
    id: 12,
    brand: 'Google',
    model: 'Pixelbook Go',
    price: 849,
    specs: 'Intel i5, 8GB RAM, 128GB SSD',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1470',
    description: 'The Google Pixelbook Go is a premium Chromebook with a 13.3-inch touchscreen display. Its lightweight design, excellent keyboard, and long battery life make it perfect for productivity on the go.'
  }
];

const Laptops = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [category, setCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredLaptops = category === 'all' 
    ? laptops 
    : laptops.filter(laptop => {
        if (category === 'premium') return laptop.price >= 1800;
        if (category === 'midrange') return laptop.price >= 1200 && laptop.price < 1800;
        if (category === 'budget') return laptop.price < 1200;
        return true;
      });

  const visibleLaptops = filteredLaptops.slice(0, visibleCount);
  
  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 6, filteredLaptops.length));
      setIsLoading(false);
    }, 800);
  };

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-16 relative overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 mb-8 text-gray-300 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Previous Page
        </motion.button>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-center mb-8"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Premium Laptop Collection
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-center mb-8 text-gray-200"
        >
          Discover cutting-edge performance with our exclusive laptop selection
        </motion.p>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { id: 'all', label: 'All Laptops' },
            { id: 'premium', label: 'Premium ($1800+)' },
            { id: 'midrange', label: 'Mid-Range ($1200-$1800)' },
            { id: 'budget', label: 'Budget (Under $1200)' }
          ].map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => { setCategory(filter.id); setVisibleCount(6); }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                category === filter.id 
                  ? 'bg-green-500 text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Laptop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleLaptops.map((laptop) => (
              <motion.div
                key={laptop.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className={`bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden ${
                  expandedId === laptop.id ? 'transform scale-[1.02] z-10' : ''
                }`}
                onMouseEnter={() => setHoveredId(laptop.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={laptop.image}
                    alt={`${laptop.brand} ${laptop.model}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      scale: hoveredId === laptop.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <motion.div 
                    className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    In Stock
                  </motion.div>
                  
                  {laptop.price >= 2000 && (
                    <motion.div 
                      className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Premium
                    </motion.div>
                  )}
                  
                  <AnimatePresence>
                    {hoveredId === laptop.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/30 flex items-center justify-center"
                      >
                        <motion.button
                          onClick={() => toggleExpand(laptop.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                        >
                          {expandedId === laptop.id ? 'Less Info' : 'More Info'}
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-100"
                      whileHover={{ color: '#4ade80' }}
                    >
                      {laptop.brand} {laptop.model}
                    </motion.h3>
                    <motion.span 
                      className="text-xl font-bold text-green-400"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ${laptop.price.toLocaleString()}
                    </motion.span>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-4">{laptop.specs}</p>
                  
                  {/* Expandable Description */}
                  <AnimatePresence>
                    {expandedId === laptop.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <motion.div 
                          className="bg-gray-800/50 p-4 rounded-lg mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="text-green-400 font-semibold mb-2">Description</h4>
                          <p className="text-gray-300 text-sm">{laptop.description}</p>
                        </motion.div>
                        
                        <motion.div 
                          className="grid grid-cols-2 gap-2 mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {[
                            { label: "Processor", value: laptop.specs.split(',')[0] },
                            { label: "Memory", value: laptop.specs.split(',')[1] },
                            { label: "Storage", value: laptop.specs.split(',')[2] },
                            { label: "Warranty", value: "1 Year" }
                          ].map((spec, i) => (
                            <motion.div
                              key={i}
                              className="bg-gray-800/50 p-3 rounded-lg"
                              whileHover={{ y: -2 }}
                            >
                              <p className="text-xs text-gray-400">{spec.label}</p>
                              <p className="text-sm text-gray-200 font-medium">{spec.value}</p>
                            </motion.div>
                          ))}
                        </motion.div>
                        
                        <motion.div 
                          className="bg-gray-800/50 p-3 rounded-lg mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {[
                            "Free Shipping",
                            "30-Day Returns",
                            "24/7 Tech Support"
                          ].map((benefit, i) => (
                            <motion.div
                              key={i}
                              className="flex items-center gap-2 mb-2 last:mb-0"
                              initial={{ x: -10 }}
                              animate={{ x: 0 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                            >
                              <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                              <p className="text-xs text-gray-300">{benefit}</p>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </motion.button>
                    
                    <motion.button
                      onClick={() => toggleExpand(laptop.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-all duration-300"
                    >
                      {expandedId === laptop.id ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Load More Button */}
        {visibleCount < filteredLaptops.length && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={loadMore}
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Loading...
                </>
              ) : (
                <>
                  Load More Laptops
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Laptops; 