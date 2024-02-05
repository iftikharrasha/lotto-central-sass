import React from "react";

import { HeroSection } from "../heroSection/HeroSection";
import { Lotteries } from "../lotriesSection/Lotteries";
import { Features } from "../features/Features";
import { AboutSection } from "../aboutSection/AboutSection";
import { CustomerSupport } from "../CustomerSupport/CustomerSupport";
import { FaqSection } from "../FaqSection/FaqSection";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
export const Home = () => {
  return (
    <main id="main" className="main" >

        <Navbar />
        <HeroSection />
        <Lotteries />
        <Features />
        <AboutSection />
        <FaqSection />
        <CustomerSupport />
        <Footer />
    </main>
  );
};
