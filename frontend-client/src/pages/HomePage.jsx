import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';

const Home = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600 text-white font-sans">

{/* <Hero/> */}
      {/* Navigation */}
      {/* <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="text-xl font-bold flex items-center">
            <i className="fas fa-link mr-2 text-purple-300"></i>
            <span>LinkPro</span>
          </div>
          <div className="hidden md:flex ml-10 space-x-6">
            <a href="#features" className="hover:text-purple-300 transition-colors cursor-pointer">Features</a>
            <a href="#how-it-works" className="hover:text-purple-300 transition-colors cursor-pointer">How It Works</a>
            <a href="#pricing" className="hover:text-purple-300 transition-colors cursor-pointer">Pricing</a>
            <a href="#testimonials" className="hover:text-purple-300 transition-colors cursor-pointer">Testimonials</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium hover:text-purple-300 transition-colors cursor-pointer !rounded-button whitespace-nowrap">Log in</button>
          <button className="px-4 py-2 text-sm font-medium bg-white text-indigo-900 rounded-full hover:bg-opacity-90 transition-colors cursor-pointer !rounded-button whitespace-nowrap">Sign up</button>
        </div>
      </nav> */}

      <Navbar/>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Build Your Link in Bio with One Click</h1>
            <p className="text-lg md:text-xl text-purple-200 mb-8">Create a stunning bio page that showcases all your content, social profiles, and links in one beautiful, customizable hub.</p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative w-full sm:w-auto flex-1 sm:flex-initial">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-purple-400 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:shadow-lg transition-all cursor-pointer !rounded-button whitespace-nowrap">Get Started Free</button>
            </div>
            <div className="flex items-center space-x-4 mt-8 justify-center sm:justify-start">
              <i className="fab fa-instagram text-xl text-purple-300 cursor-pointer"></i>
              <i className="fab fa-twitter text-xl text-purple-300 cursor-pointer"></i>
              <i className="fab fa-linkedin text-xl text-purple-300 cursor-pointer"></i>
              <i className="fab fa-github text-xl text-purple-300 cursor-pointer"></i>
              <i className="fab fa-youtube text-xl text-purple-300 cursor-pointer"></i>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 transform transition-all">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20modern%20smartphone%20displaying%20a%20link-in-bio%20app%20interface%20with%20multiple%20social%20media%20links%2C%20profile%20photo%2C%20and%20customizable%20buttons.%20The%20interface%20has%20a%20sleek%2C%20modern%20design%20with%20gradient%20purple%20background%20and%20clean%20white%20cards.%20High%20quality%203D%20render%20with%20soft%20shadows%20and%20reflections.&width=600&height=600&seq=1&orientation=squarish" 
                alt="LinkPro App Interface" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white bg-opacity-5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Enhanced Linking</h2>
            <p className="text-lg text-purple-200 max-w-3xl mx-auto">Everything you need to create, customize, and optimize your link in bio page for maximum engagement.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
                <i className="fas fa-share-alt text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Social Media Integration</h3>
              <p className="text-purple-200">Connect all your social profiles and content platforms in one centralized hub with automatic syncing.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Powerful Analytics with Smart Insights</h3>
              <p className="text-purple-200">Track visitor behavior, click-through rates, and engagement metrics to optimize your link performance.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
                <i className="fas fa-palette text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Customizable Bio Templates in Easily</h3>
              <p className="text-purple-200">Choose from dozens of professionally designed templates and customize colors, fonts, and layouts to match your brand.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
                <i className="fas fa-user-circle text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Profile Bio Optimization</h3>
              <p className="text-purple-200">Enhance your profile with advanced customization options, animated elements, and premium integrations.</p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=A%20collection%20of%20social%20media%20icons%20and%20app%20logos%20arranged%20in%20a%20grid%20with%20a%20glowing%20purple%20gradient%20background.%20Modern%2C%20minimalist%20design%20with%20clean%20white%20icons%20of%20popular%20platforms%20like%20Instagram%2C%20Twitter%2C%20YouTube%2C%20TikTok%2C%20and%20others.%20Professional%203D%20render%20with%20soft%20shadows.&width=600&height=400&seq=2&orientation=landscape" 
                alt="Social Media Integration" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">All Your Links in One Generation</h3>
              <p className="text-lg text-purple-200 mb-6">Consolidate your entire online presence into a single, powerful link. No more cluttered bios or difficult choices about which link to share.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-400 mt-1 mr-3"></i>
                  <span>Connect unlimited social profiles and websites</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-400 mt-1 mr-3"></i>
                  <span>Automatically import content from your platforms</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-400 mt-1 mr-3"></i>
                  <span>Organize links with custom categories and sections</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-purple-400 mt-1 mr-3"></i>
                  <span>Schedule limited-time links for promotions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unleashing Digital Success: Voices from Our Content Creators</h2>
            <p className="text-lg text-purple-200 max-w-3xl mx-auto">Join thousands of creators who have transformed their online presence with our platform.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20creative%20male%20with%20a%20friendly%20smile%20against%20a%20simple%20purple%20gradient%20background.%20High%20quality%20portrait%20with%20good%20lighting%2C%20business%20casual%20attire%2C%20modern%20and%20clean%20look.&width=100&height=100&seq=3&orientation=squarish" 
                  alt="User Avatar" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Alex Morgan</h4>
                  <p className="text-sm text-purple-300">Digital Creator</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
              </div>
              <p className="text-purple-100">"Since switching to LinkPro, my click-through rates have increased by 45%. The analytics tools helped me understand exactly what my audience is interested in."</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20creative%20female%20with%20a%20confident%20smile%20against%20a%20simple%20purple%20gradient%20background.%20High%20quality%20portrait%20with%20good%20lighting%2C%20business%20casual%20attire%2C%20modern%20and%20clean%20look.&width=100&height=100&seq=4&orientation=squarish" 
                  alt="User Avatar" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-purple-300">Content Creator</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star-half-alt text-yellow-400"></i>
                </div>
              </div>
              <p className="text-purple-100">"The customization options are incredible. I was able to create a bio page that perfectly matches my brand identity, and my followers love how easy it is to find all my content."</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20young%20creative%20male%20with%20glasses%20and%20a%20friendly%20expression%20against%20a%20simple%20purple%20gradient%20background.%20High%20quality%20portrait%20with%20good%20lighting%2C%20business%20casual%20attire%2C%20modern%20and%20clean%20look.&width=100&height=100&seq=5&orientation=squarish" 
                  alt="User Avatar" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">David Chen</h4>
                  <p className="text-sm text-purple-300">Tech Influencer</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
              </div>
              <p className="text-purple-100">"As a tech reviewer, I'm constantly sharing different products and resources. LinkPro has simplified my workflow and given me valuable insights into what my audience engages with most."</p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Gallery Images */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20smartphone%20displaying%20a%20modern%20link-in-bio%20page%20with%20a%20purple%20gradient%20theme%2C%20showing%20social%20media%20icons%20and%20content%20thumbnails.%20Clean%2C%20professional%20interface%20design%20with%20good%20lighting%20and%20composition.&width=300&height=400&seq=6&orientation=portrait" 
                alt="LinkPro Example" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20smartphone%20displaying%20a%20modern%20link-in-bio%20page%20with%20a%20blue%20gradient%20theme%2C%20showing%20social%20media%20icons%20and%20content%20thumbnails.%20Clean%2C%20professional%20interface%20design%20with%20good%20lighting%20and%20composition.&width=300&height=400&seq=7&orientation=portrait" 
                alt="LinkPro Example" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20smartphone%20displaying%20a%20modern%20link-in-bio%20page%20with%20a%20pink%20gradient%20theme%2C%20showing%20social%20media%20icons%20and%20content%20thumbnails.%20Clean%2C%20professional%20interface%20design%20with%20good%20lighting%20and%20composition.&width=300&height=400&seq=8&orientation=portrait" 
                alt="LinkPro Example" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=A%20smartphone%20displaying%20a%20modern%20link-in-bio%20page%20with%20a%20dark%20theme%2C%20showing%20social%20media%20icons%20and%20content%20thumbnails.%20Clean%2C%20professional%20interface%20design%20with%20good%20lighting%20and%20composition.&width=300&height=400&seq=9&orientation=portrait" 
                alt="LinkPro Example" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white bg-opacity-5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Budget-Friendly Pricing Alternatives</h2>
            <p className="text-lg text-purple-200 max-w-3xl mx-auto">Choose the perfect plan for your needs. No hidden fees, cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-500 text-xs px-3 py-1 rounded-bl-lg">Popular</div>
              <h3 className="text-xl font-bold mb-2">Free Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-purple-300">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-400 mt-1 mr-3"></i>
                  <span>Basic link in bio page</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-400 mt-1 mr-3"></i>
                  <span>Up to 5 custom links</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-400 mt-1 mr-3"></i>
                  <span>Standard analytics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-400 mt-1 mr-3"></i>
                  <span>Basic customization</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full font-medium transition-all cursor-pointer !rounded-button whitespace-nowrap">Get Started</button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all transform scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white text-purple-700 text-xs px-3 py-1 rounded-bl-lg font-medium">Recommended</div>
              <h3 className="text-xl font-bold mb-2">Pro Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$24</span>
                <span className="text-purple-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-white mt-1 mr-3"></i>
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-white mt-1 mr-3"></i>
                  <span>Unlimited custom links</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-white mt-1 mr-3"></i>
                  <span>Advanced analytics & insights</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-white mt-1 mr-3"></i>
                  <span>Premium themes & customization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-white mt-1 mr-3"></i>
                  <span>Remove LinkPro branding</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-purple-700 rounded-full font-medium hover:bg-opacity-90 transition-all cursor-pointer !rounded-button whitespace-nowrap">Choose Pro</button>
            </div>

            {/* Business Plan */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2">Business Plan</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-purple-300">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-400 mt-1 mr-3"></i>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-400 mt-1 mr-3"></i>
                  <span>Team collaboration features</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-400 mt-1 mr-3"></i>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-400 mt-1 mr-3"></i>
                  <span>API access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-400 mt-1 mr-3"></i>
                  <span>Custom domain support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full font-medium transition-all cursor-pointer !rounded-button whitespace-nowrap">Choose Business</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unlock the Power of AI, Create Your SmartBio Now!</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">Join thousands of creators who have simplified their online presence and boosted their engagement with our platform.</p>
            <button className="px-8 py-4 bg-white text-purple-700 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all shadow-lg cursor-pointer !rounded-button whitespace-nowrap">Get Started for Free</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold flex items-center mb-4">
                <i className="fas fa-link mr-2 text-purple-300"></i>
                <span>LinkPro</span>
              </div>
              <p className="text-purple-200 mb-4">The ultimate link in bio solution for creators and professionals.</p>
              <div className="flex space-x-4">
                <i className="fab fa-twitter text-purple-300 cursor-pointer"></i>
                <i className="fab fa-instagram text-purple-300 cursor-pointer"></i>
                <i className="fab fa-facebook text-purple-300 cursor-pointer"></i>
                <i className="fab fa-linkedin text-purple-300 cursor-pointer"></i>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors cursor-pointer">Features</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors cursor-pointer">Pricing</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors cursor-pointer">Integrations</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors cursor-pointer">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors cursor-pointer">About</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors cursor-pointer">Blog</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors cursor-pointer">Careers</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Stay Updated</h4>
              <p className="text-purple-200 mb-4">Subscribe to our newsletter for the latest updates and features.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-full bg-indigo-800 border border-purple-500 border-opacity-30 focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-purple-300 w-full"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-r-full cursor-pointer !rounded-button whitespace-nowrap">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-purple-800 text-center text-purple-300 text-sm">
            <p>© 2025 LinkPro. All rights reserved. | <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a></p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;