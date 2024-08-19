'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import principaln1 from '../../assets/image/principaln1.png';
import principaln2 from '../../assets/image/principaln2.png';
import principaln3 from '../../assets/image/principaln3.png';
import principaln4 from '../../assets/image/principaln4.png';
import principaln5 from '../../assets/image/principaln5.png';

import proceso1 from '../../assets/image/proceso1.png';
import proceso2 from '../../assets/image/proceso2.png';
import proceso3 from '../../assets/image/proceso3.png';
import proceso5 from '../../assets/image/proceso5.png';
import proceso6 from '../../assets/image/proceso6.png';
import proceso7 from '../../assets/image/proceso7.png';
import proceso8 from '../../assets/image/proceso8.png';
import proceso10 from '../../assets/image/proceso10.png';
import proceso11 from '../../assets/image/proceso11.png';
import proceso12 from '../../assets/image/proceso12.png';

import vistatablet1 from '../../assets/image/vistatablet1.png';
import vistatablet2 from '../../assets/image/vistatablet2.png';
import vistatablet3 from '../../assets/image/vistatablet3.png';
import vistatablet4 from '../../assets/image/vistatablet4.png';
import vistatablet5 from '../../assets/image/vistatablet5.png';
import vistatablet6 from '../../assets/image/vistatablet6.png';
import vistatablet7 from '../../assets/image/vistatablet7.png';
import vistatablet8 from '../../assets/image/vistatablet8.png';
import vistatablet9 from '../../assets/image/vistatablet9.png';
import vistatablet10 from '../../assets/image/vistatablet10.png';
import vistatablet11 from '../../assets/image/vistatablet11.png';
import vistatablet12 from '../../assets/image/vistatablet12.png';
import vistatablet13 from '../../assets/image/vistatablet13.png';
import vistatablet15 from '../../assets/image/vistatablet15.png';
import vistatablet16 from '../../assets/image/vistatablet16.png';
import vistatablet17 from '../../assets/image/vistatablet17.png';
import vistatablet18 from '../../assets/image/vistatablet18.png';
import vistatablet23 from '../../assets/image/vistatablet23.png';
import vistatablet24 from '../../assets/image/vistatablet24.png';
import vistatablet25 from '../../assets/image/vistatablet25.png';
import vistatablet26 from '../../assets/image/vistatablet26.png';
import vistatablet27 from '../../assets/image/vistatablet27.png';
import vistatablet28 from '../../assets/image/vistatablet28.png';
import vistatablet29 from '../../assets/image/vistatablet29.png';
import vistatablet30 from '../../assets/image/vistatablet30.png';

function Page({ images }) {
  return (
    <div>
      {images.map((image, index) => (
        <div key={index} className="step">
          <div className="step-image">
            <Image src={image.src} alt={image.alt} width={600} height={300} className="centered-image" />
          </div>
          <div className="step-content">
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ManualUso() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { title: "Instalaciones", images: [
      { src: proceso6, alt: "Proceso 6", description: "Haciendo instalaciones de los pasos para git clone https://github.com/QUEVEDODENTAL/quevedo_dental.git" },
      { src: proceso7, alt: "Proceso 7", description: "Esta es una opción, también puedes ingresar por cmd o PowerShell" },
      { src: proceso8, alt: "Proceso 8", description: "Puedes ingresar también por cmd o PowerShell" },
      { src: proceso10, alt: "Proceso 10", description: "Este comando se utiliza para generar y aplicar migraciones en un entorno de desarrollo. Las migraciones son archivos que describen los cambios en el esquema de la base de datos, como la creación de nuevas tablas." },
      { src: proceso11, alt: "Proceso 11", description: "Este comando se utiliza para aplicar migraciones en un entorno de producción o en un entorno en el que se desea implementar los cambios en la base de datos." },
      { src: proceso12, alt: "Proceso 12", description: "Este comando se utiliza para generar el código fuente necesario para interactuar con la base de datos utilizando Prisma Client. Prisma Client es una biblioteca de acceso a la base de datos generada automáticamente a partir del esquema de la base de datos definido en Prisma." },
      { src: proceso1, alt: "Proceso 1", description: "Es un comando que se utiliza para iniciar Prisma Studio, una herramienta de interfaz gráfica (GUI) proporcionada por Prisma. Prisma Studio es una aplicación web que permite explorar y administrar los datos en la base de datos, visualizando y modificando tablas, registros y relaciones de una manera intuitiva y fácil de usar." },
      { src: proceso2, alt: "Proceso 2", description: "Después de poner el comando, aparecerá http://localhost:5555. Al hacer clic en la URL, te llevará a la página. Después, da clic en el símbolo + y selecciona OPEN MODEL. Deberás buscar 'usuario', lo que te abrirá una página donde tendrás que poner un correo y contraseña, y luego hacer clic en guardar." },
      { src: proceso3, alt: "Proceso 3", description: "Haz clic en 'Add record' para añadir un nuevo usuario y contraseña. Una vez hecho esto, aparece un cuadro al lado de 'Add record' para guardar el usuario creado. Una vez terminado, para pausar la terminal, presiona ctrl + c." },
      { src: proceso5, alt: "Proceso 5", description: "Este comando se utiliza comúnmente en proyectos web para iniciar un servidor de desarrollo local. Cuando hayas terminado, puedes salir presionando ctrl + c." }
    ]},
    { title: "Página Oficial", images: [
      { src: principaln1, alt: "Principal 1", description: "Vista de la página oficial. Cada imagen muestra toda la información." },
      { src: principaln2, alt: "Principal 2", description: "" },
      { src: principaln3, alt: "Principal 3", description: "" },
      { src: principaln4, alt: "Principal 4", description: "" },
      { src: principaln5, alt: "Principal 5", description: "Una vez terminado de explorar, puedes ingresar en consulta e iniciar sesión." }
    ]},
    { title: "Vista Tablet", images: [
      { src: vistatablet1, alt: "Vista Tablet 1", description: "Una vez hecha la instalación, puedes ingresar la contraseña y el correo ya creados." },
      { src: vistatablet2, alt: "Vista Tablet 2", description: "Esta es la pantalla que aparecerá al ingresar el menú." },
      { src: vistatablet3, alt: "Vista Tablet 3", description: "Pacientes registrados." },
      { src: vistatablet4, alt: "Vista Tablet 4", description: "Registro para doctores" },
      { src: vistatablet5, alt: "Vista Tablet 5", description: "Registro  empleados." },
      { src: vistatablet6, alt: "Vista Tablet 6", description: "Pacientes, aquí puedes editar la información de cada paciente." },
      { src: vistatablet7, alt: "Vista Tablet 7", description: "Funciones para registrar, editar y descargar." },
      { src: vistatablet8, alt: "Vista Tablet 8", description: "Funciones para registrar, editar y descargar." },
      { src: vistatablet9, alt: "Vista Tablet 9", description: "" },
      { src: vistatablet10, alt: "Vista Tablet 10", description: "." },
      { src: vistatablet11, alt: "Vista Tablet 11", description: "" }
    ]},
    { title: "Cuestionario", images: [ 
      { src: vistatablet18, alt: "Vista Tablet 18", description: "Esta  la parte de cuestonario se empieza rellenar con los  datos" },
      { src: vistatablet23, alt: "Vista Tablet 23", description: "" },
      { src: vistatablet24, alt: "Vista Tablet 24", description: "" },
      { src: vistatablet13, alt: "Vista Tablet 13", description: "" },
      { src: vistatablet12, alt: "Vista Tablet 12", description: "" },
      { src: vistatablet25, alt: "Vista Tablet 25", description: "" }
    ]},
    { title: "Generar PDF", images: [
      { src: vistatablet26, alt: "Vista Tablet 26", description: "" },
      { src: vistatablet27, alt: "Vista Tablet 27", description: "Generar y descargar los PDFs." },
      { src: vistatablet28, alt: "Vista Tablet 28", description: "Servicios, se pueden agregar y eliminar servicios dados a los clientes." },
      { src: vistatablet29, alt: "Vista Tablet 29", description: "Agregar servicios para procedimientos realizados por el dentista." },
      { src: vistatablet30, alt: "Vista Tablet 30", description: "Vista del nuevo menú." }
    ]}
  ];

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="manual-usuario-container">
      <nav className="manual-nav">
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <button onClick={() => setCurrentPage(index)}>{page.title}</button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="manual-usuario-content">
        <h1>Manual de uso</h1>
        <p>Bienvenido al Manual de Uso. Aquí tienes una guía paso a paso sobre cómo usarlo:</p>
        <Page images={pages[currentPage].images} />
        <div className="navigation">
          <button onClick={goToPreviousPage} disabled={currentPage === 0} className="nav-button">Atrás</button>
          <button onClick={goToNextPage} disabled={currentPage === pages.length - 1} className="nav-button">Siguiente</button>
        </div>
      </div>
    </div>
  );
}

export default ManualUso;
