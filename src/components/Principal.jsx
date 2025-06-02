
import Carrusel from "./Carrusel";
import InfoMia from "./InfoMia";
import Proyectos from "./Proyectos";

const Principal = () => {
  return (
    <div className="mainPage">
    <div className="bg-body-tertiary">
      <div className="container pantalla d-flex align-content-center flex-wrap" id="presentacion">
        <div className=" row h-75 celContainer">
          <div className="col-xl-4 d-flex flex-wrap justify-content-center  align-content-center ">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_640.jpg"
              className="w-75 rounded shadow-lg imgBanner"
              alt="..."
            />
          </div>
          <div className="col-xl-7 ms-4 align-content-center">
            <div className="">
            <h1 className="schibsted fs1 text-uppercase">
              Santi Araoz Daniel Emmauel
            </h1>
            </div>
            <p className="source fs-5">
              Técnico Superior en Desarrollo deSoftware recientemente graduado,con sólidos conocimientos enprogramación orientada a objetos,desarrollo web y bases de datos.Apasionado por la tecnología y laresolución de problemas, conmuchas ganas de aplicar misconocimientos en un entornoprofesional real. Me destaco porser autodidacta, responsable ycomprometido con el aprendizajecontinuo. 
            </p>
            <div className="d-flex justify-content-center">
              <Carrusel></Carrusel>
            </div>
            <div className="d-grid gap-2">
              <a className="btn btn-dark" href="https://cvdesignr.com/p/67e49697ccdf4?hl=es_ES" target="_blank"> curriculum</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="infoMia">
        <InfoMia />
      </div>
      <div className="container" id="proyectos">
       <Proyectos></Proyectos>
      </div>
    </div>
    </div>
  );
};

export default Principal;