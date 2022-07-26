import { NavLink } from 'react-router-dom';
import '../App';
import './NavBar.css';

export const NavBar = () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink class="dropdown-item" to='/'>Home</NavLink></li>
          </ul>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <NavLink class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categoria
          </NavLink>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink class="dropdown-item" to='/categoria/:Game'>Game</NavLink></li>
            <li><NavLink class="dropdown-item" to='/categoria/:Comic'>Comic</NavLink></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="---"></input>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
  );
}

