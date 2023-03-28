import Header from "./components/header/header";
import Hero from "./components/Hero/hero";
import "./App.css";
import Slider from "./components/slider/slider";
import Virtual from "./components/virtual/Virtual";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonial/Testimonials";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials />
      <Footer/>
    </div>
  );
}

export default App;
