
import logo from "./../../../public/santiAraoz.svg"
function Navar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-xl-top">
  <div className="offcanvas-lg offcanvas-end flex-grow-1 ">
    <div className="row m-0">

    <ul className="col-xl-2 d-flex">
    <a className="navbar-brand" href="#"><img src={logo} alt="" className="ms-5 w-50"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </ul>
    <ul className="col-xl-7">

    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      
        <a className="nav-link" href="#presentacion">inicio</a>
        <a className="nav-link" href="#infoMia">sobre mi</a>
        <a className="nav-link" href="#proyectos">Proyectos</a>
      
      </div>
    </div>
    </ul>
    </div>
  </div>
</nav>
  );
}
export default Navar;
