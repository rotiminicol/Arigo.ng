import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from "react-hot-toast";

const mockUser = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Green Valley, Eco City, 10001',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
  joinedDate: 'January 2024',
  totalOrders: 12,
  totalSpent: 2548.76,
  recentActivity: [
    { id: 1, action: 'Password changed', date: '2 days ago' },
    { id: 2, action: 'Order #ORD004 placed', date: '1 week ago' },
    { id: 3, action: 'Profile updated', date: '2 weeks ago' },
  ]
};

const mockOrders = [
  {
    id: 'ORD001',
    date: '2025-03-15',
    total: 1299.99,
    status: 'Delivered',
    items: 'MacBook Pro 14"',
    tracking: '1234567890'
  },
  {
    id: 'ORD002',
    date: '2025-02-28',
    total: 199.99,
    status: 'Shipped',
    items: 'Wireless Headphones',
    tracking: '0987654321'
  },
  {
    id: 'ORD003',
    date: '2025-01-10',
    total: 49.99,
    status: 'Cancelled',
    items: 'USB-C Cable',
    tracking: null
  },
];

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState(mockUser);
  const queryClient = useQueryClient();

  const handleLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    logout();
  }

  const { mutate: logout } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch("/api/auth/logout", {
          method: "POST",
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the data
    toast.success('Profile updated successfully!');
    setEditMode(false);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'orders', label: 'Orders', icon: '📦' },
    { id: 'activity', label: 'Activity', icon: '🔄' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
              My Account
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Welcome back, {userData.name}!
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full">
              <span className="text-green-800 dark:text-green-200 font-medium">
                Member since {userData.joinedDate}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800 text-red-800 dark:text-red-200 px-4 py-2 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m5 4v-7a3 3 0 00-3-3H5"
                />
              </svg>
              Log Out
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-8">
              <div className="flex flex-col space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-300 ${
                      activeTab === tab.id
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
              
              {/* User Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Your Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Total Orders</span>
                    <span className="font-medium">{userData.totalOrders}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Total Spent</span>
                    <span className="font-medium">${userData.totalSpent.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === 'profile' && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Profile Information</h2>
                    {!editMode ? (
                      <button
                        onClick={() => setEditMode(true)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit Profile
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditMode(false)}
                          className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveProfile}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                        >
                          Save Changes
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 flex flex-col items-center">
                      <img
                        src={userData.avatar}
                        alt={`${userData.name}'s avatar`}
                        className="w-32 h-32 rounded-full object-cover border-4 border-green-200 dark:border-green-800 mb-4"
                      />
                      {editMode && (
                        <button className="text-green-600 dark:text-green-400 font-medium text-sm">
                          Change Photo
                        </button>
                      )}
                    </div>

                    <div className="md:w-2/3">
                      {editMode ? (
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Full Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={userData.name}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={userData.phone}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Address
                            </label>
                            <textarea
                              name="address"
                              value={userData.address}
                              onChange={handleInputChange}
                              rows="3"
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700"
                            ></textarea>
                          </div>
                        </form>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-semibold">{userData.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{userData.email}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                              Phone
                            </h4>
                            <p>{userData.phone}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                              Address
                            </h4>
                            <p>{userData.address}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold">Order History</h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Your recent purchases and their status
                  </p>
                </div>

                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {mockOrders.length === 0 ? (
                    <div className="p-6 text-center">
                      <p className="text-gray-600 dark:text-gray-400">
                        No orders yet. Start shopping!
                      </p>
                      <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
                        Browse Products
                      </button>
                    </div>
                  ) : (
                    mockOrders.map((order) => (
                      <div key={order.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-semibold text-lg">{order.items}</h3>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                order.status === 'Delivered'
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                  : order.status === 'Shipped'
                                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Order #{order.id} • {order.date}
                            </p>
                            {order.tracking && (
                              <p className="text-sm mt-2">
                                Tracking: <span className="text-green-600 dark:text-green-400">{order.tracking}</span>
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-semibold">${order.total.toFixed(2)}</p>
                            <button className="mt-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm font-medium transition-colors duration-300">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold">Recent Activity</h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Your account actions and history
                  </p>
                </div>

                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {userData.recentActivity.map((activity) => (
                    <div key={activity.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                            <span className="text-green-600 dark:text-green-300">🔔</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {activity.action}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {activity.date}
                          </p>
                        </div>
                        <button className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm font-medium transition-colors duration-300">
                          Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold">Account Settings</h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Manage your preferences and security
                  </p>
                </div>

                <div className="p-6 space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Receive important updates via email
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications}
                            onChange={() => setNotifications(!notifications)}
                            className="sr-only"
                          />
                          <div
                            className={`w-11 h-6 rounded-full transition-colors duration-300 ${
                              notifications ? 'bg-green-600' : 'bg-gray-400'
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                                notifications ? 'translate-x-6' : 'translate-x-0'
                              }`}
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Appearance</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Dark Mode</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Switch between light and dark theme
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={darkMode}
                          onChange={() => setDarkMode(!darkMode)}
                          className="sr-only"
                        />
                        <div
                          className={`w-11 h-6 rounded-full transition-colors duration-300 ${
                            darkMode ? 'bg-green-600' : 'bg-gray-400'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                              darkMode ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          />
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Security</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Change Password</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Update your account password
                          </p>
                        </div>
                        <button className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium transition-colors duration-300">
                          Change
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Add an extra layer of security
                          </p>
                        </div>
                        <button className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium transition-colors duration-300">
                          Enable
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;