"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import '../app/globals.css';

const Landing = () => {
  return (
    <>
      <main className="h-screen">
        <Header />
        <Hero />
        <About />
        <Footer />
      </main>
    </>
  );
};

export default Landing;
