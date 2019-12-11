import React, { Component } from 'react';
import '../Header/styles.css';

class Header extends Component {
  render() {
    return (
        <nav class="primary container" id="nav">
               
            <div class="spacer"></div>
    
                <ul>
                    <li><a href='#nav'>HOME</a></li>
                    <li><a href='#'>NOTAS</a></li>
                    <li><a href='#'>MATÉRIAS</a></li>
                </ul>
        </nav>
    );
  }
}

export default Header;