import { useState } from 'react';
import { ArrowLeft, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';

const GreenGiveaway = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form submitted:', { name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
      alert('Thank you for entering the giveaway!');
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-600 text-white flex flex-col">
      {/* Header with Back Button */}
      <header className="p-4">
        <button 
          onClick={() => window.history.back()} 
          className="flex items-center text-white hover:text-green-200 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="mr-2" />
          <span className="font-medium">Back</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-green-700 rounded-xl shadow-lg w-full max-w-md p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Enter Our Giveaway</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-green-600 border border-green-500 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-green-600 border border-green-500 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-green-600 border border-green-500 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="flex items-center pt-2">
              <AlertCircle size={18} className="text-green-300 mr-2 flex-shrink-0" />
              <p className="text-sm text-green-200">
                By entering, you agree to our Terms & Conditions.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-green-500 py-3 rounded-lg font-bold flex items-center justify-center transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-400'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  Enter Now <ArrowRight size={20} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-green-200 text-sm">
        © {new Date().getFullYear()} Arigo NG. All rights reserved.
      </footer>
    </div>
  );
};

export default GreenGiveaway;