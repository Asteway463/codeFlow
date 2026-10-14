
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Pricing from "./component/Pricing";
import Features from "./component/Features";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
