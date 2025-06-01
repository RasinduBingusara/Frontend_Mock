import logo from './logo.svg';
import './App.css';
import Hero from './component/hero';
import Features from './component/Features';
import Service from './component/Service';
import WhoWeServe from './component/WhoWeServe';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';
import NavigationBar from './component/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Features />
      <Service />
      <WhoWeServe />
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
