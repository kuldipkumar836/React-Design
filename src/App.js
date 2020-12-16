import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.css'

import Header from './components/Header/Header';                               
 import Main from './components/Main/Main'
 import Service from './components/Service/Service'
 import Footer from './components/Footer/Footer'
 import Slide from './components/Slider/Slide';
function App() {
  return (
    <div className = "container">
      <div className ="section mb-5">
      <Header />
      </div>
       <div className ="section mb-5">
      <Slide />
      </div> 
       <div className ="section mb-5">
        <Main />
      </div>
      <div className ="section mb-5">
        <Service />
      </div>
      <div className ="section">
        <Footer />
      </div> 
      
    </div>
  );
}

export default App;
