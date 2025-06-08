import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

const LinkBioLanding = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Navigation */}
      <nav
        className={`w-full fixed top-0 left-0 z-10 py-1 transition-all duration-500 ${
          scrolled
            ? "bg-indigo-500/30 backdrop-blur-lg backdrop-saturate-150 border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <NavBar />
      </nav>


      {/* hero */}
  {/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600 text-white pt-32 pb-20">
  {/* Decorative elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  </div>

  <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
    <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 max-w-4xl leading-tight">
      Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Link in Bio</span> with One Click
    </h1>
    
    <p className="text-xl text-center mb-10 max-w-2xl text-indigo-100">
      Create a professional bio link page that showcases all your content
      in one place. Perfect for creators, influencers, and professionals.
    </p>
    
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
      <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold whitespace-nowrap hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
        Get Started Free
      </button>
      <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold whitespace-nowrap hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
        See Demo
      </button>
    </div>
    
    <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      <img
        src="https://readdy.ai/api/search-image?query=modern%20user%20interface%20for%20a%20link%20in%20bio%20tool%20showing%20a%20clean%20dashboard%20with%20profile%20preview%2C%20social%20media%20links%2C%20and%20analytics%20displayed%20on%20a%20laptop%20screen%20with%20blurred%20gradient%20background&width=800&height=450&seq=123&orientation=landscape"
        alt="LinkBio Dashboard Preview"
        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>

  {/* Bottom wave shape */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg 
      viewBox="0 0 1440 120" 
      className="w-full"
      preserveAspectRatio="none"
    >
      <path 
        fill="#FFFFFF" 
        fillOpacity="1" 
        d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,117.3C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
      ></path>
    </svg>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powerful Features for{" "}
              <span className="relative inline-block">
                <span className="text-primary">Enhanced Hiring</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform offers everything you need to create an impressive
              online presence and streamline your hiring process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-indigo-100  rounded-full flex items-center justify-center mr-4">
                  <i className="ri-magic-line text-indigo-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    AI-Powered Bio Theme Generator
                  </h3>
                  <p className="text-gray-600">
                    Let our AI create the perfect bio page theme based on your
                    content and brand. Customize colors, fonts, and layouts with
                    just a few clicks.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src="https://readdy.ai/api/search-image?query=AI%20theme%20generator%20interface%20with%20color%20palette%20selection%20and%20template%20options%2C%20clean%20modern%20UI%20design%20with%20purple%20accents&width=400&height=200&seq=124&orientation=landscape"
                  alt="AI Theme Generator"
                  className="w-full h-auto rounded-lg object-top"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-share-line text-indigo-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Seamless Social Media Integration
                  </h3>
                  <p className="text-gray-600">
                    Connect all your social profiles in one place. Our platform
                    supports over 30+ platforms with automatic icon and link
                    formatting.
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-5 gap-3">
                {[
                  "instagram",
                  "twitter-x",
                  "linkedin",
                  "youtube",
                  "tiktok",
                  "facebook",
                  "pinterest",
                  "snapchat",
                  "discord",
                  "github",
                ].map((icon) => (
                  <div
                    key={icon}
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg"
                  >
                    <i
                      className={`ri-${icon}-fill text-2xl ${
                        icon === "instagram"
                          ? "text-pink-500"
                          : icon === "linkedin"
                          ? "text-blue-600"
                          : icon === "youtube"
                          ? "text-red-600"
                          : icon === "facebook"
                          ? "text-blue-700"
                          : icon === "pinterest"
                          ? "text-red-700"
                          : icon === "snapchat"
                          ? "text-yellow-400"
                          : icon === "discord"
                          ? "text-indigo-600"
                          : icon === "github"
                          ? "text-gray-800"
                          : "text-black"
                      }`}
                    ></i>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-line-chart-line text-indigo-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Insightful Analytics with Smart Search
                  </h3>
                  <p className="text-gray-600">
                    Track visitor engagement, click-through rates, and
                    conversion metrics. Make data-driven decisions to optimize
                    your bio link performance.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src="https://readdy.ai/api/search-image?query=analytics%20dashboard%20with%20charts%20and%20graphs%20showing%20user%20engagement%20metrics%2C%20clean%20modern%20UI%20with%20purple%20accent%20colors%20and%20white%20background&width=400&height=200&seq=125&orientation=landscape"
                  alt="Analytics Dashboard"
                  className="w-full h-auto rounded-lg object-top"
                />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-profile-line text-indigo-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Premium Profile Bio Optimization
                  </h3>
                  <p className="text-gray-600">
                    Enhance your professional profile with customizable
                    templates, rich media embeds, and responsive design for all
                    devices.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20profile%20page%20with%20customizable%20sections%2C%20profile%20photo%2C%20and%20social%20media%20links%20in%20a%20clean%20modern%20design%20with%20purple%20accents&width=400&height=200&seq=126&orientation=landscape"
                  alt="Profile Optimization"
                  className="w-full h-auto rounded-lg object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Unleashing Digital Success: Voices from{" "}
              <span className="relative inline-block">
                <span className="text-primary">Our Content Creators</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from professionals who have transformed their online presence
              with our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20female%20marketing%20executive%20with%20confident%20smile%2C%20business%20attire%2C%20neutral%20background&width=80&height=80&seq=127&orientation=squarish"
                  alt="Sarah Johnson"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">
                    Digital Marketing Specialist
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">
                "LinkBio transformed how I present my portfolio online. The AI
                theme generator created a perfect match for my brand, and the
                analytics help me understand which content performs best."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20male%20tech%20entrepreneur%20with%20glasses%2C%20casual%20business%20attire%2C%20neutral%20background&width=80&height=80&seq=128&orientation=squarish"
                  alt="Michael Chen"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Tech Entrepreneur</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                  <i className="ri-star-half-fill"></i>
                </div>
              </div>
              <p className="text-gray-700">
                "As someone managing multiple projects, having all my links in
                one professional bio has been a game-changer. The setup was
                incredibly easy, and the customization options are extensive."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20female%20content%20creator%20with%20creative%20style%2C%20casual%20attire%2C%20neutral%20background&width=80&height=80&seq=129&orientation=squarish"
                  alt="Emma Rodriguez"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-600">Content Creator</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">
                "The social media integration is seamless! I can showcase all my
                platforms and track which ones drive the most traffic. It's
                helped me focus my content strategy and grow my audience
                significantly."
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20looking%20man%20in%20business%20casual%20attire%20working%20on%20laptop%20with%20digital%20marketing%20materials%20visible%2C%20neutral%20office%20background&width=400&height=250&seq=130&orientation=landscape"
                alt="Professional using LinkBio"
                className="w-full h-auto rounded-lg mb-4 object-top"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://readdy.ai/api/search-image?query=woman%20entrepreneur%20reviewing%20analytics%20on%20tablet%20with%20coffee%20cup%20nearby%2C%20modern%20workspace%20with%20minimal%20decor&width=400&height=250&seq=131&orientation=landscape"
                alt="Entrepreneur using LinkBio"
                className="w-full h-auto rounded-lg mb-4 object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Budget-Friendly Pricing{" "}
              <span className="relative inline-block">
                <span className="text-primary">Alternatives</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your needs. All plans include
              our core features with no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Free Plan
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-500 text-base">/month</span>
                </div>
                <ul className="space-y-3 mb-6 text-gray-700">
                  {[
                    "Basic bio link page",
                    "Up to 5 social links",
                    "Standard templates",
                    "Basic analytics",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-primary transform scale-105 hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                MOST POPULAR
              </div>
              <div className="p-8 pt-14">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Pro Plan
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$24</span>
                  <span className="text-gray-500 text-base">/month</span>
                </div>
                <ul className="space-y-3 mb-6 text-gray-700">
                  {[
                    "Advanced bio link page",
                    "Unlimited social links",
                    "Premium templates",
                    "Detailed analytics",
                    "Custom domain",
                    "AI theme generator",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Business Plan
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$49</span>
                  <span className="text-gray-500 text-base">/month</span>
                </div>
                <ul className="space-y-3 mb-6 text-gray-700">
                  {[
                    "Everything in Pro",
                    "Team collaboration",
                    "Priority support",
                    "Advanced integrations",
                    "White-label solution",
                    "API access",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-medium transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-gray-600 max-w-2xl mx-auto text-sm">
            <p>
              All plans come with a{" "}
              <span className="font-medium text-gray-800">
                14-day free trial
              </span>
              . No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="footer-gradient text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Unlock the Power of AI, <br />
            Create Your SmartBio Now!
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their
            online presence with our innovative platform.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-button font-medium text-lg whitespace-nowrap">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white text-lg font-medium mb-4">LinkBio</h3>
              <p className="mb-4">
                The ultimate link in bio tool for professionals and creators.
              </p>
              <div className="flex space-x-4">
                {["twitter-x", "facebook", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-400 hover:text-white"
                    >
                      <i className={`ri-${social}-fill text-xl`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                {["Features", "Pricing", "Testimonials", "Templates"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Blog", "Help Center", "Tutorials", "API Docs"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Subscribe</h3>
              <p className="mb-4">Get the latest updates and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-button w-full border-none"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r-button whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 LinkBio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <a key={item} href="#" className="hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LinkBioLanding;
