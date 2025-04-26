"use client"

import { motion } from "framer-motion"

// Investment component
const Investment = () => {
  // Color scheme

  // Example usage of colors
 

  // Sample chart data
  const revenueData = [
    { month: 'Jan', revenue: 50000 },
    { month: 'Feb', revenue: 75000 },
    { month: 'Mar', revenue: 90000 },
    { month: 'Apr', revenue: 110000 },
    { month: 'May', revenue: 125000 },
    { month: 'Jun', revenue: 150000 },
  ]

  const userGrowthData = [
    { month: 'Jan', users: 1000 },
    { month: 'Feb', users: 2500 },
    { month: 'Mar', users: 4500 },
    { month: 'Apr', users: 7000 },
    { month: 'May', users: 10000 },
    { month: 'Jun', users: 15000 },
  ]

  const productPerformance = [
    { name: 'Product A', value: 35 },
    { name: 'Product B', value: 25 },
    { name: 'Product C', value: 20 },
    { name: 'Product D', value: 15 },
    { name: 'Product E', value: 5 },
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  }

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const pulse = {
    animate: { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-[120px] opacity-20 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-[120px] opacity-15 animate-float-medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-400 mb-4"
            variants={pulse}
          >
            Business Performance Metrics
          </motion.h2>
          <motion.p
            className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto leading-relaxed"
            variants={fadeIn}
          >
            A transparent view of our company’s growth and success, showcasing our commitment to excellence.
          </motion.p>
        </motion.div>

        {/* Revenue Chart */}
        <motion.div
          className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-12 border-l-4 border-green-500"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.15)" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Revenue Growth</h3>
          <div className="h-80 flex items-end space-x-3 relative">
            {revenueData.map((data, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center flex-1"
                variants={fadeIn}
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-full bg-gradient-to-t from-green-400 to-green-500 hover:bg-gradient-to-t hover:from-green-500 hover:to-green-600 rounded-t-lg transition-all duration-300"
                  style={{ height: `${(data.revenue / 150000) * 100}%` }}
                  whileHover={{ scaleY: 1.05 }}
                />
                <span className="text-sm mt-3 text-gray-600">{data.month}</span>
                <motion.span
                  className="text-sm font-semibold text-green-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  ${data.revenue.toLocaleString()}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* User Growth Chart */}
        <motion.div
          className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-12 border-l-4 border-green-500"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.15)" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">User Growth</h3>
          <div className="h-80 relative">
            {userGrowthData.map((data, index) => (
              <motion.div
                key={index}
                className="absolute bottom-0 bg-gradient-to-t from-green-400 to-green-500 hover:bg-gradient-to-t hover:from-green-500 hover:to-green-600 rounded-t-lg transition-all duration-300"
                style={{
                  left: `${(index * 100 / (userGrowthData.length - 1))}%`,
                  width: `${80 / userGrowthData.length}%`,
                  height: `${(data.users / 15000) * 100}%`,
                }}
                initial={{ height: 0 }}
                animate={{ height: `${(data.users / 15000) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scaleY: 1.05 }}
              >
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-green-600 bg-white/80 backdrop-blur-sm rounded px-2 py-1 shadow"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  {data.users.toLocaleString()}
                </motion.div>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-600">
                  {data.month}
                </span>
              </motion.div>
            ))}
            <div className="absolute top-0 left-0 right-0 border-b border-gray-200">
              {[0, 5000, 10000, 15000].map((value, i) => (
                <motion.div
                  key={i}
                  className="absolute left-0 right-0 flex items-center"
                  style={{ top: `${100 - (value / 15000) * 100}%` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-8 border-t border-gray-300 mr-2" />
                  <span className="text-xs text-gray-500">{value.toLocaleString()}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Product Performance Pie Chart */}
        <motion.div
          className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-12 border-l-4 border-green-500"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.15)" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Performance</h3>
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              {productPerformance.reduce((acc, product, index) => {
                const segment = (
                  <motion.div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos(acc.startAngle)}% ${50 + 50 * Math.sin(acc.startAngle)}%, ${50 + 50 * Math.cos(acc.startAngle + (product.value / 100) * 2 * Math.PI)}% ${50 + 50 * Math.sin(acc.startAngle + (product.value / 100) * 2 * Math.PI)}%)`,
                      backgroundColor: `hsl(${index * 70}, 70%, 60%)`,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                  />
                )
                return {
                  startAngle: acc.startAngle + (product.value / 100) * 2 * Math.PI,
                  segments: [...acc.segments, segment],
                }
              }, { startAngle: 0, segments: [] }).segments}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              />
            </div>
          </div>
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4"
            variants={stagger}
          >
            {productPerformance.map((product, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                variants={fadeIn}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: `hsl(${index * 70}, 70%, 60%)` }}
                />
                <span className="text-sm text-gray-700">
                  {product.name}: {product.value}%
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={stagger}
        >
          {[
            { title: "Total Revenue", value: "$1,250,000", note: "Year to date" },
            { title: "Active Users", value: "15,000", note: "+25% from last quarter" },
            { title: "Customer Satisfaction", value: "94%", note: "Based on 1,200 reviews" },
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-l-4 border-green-500"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.15)" }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h3>
              <motion.p
                className="text-3xl font-bold text-green-600"
                variants={pulse}
              >
                {metric.value}
              </motion.p>
              <p className="text-sm text-gray-500 mt-1">{metric.note}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-l-4 border-green-500"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.15)" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">About Our Business</h3>
          <motion.p
            className="text-gray-600 mb-4 text-base leading-relaxed"
            variants={fadeIn}
          >
            We are committed to transparency and want to share our growth journey with you. These metrics represent our company’s performance over the last six months, reflecting our dedication to innovation and customer satisfaction.
          </motion.p>
          <motion.p
            className="text-gray-600 text-base leading-relaxed"
            variants={fadeIn}
          >
            Our green color scheme symbolizes our commitment to sustainable business practices and environmentally friendly operations, ensuring a positive impact on both our customers and the planet.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Investment
