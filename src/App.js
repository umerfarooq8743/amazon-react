import "./App.css";
import Header from "./componenets/Header/Header";
import Hero from "./componenets/Hero/Hero";
import Slider from "./componenets/Slider/Slider";
import Virtual from "./componenets/Virtual/Virtual";
import Products from "./componenets/Products/Products";
import Testimonial from "./componenets/Testimonial/Testimonial";
import Footer from "./componenets/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
