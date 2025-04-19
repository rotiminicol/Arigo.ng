import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

const Setting = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [user, setUser] = useState(mockUser);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
  });
  const [theme, setTheme] = useState('system');
  const [dataSharing, setDataSharing] = useState(false);
  const [cardDisplay, setCardDisplay] = useState({
    layout: 'grid',
    size: 'medium',
    itemsPerPage: 12,
  });
  const [accessibility, setAccessibility] = useState({
    fontSize: 'medium',
    highContrast: false,
  });
  const [accentColor, setAccentColor] = useState('#3B82F6');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Apply theme and accessibility settings
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor);
    document.documentElement.style.setProperty(
      '--font-size',
      accessibility.fontSize === 'small' ? '14px' : 
      accessibility.fontSize === 'large' ? '18px' : '16px'
    );
    document.documentElement.classList.toggle('high-contrast', accessibility.highContrast);
  }, [accentColor, accessibility]);

  const validateForm = () => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = 'Invalid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveAccount = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Account details saved!');
    } catch (error) {
      alert('Failed to save account details');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Account deletion requested.');
      } catch (error) {
        alert('Failed to delete account');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const tabs = [
    { id: 'account', label: 'Account' },
    { id: 'display', label: 'Display' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'appearance', label: 'Appearance' },
    { id: 'privacy', label: 'Privacy' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Settings
          </span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className="lg:w-1/4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex lg:flex-col gap-4">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 lg:flex-none text-left px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  aria-current={activeTab === tab.id ? 'page' : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-3/4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatePresence mode="wait">
              {activeTab === 'account' && (
                <motion.div
                  key="account"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Account Details</h2>
                  <form onSubmit={handleSaveAccount} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                        placeholder="Enter your full name"
                        required
                        aria-required="true"
                        disabled={isLoading}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                        placeholder="Enter your email"
                        required
                        aria-required="true"
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-bold disabled:opacity-50"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Save account details"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </motion.button>
                  </form>
                </motion.div>
              )}

              {activeTab === 'display' && (
                <motion.div
                  key="display"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold mb-6">Display Preferences</h2>
                  <div>
                    <span className="text-lg font-medium block mb-2">Card Layout</span>
                    <div className="flex gap-4">
                      {['grid', 'list'].map((layout) => (
                        <motion.button
                          key={layout}
                          onClick={() => setCardDisplay({ ...cardDisplay, layout })}
                          className={`px-4 py-2 rounded-lg font-semibold ${
                            cardDisplay.layout === layout
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Set layout to ${layout}`}
                          disabled={isLoading}
                        >
                          {layout.charAt(0).toUpperCase() + layout.slice(1)}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-lg font-medium block mb-2">Card Size</span>
                    <div className="flex gap-4">
                      {['small', 'medium', 'large'].map((size) => (
                        <motion.button
                          key={size}
                          onClick={() => setCardDisplay({ ...cardDisplay, size })}
                          className={`px-4 py-2 rounded-lg font-semibold ${
                            cardDisplay.size === size
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Set card size to ${size}`}
                          disabled={isLoading}
                        >
                          {size.charAt(0).toUpperCase() + size.slice(1)}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="itemsPerPage"
                      className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                    >
                      Items Per Page
                    </label>
                    <select
                      id="itemsPerPage"
                      value={cardDisplay.itemsPerPage}
                      onChange={(e) =>
                        setCardDisplay({ ...cardDisplay, itemsPerPage: Number(e.target.value) })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                      disabled={isLoading}
                    >
                      {[6, 12, 24, 36].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}

              {activeTab === 'notifications' && (
                <motion.div
                  key="notifications"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold mb-6">Notification Preferences</h2>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">Email Notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.email}
                        onChange={() =>
                          setNotifications({ ...notifications, email: !notifications.email })
                        }
                        className="sr-only"
                        disabled={isLoading}
                      />
                      <motion.div
                        className={`w-12 h-6 rounded-full ${
                          notifications.email ? 'bg-blue-500' : 'bg-gray-400'
                        }`}
                        animate={{ backgroundColor: notifications.email ? '#3B82F6' : '#9CA3AF' }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-6 h-6 bg-white rounded-full shadow-md"
                          animate={{ x: notifications.email ? 24 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">Push Notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.push}
                        onChange={() =>
                          setNotifications({ ...notifications, push: !notifications.push })
                        }
                        className="sr-only"
                        disabled={isLoading}
                      />
                      <motion.div
                        className={`w-12 h-6 rounded-full ${
                          notifications.push ? 'bg-blue-500' : 'bg-gray-400'
                        }`}
                        animate={{ backgroundColor: notifications.push ? '#3B82F6' : '#9CA3AF' }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-6 h-6 bg-white rounded-full shadow-md"
                          animate={{ x: notifications.push ? 24 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </label>
                  </div>
                </motion.div>
              )}

              {activeTab === 'appearance' && (
                <motion.div
                  key="appearance"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold mb-6">Appearance</h2>
                  <div>
                    <span className="text-lg font-medium block mb-2">Theme</span>
                    <div className="flex gap-4">
                      {['light', 'dark', 'system'].map((option) => (
                        <motion.button
                          key={option}
                          onClick={() => setTheme(option)}
                          className={`px-4 py-2 rounded-lg font-semibold ${
                            theme === option
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Set theme to ${option}`}
                          disabled={isLoading}
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-lg font-medium block mb-2">Accent Color</span>
                    <div className="flex gap-4">
                      {['#3B82F6', '#EF4444', '#10B981', '#8B5CF6'].map((color) => (
                        <motion.button
                          key={color}
                          onClick={() => setAccentColor(color)}
                          className="w-10 h-10 rounded-full"
                          style={{ backgroundColor: color }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Set accent color to ${color}`}
                          disabled={isLoading}
                        >
                          {accentColor === color && (
                            <motion.div
                              className="w-6 h-6 m-2 rounded-full bg-white border-2 border-gray-800"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-lg font-medium block mb-2">Accessibility</span>
                    <div className="space-y-4">
                      <div>
                        <span className="text-md font-medium block mb-2">Font Size</span>
                        <div className="flex gap-4">
                          {['small', 'medium', 'large'].map((size) => (
                            <motion.button
                              key={size}
                              onClick={() => setAccessibility({ ...accessibility, fontSize: size })}
                              className={`px-4 py-2 rounded-lg font-semibold ${
                                accessibility.fontSize === size
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                  : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                              }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={`Set font size to ${size}`}
                              disabled={isLoading}
                            >
                              {size.charAt(0).toUpperCase() + size.slice(1)}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-md font-medium">High Contrast Mode</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={accessibility.highContrast}
                            onChange={() =>
                              setAccessibility({
                                ...accessibility,
                                highContrast: !accessibility.highContrast,
                              })
                            }
                            className="sr-only"
                            disabled={isLoading}
                          />
                          <motion.div
                            className={`w-12 h-6 rounded-full ${
                              accessibility.highContrast ? 'bg-blue-500' : 'bg-gray-400'
                            }`}
                            animate={{
                              backgroundColor: accessibility.highContrast ? '#3B82F6' : '#9CA3AF',
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              className="w-6 h-6 bg-white rounded-full shadow-md"
                              animate={{ x: accessibility.highContrast ? 24 : 0 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'privacy' && (
                <motion.div
                  key="privacy"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold mb-6">Privacy</h2>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">Share Usage Data</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={dataSharing}
                        onChange={() => setDataSharing(!dataSharing)}
                        className="sr-only"
                        disabled={isLoading}
                      />
                      <motion.div
                        className={`w-12 h-6 rounded-full ${
                          dataSharing ? 'bg-blue-500' : 'bg-gray-400'
                        }`}
                        animate={{ backgroundColor: dataSharing ? '#3B82F6' : '#9CA3AF' }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-6 h-6 bg-white rounded-full shadow-md"
                          animate={{ x: dataSharing ? 24 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </label>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data Management</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Manage your data preferences and account status.
                    </p>
                    <div className="space-y-4">
                      <motion.button
                        onClick={() => alert('Download data requested')}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-bold"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Download your data"
                        disabled={isLoading}
                      >
                        Download Your Data
                      </motion.button>
                      <motion.button
                        onClick={handleDeleteAccount}
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-bold"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Delete account"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Processing...' : 'Delete Account'}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Setting;