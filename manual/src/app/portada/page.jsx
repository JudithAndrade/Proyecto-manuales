import React from 'react';
import Image from 'next/image';
import logoEnsenada from '../../assets/image/logoensenada.png';
import tecnologicoNacional from '../../assets/image/tecnologiconacional.png';

const Portada = () => {
  return (
    <div className="portada-container">
      <div className="portada-header">
        <div className="logo-left">
          <Image src={logoEnsenada} alt="Logo Ensenada" width={100} height={100} />
        </div>
        <div className="logo-center">
          <Image src={tecnologicoNacional} alt="Tecnológico Nacional" width={100} height={100} />
        </div>
        <div className="portada-text">
          <h1>Tecnológico Nacional de México</h1>
          <h3>Instituto Tecnológico de Ensenada</h3>

          <div  className="contenido">
          <p><strong>Docente:</strong></p>
          <ul>
            <li>ING. XENIA PADILLA MADRID</li>
            <li> GUILLERMO ALEJANDRO CHA</li>
          </ul>
          <p><strong>Proyecto:</strong> QUEVEDODENTAL</p>
          <p><strong>Grupo:</strong> 8SE</p>
          <p><strong>Nombre de los Integrantes:</strong></p>
          <ul>
            <li>Judith Adilene Andrade Perez</li>
            <li>Aileen Lizet Cruz Sánchez</li>
            <li>José Fabián Rauda Rivera</li>
            <li>Andrés Manuel Hernández Talamantes</li>
            <li>Luis Angel Murillo Salinas</li>
          </ul>

          </div>
         
        </div>
        <p className="fecha">Ensenada, Baja California | 05 Junio 2024</p>
      </div>
    </div>
  );
}

export default Portada;
