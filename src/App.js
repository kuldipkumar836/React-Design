import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import Footer from './Design-3/Footer/Footer';
import Feature3 from './Design-3/feature/Feature3';
import Navbar from './Design-3/Nav-bar/Navbar';


function App() {
  return (
    <div className = "container-fluid">
     <div className ="section mb-5">
     <Navbar />
      </div> 
     <div className ="section mb-5">
      <Feature3 />
      </div> 
      <div className ="section mb-5">
      <Footer />
      </div>   
    </div>
  );
}

export default App;
