import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
    state = { clicked:false }
    handelClick = () =>{
        this.setState({ clicked:!this.state.clicked })
    }
    render(){
        return (
            <div className = "header">
             <div className = "logo">
                 Logo
             </div>
                  <nav>
                  <ul>
                  <li><a href='#link'>Home</a></li>
                  <li><a href='#link'>Services</a></li>
                  <li><a href='#link'>Contact</a></li>
                  <li><a href='#link'>About</a></li>
                  </ul>
              </nav> 
              <div className = "toggle-menu">
                 <i className = { this.state.clicked ? 'fa fa-times' : 'fa fa-bars' }></i>
             </div>     
            </div>
          );
    }
}
export default Header