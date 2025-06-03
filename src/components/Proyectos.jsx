import { BrowserChrome, Easel, FileEarmarkText, Github } from "react-bootstrap-icons";
import cvPanel from "./../../public/proyectos/cvCreator/panel.png";
import ProveSotck from "./proveSotck";
import iset from "./../../public/proyectos/iset.png"

const Proyectos = () => {
  return (
    <div className="pantalla my-4">
      <div className="showFrame">

      <h2 className="fs-1 text-center">Proyectos</h2>
      <div className="infoMiaCel ">
        <div className="container  py-3 rounded shadow-lg">
          <div className="d-flex justify-content-between proyecCell">
            <img src={cvPanel} className="proyectoImg" alt="..." />
            <div className="card-body mx-3">
              <h5 className="card-title my-2 text-center">Cv Creator</h5>
              <p className="card-text">
                Este proyecto en Java, construido con una interfaz gráfica (GUI), resultó fundamental para internalizar el concepto de herencia. Visualizar la jerarquía de componentes y sus clases derivadas permitió aplicar los métodos de manera más eficiente y comprender su funcionamiento.
              </p>
              <div className="card-body text-center d-flex flex-column">
                <a href="https://github.com/manusantiaraoz/creadorcvjava/tree/master" className="btn btn-outline-dark my-2" target="_blank">
                  Proyecto <Github></Github>                 
                </a>
                <a href="https://drive.google.com/file/d/10866ARCMnKrPciFiOAgb8dzrGxXPzLKP/view?usp=sharing" className="btn btn-outline-dark my-2" target="_blank">
                  Documentación <FileEarmarkText></FileEarmarkText>
                </a>
              </div>
            </div>
          </div>
          </div>
          <div className="container  py-3 rounded shadow-lg">
          <div className="my-1 d-flex justify-content-between proyecCell">
            <ProveSotck></ProveSotck>
            <div className="card-body mx-3">
              <h5 className="card-title my-2 text-center">proveStock</h5>
              <p className="card-text">
                Proyecto realizado con nest.js y vite-react. asistente digital que facilita la organizacion de stock, proveedores, clientes y realizar e imprimir presupuestos. 
              </p>
              <div className="card-body text-center d-flex flex-column">
                <a href="https://github.com/manusantiaraoz/proveStock" className="btn btn-outline-dark my-2" target="_blank">
                  frontEnd <Github></Github>                 
                </a>
                <a href="https://github.com/manusantiaraoz/proveStock_backEnd" className="btn btn-outline-dark my-2" target="_blank">
                  backEnd <Github></Github>                 
                </a>
                <a href="https://drive.google.com/file/d/114iV8BD3brIF1AHvPa-C-_SyjBEAtAvM/view" className="btn btn-outline-dark my-2" target="_blank">
                  Documentación <FileEarmarkText></FileEarmarkText>
                </a>
              </div>
            </div>
          </div>
          </div>

      <div className="container  py-3 rounded shadow-lg ">
          <div className="my-1 d-flex justify-content-between proyecCell">
            <img src={iset} alt="iset Tucuman" className="proyectoImg imgIset"/>
            <div className="card-body  mx-3">
              <h5 className="card-title my-2 text-center">Pagina Institucional</h5>
              <p className="card-text">
                Proyecto realizado con vite-react. lo principal de esta pagina fue reordenar la información disponible en el sitio web original, dando una presentación más clara y fácil de acceder. 
              </p>
              <div className="card-body text-center d-flex flex-column">
                <a href="https://github.com/manusantiaraoz/proveStock" className="btn btn-outline-dark my-2" target="_blank">
                  deployd <BrowserChrome></BrowserChrome>               
                </a>
                <a href="https://github.com/manusantiaraoz/isetMaquetado" className="btn btn-outline-dark my-2" target="_blank">
                  proyecto <Github></Github>                 
                </a>
                <a href="https://docs.google.com/presentation/d/147oixVDA-LzOs0sZkpcB_rKxS6F20Pyw/edit?usp=sharing&ouid=108341026010999049250&rtpof=true&sd=true" className="btn btn-outline-dark my-2" target="_blank">
                  presentación <Easel></Easel>
                </a>
              </div>
            </div>
          </div>
      </div>
        
      </div>
      </div>
    </div>
  );
};

export default Proyectos;
