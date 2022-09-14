import '../../App';
import { CartWidget } from './CartWidget/CartWidget';
import './NavBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';



export const NavBar = () => {
  return(
    <div className='navDiv'><nav className=' navbar navbar-expand-lg navbar-light '>
    <div>< img className='imgNav'src='https://i.postimg.cc/cJmBsFDP/Morado-Verde-Bonito-y-Tierno-Gaming-y-Tecnolog-a-Logotipo-1.png'></img></div>
  <div className='container-fluid'>
    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className='nav-item'>
          <NavLink className="nav-link active" aria-current="page" to='/' >Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categoria
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to='/categoria/Game'>Game</NavLink></li>
            <li><NavLink className="dropdown-item" to='/categoria/Comic'>Comic</NavLink></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><NavLink className="dropdown-item" to='/categoria/Clothes'>Clothes</NavLink></li>
          </ul>
        </li>
        <li><NavLink className="nav-link active" aria-current="page"  to='/'>Contacto</NavLink></li>
      </ul>
      <NavLink to='/cart'><CartWidget></CartWidget></NavLink>
    </div>
    </div>
</nav></div>
  );
}
