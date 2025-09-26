import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import Hero2 from "../components/Hero2";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import HorizontalScroll from "../components/HorizontalScroll";

const LinkBioLanding = () => {
  const [scrolled, setScrolled] = useState(false);

  // Create refs for each section
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const ctaRef = useRef(null);
  const footerRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        ref={navRef}
        className={`w-full fixed top-0 left-0 z-10 py-1 transition-all duration-500 ${scrolled
          ? "bg-indigo-500/30 backdrop-blur-lg backdrop-saturate-150 border-b border-white/10 shadow-lg"
          : "bg-transparent"
          }`}
      >
        <NavBar
          onNavClick={{
            heroRef: () => scrollTo(heroRef),
            featuresRef: () => scrollTo(featuresRef),
            pricingRef: () => scrollTo(pricingRef),
            aboutRef: () => scrollTo(ctaRef),
            footerRef: () => scrollTo(footerRef),
          }}
        />
      </nav>

      <div ref={heroRef}>
        <Hero2 />
      </div>

      <div ref={featuresRef}>
        <Features />
      </div>

      <div ref={pricingRef}>
        <Pricing />
      </div>

      <div ref={ctaRef}>
        <Cta />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default LinkBioLanding;
