const Investment = () => {
  // Sample chart data for the business
  const revenueData = [
    { month: 'Jan', revenue: 50000 },
    { month: 'Feb', revenue: 75000 },
    { month: 'Mar', revenue: 90000 },
    { month: 'Apr', revenue: 110000 },
    { month: 'May', revenue: 125000 },
    { month: 'Jun', revenue: 150000 },
  ];

  const userGrowthData = [
    { month: 'Jan', users: 1000 },
    { month: 'Feb', users: 2500 },
    { month: 'Mar', users: 4500 },
    { month: 'Apr', users: 7000 },
    { month: 'May', users: 10000 },
    { month: 'Jun', users: 15000 },
  ];

  const productPerformance = [
    { name: 'Product A', value: 35 },
    { name: 'Product B', value: 25 },
    { name: 'Product C', value: 20 },
    { name: 'Product D', value: 15 },
    { name: 'Product E', value: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Business Performance Metrics
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Transparent view of our companys growth and success
          </p>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Revenue Growth</h3>
          <div className="h-64 flex items-end space-x-2">
            {revenueData.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className="w-full bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-t"
                  style={{ height: `${(data.revenue / 150000) * 100}%` }}
                ></div>
                <span className="text-xs mt-2 text-gray-600">{data.month}</span>
                <span className="text-xs font-semibold text-green-600">${data.revenue.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">User Growth</h3>
          <div className="h-64 relative">
            {userGrowthData.map((data, index) => (
              <div 
                key={index} 
                className="absolute bottom-0 bg-green-400 hover:bg-green-500 transition-all duration-300 rounded-t"
                style={{
                  left: `${(index * 100 / (userGrowthData.length - 1))}%`,
                  width: `${80 / userGrowthData.length}%`,
                  height: `${(data.users / 15000) * 100}%`,
                }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-green-600">
                  {data.users.toLocaleString()}
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                  {data.month}
                </div>
              </div>
            ))}
            <div className="absolute top-0 left-0 right-0 border-b border-gray-200">
              {[0, 5000, 10000, 15000].map((value, i) => (
                <div key={i} className="absolute left-0 right-0 flex items-center" style={{ top: `${100 - (value / 15000) * 100}%` }}>
                  <div className="w-8 border-t border-gray-300 mr-2"></div>
                  <span className="text-xs text-gray-500">{value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Performance Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Product Performance</h3>
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              {productPerformance.reduce((acc, product, index) => {
                const segment = (
                  <div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos(acc.startAngle)}% ${50 + 50 * Math.sin(acc.startAngle)}%, ${50 + 50 * Math.cos(acc.startAngle + (product.value / 100) * 2 * Math.PI)}% ${50 + 50 * Math.sin(acc.startAngle + (product.value / 100) * 2 * Math.PI)}%)`,
                      backgroundColor: `hsl(${index * 70}, 70%, 60%)`,
                    }}
                  ></div>
                );
                return {
                  startAngle: acc.startAngle + (product.value / 100) * 2 * Math.PI,
                  segments: [...acc.segments, segment],
                };
              }, { startAngle: 0, segments: [] }).segments}
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {productPerformance.map((product, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: `hsl(${index * 70}, 70%, 60%)` }}
                ></div>
                <span className="text-sm text-gray-700">
                  {product.name}: {product.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Revenue</h3>
            <p className="text-3xl font-bold text-green-600">$1,250,000</p>
            <p className="text-sm text-gray-500 mt-1">Year to date</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Users</h3>
            <p className="text-3xl font-bold text-green-600">15,000</p>
            <p className="text-sm text-gray-500 mt-1">+25% from last quarter</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
            <p className="text-3xl font-bold text-green-600">94%</p>
            <p className="text-sm text-gray-500 mt-1">Based on 1,200 reviews</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">About Our Business</h3>
          <p className="text-gray-600 mb-4">
            We are committed to transparency and want to share our growth journey with you. 
            These metrics represent our companys performance over the last six months.
          </p>
          <p className="text-gray-600">
            Our green color scheme reflects our commitment to sustainable business practices 
            and environmentally friendly operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Investment;