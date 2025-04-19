import { motion, AnimatePresence } from 'framer-motion';

const phones = [
  {
    id: 1,
    brand: 'Apple',
    model: 'iPhone 15 Pro',
    price: 999,
    specs: 'A17 Pro, 8GB RAM, 256GB Storage',
    image: 'https://images.unsplash.com/photo-1695409428362-4dd2d2a2f4c4?q=80&w=1470',
  },
  {
    id: 2,
    brand: 'Samsung',
    model: 'Galaxy S23 Ultra',
    price: 1199,
    specs: 'Snapdragon 8 Gen 2, 12GB RAM, 512GB Storage',
    image: 'https://images.unsplash.com/photo-1673261299379-c0ebbcd0f781?q=80&w=1470',
  },
  {
    id: 3,
    brand: 'Google',
    model: 'Pixel 8 Pro',
    price: 899,
    specs: 'Tensor G3, 12GB RAM, 256GB Storage',
    image: 'https://images.unsplash.com/photo-1697816557891-345d7a194631?q=80&w=1470',
  },
  {
    id: 4,
    brand: 'OnePlus',
    model: '11',
    price: 799,
    specs: 'Snapdragon 8 Gen 2, 16GB RAM, 256GB Storage',
    image: 'https://images.unsplash.com/photo-1681487924389-a9f4b26f6bc3?q=80&w=1470',
  },
  {
    id: 5,
    brand: 'Xiaomi',
    model: '13 Pro',
    price: 849,
    specs: 'Snapdragon 8 Gen 2, 12GB RAM, 512GB Storage',
    image: 'https://images.unsplash.com/photo-1610945415297-d9a7e9b7878f?q=80&w=1470',
  },
  {
    id: 6,
    brand: 'Sony',
    model: 'Xperia 1 V',
    price: 1299,
    specs: 'Snapdragon 8 Gen 2, 12GB RAM, 256GB Storage',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1470',
  },
];

const Phones = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ backgroundSize: '200% 200%' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
            Smartphone Showcase
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-center mb-16 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Explore the latest smartphones with cutting-edge technology!
        </motion.p>

        {/* Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {phones.map((phone, index) => (
              <motion.div
                key={phone.id}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-lg mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={phone.image}
                    alt={`${phone.brand} ${phone.model}`}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300';
                    }}
                  />
                  <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Hot Deal!
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  {phone.brand} {phone.model}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{phone.specs}</p>
                <p className="text-xl font-semibold text-green-400 mb-4">
                  ${phone.price.toLocaleString()}
                </p>
                <motion.button
                  className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2"
                  whileHover={{
                    scale: 1.1,
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Add ${phone.brand} ${phone.model} to cart`}
                >
                  Add to Cart
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.3, repeat: 1 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </motion.svg>
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Phones;