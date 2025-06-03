import React from 'react'


    const Navbar = () => {
      const [scrolled, setScrolled] = React.useState(false);

      React.useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      return (
        <nav className={`w-full absolute top-0 left-0 z-10 py-4 transition-all ${scrolled ? 'bg-primary shadow-md' : 'bg-transparent'}`}>
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-white text-2xl font-['Pacifico']">LinkBio</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white hover:text-gray-200">Features</a>
              <a href="#" className="text-white hover:text-gray-200">Pricing</a>
              <a href="#" className="text-white hover:text-gray-200">About</a>
              <a href="#" className="text-white hover:text-gray-200">Contact</a>
            </div>
            <div className="flex items-center space-x-3">
              <button className="text-white border border-white px-4 py-2 rounded-button whitespace-nowrap">Sign In</button>
              <button className="bg-white text-primary px-4 py-2 rounded-button whitespace-nowrap">Get Started</button>
            </div>
          </div>
        </nav>
      );
    };

    const Hero3 = () => (
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-6 pt-32 pb-20 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 max-w-3xl">Build Your Link in Bio with One Click</h1>
          <p className="text-lg text-center mb-10 max-w-2xl">Create a professional bio link page that showcases all your content in one place. Perfect for creators, influencers, and professionals.</p>
          <div className="flex space-x-4 mb-12">
            <button className="bg-white text-primary px-6 py-3 rounded-button font-medium whitespace-nowrap">Get Started Free</button>
            <button className="border border-white text-white px-6 py-3 rounded-button font-medium whitespace-nowrap">See Demo</button>
          </div>
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
            <img src="https://via.placeholder.com/800x450.png?text=LinkBio+Dashboard+Preview" alt="LinkBio Dashboard Preview" className="w-full h-auto object-top" />
          </div>
        </div>
      </section>
    );

    const Features = () => (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powerful Features for <span className="relative inline-block">
                <span className="text-primary">Enhanced Hiring</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our platform offers everything you need to create an impressive online presence and streamline your hiring process.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-magic-line text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Bio Theme Generator</h3>
                  <p className="text-gray-600">Let our AI create the perfect bio page theme based on your content and brand. Customize colors, fonts, and layouts with just a few clicks.</p>
                </div>
              </div>
              <div className="mt-4">
                <img src="https://via.placeholder.com/400x200.png?text=AI+Theme+Generator" alt="AI Theme Generator" className="w-full h-auto rounded-lg object-top" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-share-line text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seamless Social Media Integration</h3>
                  <p className="text-gray-600">Connect all your social profiles in one place. Our platform supports over 30+ platforms with automatic icon and link formatting.</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-5 gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                  <i className="ri-instagram-fill text-pink-500 text-2xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                  <i className="ri-twitter-x-fill text-black text-2xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                  <i className="ri-linkedin-fill text-blue-600 text-2xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                  <i className="ri-youtube-fill text-red-600 text-2xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                  <i className="ri-tiktok-fill text-black text-2xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                  <i className="ri-facebook-fill text-blue-700 text-2xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                  <i className="ri-pinterest-fill text-red-700 text-2xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                  <i className="ri-snapchat-fill text-yellow-400 text-2xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                  <i className="ri-discord-fill text-indigo-600 text-2xl"></i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                  <i className="ri-github-fill text-gray-800 text-2xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-line-chart-line text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Insightful Analytics with Smart Search</h3>
                  <p className="text-gray-600">Track visitor engagement, click-through rates, and conversion metrics. Make data-driven decisions to optimize your bio link performance.</p>
                </div>
              </div>
              <div className="mt-4">
                <img src="https://via.placeholder.com/400x200.png?text=Analytics+Dashboard" alt="Analytics Dashboard" className="w-full h-auto rounded-lg object-top" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-profile-line text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Profile Bio Optimization</h3>
                  <p className="text-gray-600">Enhance your professional profile with customizable templates, rich media embeds, and responsive design for all devices.</p>
                </div>
              </div>
              <div className="mt-4">
                <img src="https://via.placeholder.com/400x200.png?text=Profile+Optimization" alt="Profile Optimization" className="w-full h-auto rounded-lg object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );

    const Testimonials = () => (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Unleashing Digital Success: Voices from <span className="relative inline-block">
                <span className="text-primary">Our Content Creators</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from professionals who have transformed their online presence with our platform.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://via.placeholder.com/80x80.png?text=Sarah+Johnson" alt="Sarah Johnson" className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Digital Marketing Specialist</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-700">"LinkBio transformed how I present my portfolio online. The AI theme generator created a perfect match for my brand, and the analytics help me understand which content performs best."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://via.placeholder.com/80x80.png?text=Michael+Chen" alt="Michael Chen" className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Tech Entrepreneur</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                </div>
              </div>
              <p className="text-gray-700">"As someone managing multiple projects, having all my links in one professional bio has been a game-changer. The setup was incredibly easy, and the customization options are extensive."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://via.placeholder.com/80x80.png?text=Emma+Rodriguez" alt="Emma Rodriguez" className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-600">Content Creator</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-700">"The social media integration is seamless! I can showcase all my platforms and track which ones drive the most traffic. It's helped me focus my content strategy and grow my audience significantly."</p>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/400x250.png?text=Professional+using+LinkBio" alt="Professional using LinkBio" className="w-full h-auto rounded-lg mb-4 object-top" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://via.placeholder.com/400x250.png?text=Entrepreneur+using+LinkBio" alt="Entrepreneur using LinkBio" className="w-full h-auto rounded-lg mb-4 object-top" />
            </div>
          </div>
        </div>
      </section>
    );

    const Pricing = () => (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Budget-Friendly Pricing <span className="relative inline-block">
                <span className="text-primary">Alternatives</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that works best for your needs. All plans include our core features with no hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Free Plan</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Basic bio link page</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Up to 5 social links</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Standard templates</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Basic analytics</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-button font-medium whitespace-nowrap">Get Started</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl border-2 border-primary overflow-hidden transform scale-105">
              <div className="bg-primary text-white py-2 text-center text-sm font-medium">
                MOST POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Pro Plan</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$24</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Advanced bio link page</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Unlimited social links</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Premium templates</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Detailed analytics</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Custom domain</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>AI theme generator</span>
                  </li>
                </ul>
                <button className="w-full bg-primary text-white py-3 rounded-button font-medium whitespace-nowrap">Get Started</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Business Plan</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>Advanced integrations</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>White-label solution</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    <span>API access</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-800 text-white py-3 rounded-button font-medium whitespace-nowrap">Get Started</button>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 text-gray-600 max-w-2xl mx-auto">
            <p>All plans come with a 14-day free trial. No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>
    );

    const CTA = () => (
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Unlock the Power of AI, <br />Create Your SmartBio Now!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Join thousands of professionals who have already transformed their online presence with our innovative platform.</p>
          <button className="bg-white text-primary px-8 py-3 rounded-button font-medium text-lg whitespace-nowrap">Get Started Free</button>
        </div>
      </section>
    );

    const Footer = () => (
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white text-lg font-medium mb-4">LinkBio</h3>
              <p className="mb-4">The ultimate link in bio tool for professionals and creators.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="ri-twitter-x-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Testimonials</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Subscribe</h3>
              <p className="mb-4">Get the latest updates and offers.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-button w-full border-none" />
                <button className="bg-primary text-white px-4 py-2 rounded-r-button whitespace-nowrap">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 LinkBio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    );


const Hero = () => {
  return (

  <div className="bg-white text-gray-800 font-['Inter']">
        <Navbar />
        <Hero3 />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
        <Footer />
      </div>

  )
}

export default Hero