import { Users, Target, Award, Clock, Map, Mail, Phone } from 'lucide-react';

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
            <p className="text-xl opacity-90 mb-8">Were passionate about delivering exceptional products and experiences that improve peoples lives.</p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, our company began with a simple mission: to create high-quality products that combine functionality, design, and affordability. What started as a small venture has now grown into a beloved brand with customers across the globe.
              </p>
              <p className="text-gray-600">
                Through constant innovation and a commitment to excellence, weve expanded our product lines while maintaining the craftsmanship and attention to detail that defined our brand from day one. Our team has grown from 3 founders to over 50 passionate individuals who share our vision.
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-1 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-gray-100">
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <img src="/api/placeholder/600/400" alt="Our company story" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Mission & Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Target size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  To empower our customers through innovative products that simplify daily life while maintaining the highest standards of quality and sustainability.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Award size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Quality Promise</h3>
                </div>
                <p className="text-gray-600">
                  We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our standards before reaching our customers.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Users size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Customer First</h3>
                </div>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We actively listen to feedback and continuously improve our products and services.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Clock size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
                </div>
                <p className="text-gray-600">
                  Were constantly exploring new ideas and technologies to create products that address evolving customer needs and set new industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "/api/placeholder/300/300"
              },
              {
                name: "Michael Chen",
                role: "Head of Design",
                image: "/api/placeholder/300/300"
              },
              {
                name: "Jessica Miller",
                role: "Product Manager",
                image: "/api/placeholder/300/300"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                <div className="aspect-w-1 aspect-h-1 bg-gray-100">
                  <img src={member.image} alt={member.name} className="object-cover w-full h-64" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
                  <p className="text-purple-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Our team has grown to over 50 talented individuals across product development, 
              customer service, marketing, and operations. Together, we work to deliver the exceptional 
              quality and service that our customers have come to expect.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Get In Touch</h2>
            <p className="text-center text-gray-600 mb-12">
              Have questions about our company or products? Wed love to hear from you!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-purple-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Map size={28} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  123 Commerce Street<br />
                  Suite 500<br />
                  Seattle, WA 98101
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-purple-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Mail size={28} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600">
                  info@yourcompany.com<br />
                  support@yourcompany.com
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-purple-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Phone size={28} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600">
                  (555) 123-4567<br />
                  Mon-Fri: 9am - 5pm PST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Products?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their lives with our innovative solutions.
          </p>
          <button className="bg-white text-purple-700 font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;