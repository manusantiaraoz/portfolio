
import { Github, Linkedin, Phone } from 'react-bootstrap-icons';


const Footer = () => {
    return (
        <div className="container-fluid bg-black foot">
      <div className="row my-4">
        <div className='col-xl-6 text-light text-center d-flex flex-column justify-content-center '>
          <p>creado y diseñado por:</p>
          <h4 className="">
            &reg; Santi Araoz Daniel Emmauel
          </h4>
        </div>
        <div className='col-xl-6 text-light text-center'>
      <p className='fs-5'>Datos de Contactos</p>
          <p className="">
            <Phone></Phone>: 3815764023
          </p>
          <p className="">
            <Github></Github>: <a className='btn btn-dark' href="https://github.com/manusantiaraoz">/manusantiAraoz</a>
          </p>
          <p className="">
            <Linkedin></Linkedin>: <a className='btn btn-dark' href="https://www.linkedin.com/in/manusantiaraoz/">/manusantiAraoz</a>
          </p>
        </div>
          
      </div>
    </div>
    );
};

export default Footer;