import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import Index from './Design-2/Index/Index'
import Feature from './Design-2/Feature/Feature'
import Ads from './Design-2/Ads/Ads'

function App() {
  return (
    <div className = "container-fluid">
     <div className ="section mb-5">
     <Index />
      </div> 
     <div className ="section mb-5">
      <Feature />
      </div> 
      <div className ="section mb-5">
      <Ads />
      </div> 
    </div>
  );
}

export default App;
