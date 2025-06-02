import empresa from "./../../public/logodelaempresa.png";
import empresa2 from "./../../public/matesRicos.jpg";
import empresa3 from "./../../public/sa1.jpg";
import empresa4 from "./../../public/santiaraoz.jpg";
import network from  "./../../public/network.svg"

const InfoMia = () => {
  return (
    <div className="pantalla">
      <div className="showFrame">
        <h2 className="text-center mb-5 fs1">Mi Trayectoria Profesional</h2>
          <div className="container d-flex infoMiaCel">
            <div className="row">
                <div className="col-xl-6 ">
                  <img
                    src={empresa}
                    alt="santi araoz distribuidora"
                    className="saImg"
                  />
                </div>
                <div className="col-xl-6 pb-2">
                  <img
                    src={empresa2}
                    alt="santi araoz distribuidora"
                    className="saImg imgBanner"
                  />
                </div>
                <div className="col-xl-6">
                  <img
                    src={empresa3}
                    alt="santi araoz distribuidora"
                    className="saImg imgBanner"
                  />
                </div>
                <div className="col-xl-6">
                  <img
                    src={empresa4}
                    alt="santi araoz distribuidora"
                    className="saImg imgBanner"
                  />
                </div>
            
            </div>
            <div className=" ">
              <h2 className="fs-1">Distribuidora Santi Araoz</h2>
              <p className="">
                Con una década de experiencia en la empresa
                familiar Distribuidora Santi Araoz, he desempeñado roles
                cruciales que me han brindado una perspectiva integral del
                negocio. Desde la logística de distribución y la venta directa
                hasta la administración y la gestión de personal,
                <spam className="text-danger-emphasis">
                  he cultivado habilidades esenciales para el trabajo en equipo,
                  la comunicación y la resolución de conflictos
                </spam>
                . Mi capacidad para
                <spam className="text-danger-emphasis"> analizar situaciones</spam>,
                <spam className="text-danger-emphasis"> identificar oportunidades</spam> y tomar
                <spam className="text-danger-emphasis"> decisiones efectivas</spam> se evidencia en
                la creación de una nueva cartera de 100 clientes privados,
                representando un 40% del ingreso total, y en la exitosa
                incorporación de nuevos productos al catálogo. Esta experiencia
                me ha fortalecido en la <spam className="text-danger-emphasis">adaptabilidad</spam>,
                la <spam className="text-danger-emphasis">proactividad</spam> y la
                <spam className="text-danger-emphasis"> orientación a resultados</spam>, cualidades
                que considero valiosas para mi transición al campo de la
                programación.
              </p>
              <div className="d-flex justify-content-evenly">
                <div className="d-flex flex-column justify-content-center">
                  <img
                    src={network}
                    alt="trabajo en equipo"
                    className="imgSlider ms-4"
                  />
                  <p className="text-center w-75">trabajo en Equipo</p>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <img
                    src="https://www.svgrepo.com/show/358645/work-item.svg"
                    alt="decisiones efectivas"
                    className="imgSlider "
                  />
                  <p className="w-50 text-center">decisiones Efectivos</p>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <img
                    src="https://www.svgrepo.com/show/444346/gui-collaboration.svg"
                    alt="comunicacion"
                    className="imgSlider ms-4"
                  />
                  <p className="w-50 text-center">Excelente Comunicación</p>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <img
                    src="https://www.svgrepo.com/show/308010/productivity-ability-talent-productive.svg"
                    alt="comunicacion"
                    className="imgSlider ms-4"
                  />
                  <p className="w-75 text-center">Orientado a resultados</p>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default InfoMia;
