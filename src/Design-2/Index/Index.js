import React  from 'react';
import './Index.css';

const Index = () => {
    return (
        <div className ="container-fluid">
         <div className = "logo">
             <img src ="/img/work1.jpg" className ="img-responsive" />
             <div className= "link">
                 <a> Home </a>
                 <a> Services </a>
                 <a> Features </a>
                 <a> About Us </a>
                 <a> Contact Us </a>
             </div>
         </div>
        </div>
    );
}

export default Index;