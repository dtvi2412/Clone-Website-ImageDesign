import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Content from './Components/Content/Content';
import Follow from './Components/Follow/Follow';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Content/>
      <Follow/>
      <Footer/>
    </div>
  );
}

export default App;
