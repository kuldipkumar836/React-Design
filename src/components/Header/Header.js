import React, { Component } from 'react';
import './Header.css'
const Header = () => {
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
           <i className = "fa fa-bars" aria-hidden = "true"></i>
       </div>     
      </div>
    );
}
export default Header;