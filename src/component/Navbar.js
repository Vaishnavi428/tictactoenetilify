

function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg text-white bg-dark">
    <div className="container">
      <a className="navbar-brand text-warning" href="#">Fashion Club</a>
      <div className="collapse navbar-collapse ">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Mens</a></li>
                <li><a className="dropdown-item" href="#">Womens</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Kids</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Meeting</a>
          </li>
        </ul>
       
      </div>
      <form className=" d-flex form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>

)
}

export default Navbar;