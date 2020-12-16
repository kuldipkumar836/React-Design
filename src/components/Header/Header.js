import React, { Component } from 'react';
import './Header.css'
const Header = () => {
    return (
      <div className = "header">
       <div className = "logo">
           <h1>U. P. Muncipality</h1>
       </div>
            <nav>
            <ul>
            <li><a href='#link'>Home</a></li>
            <li><a href='#link'>Services</a></li>
            <li><a href='#link'>Contact</a></li>
            <li><a href='#link'>About</a></li>
            </ul>
        </nav>      
      </div>
    );
}
export default Header;