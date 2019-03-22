import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (

        
<nav className="navbar navbar-dark fixed-top navbar-expand-md bg-dark">
    <a href="/" className="navbar-brand">Brand</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="collapsingNavbar3">
        <ul className="navbar-nav justify-content-center">
            <li className="nav-item active">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
        </ul>
        <div class="justify-content-center" id="socialHeader"></div>
    </div>
</nav>

    );
  }
}

export default Header;