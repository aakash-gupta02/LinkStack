import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero2 from "../components/Hero2";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import HorizontalScroll from "../components/HorizontalScroll";

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

      <Hero2/>

      <Features />
<HorizontalScroll/>
      {/* Pricing Section */}
      <Pricing />

      {/* CTA Section */}
<Cta/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LinkBioLanding;
