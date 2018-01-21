import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="nav-container" >
            <li><a href="/" title="Inicio">inicio</a></li>
            <li><a href="/showroom" title="Showroom">showroom</a></li>
            <li><a href="/admin" title="Admin">admin</a></li>
          </ul>
        </nav>
        <h1>Peter Hills</h1>
        <img src="/public/img/logoBlack.png" alt="Logo Peter Hills"></img>
      </div>
    );
  };
};


ReactDOM.render(
  <Header />,
  document.getElementById('root')
);