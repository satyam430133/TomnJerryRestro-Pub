import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "../Home";
import Shop from "../Shop"
import Contact from "../Contact";
import About from "../About"
const Navbar = () => {
  return (
    <Router>
     <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <img id="navbarlogo" src="https://pngimg.com/d/tom_and_jerry_PNG60.png" alt="Loading" /> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"> <i class="fa-solid fa-bars-staggered fa-xl"> </i> </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-item" to="home">  <a class="nav-link active" aria-current="page" href="#"> Home </a> </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-item" to="shop">  <a class="nav-link active" aria-current="page" href="#"> Shop </a> </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-item" to="about">  <a class="nav-link active" aria-current="page" href="#"> About </a> </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-item" to="contact">  <a class="nav-link active" aria-current="page" href="#"> Contact </a> </Link>
        </li>
        </ul>
      <form class="d-lg-flex align-baseline">
        <input class="form-control me-3 h-100" type="search" placeholder="Search" aria-label="Search" /> 
        <button class="btn btn-outline-success" type="submit">Search</button>
        <button class="btn btn-outline-success" type="submit"> <i class="fa-solid fa-cart-shopping"></i> </button> 
        <button class="btn btn-outline-success" type="submit"> <i class="fa-regular fa-heart"></i> </button> 
      </form>
    </div>
  </div>
</nav>
<Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
