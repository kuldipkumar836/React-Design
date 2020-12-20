import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router } from 'react-router-dom'
import Main from './Design-4/Main/Main'
import Navigation from './Design-4/Navigation/Navigation';

function App() {
  Aos.init();
  return (
    <>
    <Router>
    <Navigation />
    </Router>
    <div className = "container-fluid">
     <div className ="section mb-5">
          <Main  />
      </div> 
      </div>
    

     {/* <div className ="section mb-5">
      <Feature3 />
      </div> 
      <div className ="section mb-5">
      <Footer />
      </div>    */}
      </>
  );
}

export default App;
