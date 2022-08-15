import '../../App';
import { CartWidget } from './CartWidget/CartWidget';
import './NavBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
  return(
    <div className='navDiv'><nav className=' navbar navbar-expand-lg navbar-light '>
    <div>< img className='imgNav'src='https://th.bing.com/th/id/R.fc763da7b46443f858b5983305867b11?rik=mAX1Eh8EYgJzxA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f13%2fAvengers-Movie-Logo-PNG-Image.png&ehk=bFuzxM5albpam5szw%2b1r6NHZm2cpNWxJ3YFdMH7JpxA%3d&risl=&pid=ImgRaw&r=0'/></div>
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
          <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categoria
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to='/categoria/game'>Game</NavLink></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><NavLink className="dropdown-item" to='/categoria/comic'>Comic</NavLink></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="---"></input>
        <button className='btn btn-outline-success' type="submit">Buscar</button>
      </form>
    </div>
    <NavLink to='/cart'><CartWidget></CartWidget></NavLink>
  </div>
</nav></div>
  );
}
