import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline';

const Tablets = () => {
  const tablets = [
    {
      id: 1,
      name: 'iPad Pro 12.9" (2023)',
      price: 1099,
      rating: 4.8,
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-select-202212-12-9inch-space-gray-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670865949310',
      specs: ['M2 Chip', '12.9" Liquid Retina XDR', '128GB Storage', '5G Support'],
      isNew: true
    },
    {
      id: 2,
      name: 'Samsung Galaxy Tab S8 Ultra',
      price: 899,
      rating: 4.6,
      image: 'https://images.samsung.com/us/galaxy-tab-s8/business/productivity/gallery/sm-x900-zkaxaa-01-501716914?$650_519_PNG$',
      specs: ['Snapdragon 8 Gen 1', '14.6" Super AMOLED', '256GB Storage', 'S Pen Included'],
      isNew: false
    },
    {
      id: 3,
      name: 'Microsoft Surface Pro 9',
      price: 999,
      rating: 4.5,
      image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4RDaZ',
      specs: ['12th Gen Intel Core i5', '13" PixelSense Flow', '256GB SSD', 'Windows 11 Pro'],
      isNew: true
    },
    {
      id: 4,
      name: 'Lenovo Tab P12 Pro',
      price: 649,
      rating: 4.3,
      image: 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTQ2NjQzfGltYWdlL3BuZ3xoYjIvaDg1LzEwMzE0MDQ2ODA0NjA2LnBuZ3wzY2M5YzU2YzY3YzY3ZGU1YzU1YzY3YzU3NjQ1YzU3YzU3NjQ1YzU3YzU3NjQ1YzU3',
      specs: ['Snapdragon 870', '12.6" OLED', '256GB Storage', 'Quad Speakers'],
      isNew: false
    },
    {
      id: 5,
      name: 'Amazon Fire HD 10',
      price: 149,
      rating: 4.0,
      image: 'https://m.media-amazon.com/images/I/61lKVe+0DmL._AC_SX679_.jpg',
      specs: ['Octa-core Processor', '10.1" 1080p Full HD', '32GB Storage', '12-hour Battery'],
      isNew: false
    },
    {
      id: 6,
      name: 'Xiaomi Pad 6',
      price: 399,
      rating: 4.4,
      image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-pad-6/specs-header.jpg',
      specs: ['Snapdragon 870', '11" 2.8K Display', '128GB Storage', '8840mAh Battery'],
      isNew: true
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Premium Tablets Collection
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
            Discover the perfect tablet for work, creativity, and entertainment
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full sm:w-auto">
            <label htmlFor="sort" className="sr-only">Sort</label>
            <select
              id="sort"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
          
          <div className="w-full sm:w-auto">
            <label htmlFor="filter" className="sr-only">Filter</label>
            <select
              id="filter"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>All Brands</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Microsoft</option>
              <option>Lenovo</option>
              <option>Amazon</option>
              <option>Xiaomi</option>
            </select>
          </div>
        </div>

        {/* Tablet Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {tablets.map((tablet) => (
            <div key={tablet.id} className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* New Badge */}
              {tablet.isNew && (
                <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </div>
              )}
              
              {/* Product Image */}
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={tablet.image}
                  alt={tablet.name}
                  className="w-full h-full object-contain object-center lg:w-full lg:h-full"
                />
              </div>
              
              {/* Product Info */}
              <div className="mt-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {tablet.name}
                    </a>
                  </h3>
                  
                  {/* Specifications */}
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    {tablet.specs.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-4 w-4 text-green-500 mt-0.5 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Rating and Price */}
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={`h-5 w-5 ${rating < Math.floor(tablet.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{tablet.rating}</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">${tablet.price}</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-6 flex justify-between gap-2">
                <button className="flex-1 bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Add to cart
                </button>
                <button className="flex items-center justify-center rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border border-gray-300">
                  <HeartIcon className="h-5 w-5 mr-2" />
                  Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tablets;