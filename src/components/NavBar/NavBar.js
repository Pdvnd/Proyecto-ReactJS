import '../../App';
import { CartWidget } from './CartWidget/CartWidget';
import './NavBar.css';


export const NavBar = () => {
  return(
    <div className='navDiv'><nav className=' navbar navbar-expand-lg navbar-light '>
    <div>< img className='imgNav'src='https://th.bing.com/th/id/R.fc763da7b46443f858b5983305867b11?rik=mAX1Eh8EYgJzxA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f13%2fAvengers-Movie-Logo-PNG-Image.png&ehk=bFuzxM5albpam5szw%2b1r6NHZm2cpNWxJ3YFdMH7JpxA%3d&risl=&pid=ImgRaw&r=0'/></div>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Historias</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Juegos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Acción</a></li>
            <li><a className="dropdown-item" href="#">Rompecabezas</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Combate</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link Enable" href="#" tabindex="-1" aria-disabled="true">Más</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="---"></input>
        <button className='btn btn-outline-success' type="submit">Buscar</button>
      </form>
    </div>
    <CartWidget></CartWidget>
  </div>
</nav></div>
  );
}
