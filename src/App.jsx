import "./styles/global.css";
import Nav          from "./components/Nav";
import Hero         from "./components/Hero";
import Features     from "./components/Features";
import HowItWorks   from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing      from "./components/Pricing";
import Blog         from "./components/Blog";
import FAQ          from "./components/FAQ";
import CTA          from "./components/CTA";
import Footer       from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Blog />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
