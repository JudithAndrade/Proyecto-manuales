'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import vistatablet1 from '../../assets/image/vistatablet1.png';
import vistatablet2 from '../../assets/image/vistatablet2.png';
import vistatablet3 from '../../assets/image/vistatablet3.png';
import vistatablet4 from '../../assets/image/vistatablet4.png';
import vistatablet5 from '../../assets/image/vistatablet5.png';
import vistatablet6 from '../../assets/image/vistatablet6.png';
import vistatablet7 from '../../assets/image/vistatablet7.png';
import vistatablet8 from '../../assets/image/vistatablet8.png';
import vistatablet9 from '../../assets/image/vistatablet9.png';
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

function Page({ images }) {
    return (
        <div>
            {images.map((image, index) => (
                <div key={index} className="manual-usuario-step">
                    <div className="manual-usuario-step-image">
                        <Image src={image.src} alt={image.alt} width={600} height={300} className="manual-usuario-centered-image" />
                    </div>
                    <div className="manual-usuario-step-content">
                        <p>{image.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function Manualusuario() {
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [
        {
            title: "Principal", images: [
                { src: vistatablet15, alt: "Pantalla adicional 1", description: "La pantalla principal muestra la información del menú." },
                { src: vistatablet16, alt: "Pantalla adicional 2", description: "Muestra la información de las evidencias de procesos y los detalles de los procesos." },
                { src: vistatablet17, alt: "Pantalla adicional 3", description: "Presenta al dentista y al equipo del consultorio y la informacion  para poder iniciar  debera ir Consulta y CONTUACUION SE LE MOSOTRA SE DEBERA USAR EL PRPGRAMA" }
            ]
        },
        {
            title: "Inicios", images: [
                { src: vistatablet1, alt: "Iniciar ", description: "Esta parte se pareca para  inicar sesion  el  correo y contaseña creada podra  ingresar " },
                { src: vistatablet2, alt: "Pantalla de inicio", description: "Cuando  ingrese paracera elo menu  todos la inforacion y cada parte  es diferente  ya  que aprese inicio,Usuario,Pacientes,Perfil ,ect." },
                { src: vistatablet3, alt: "Pacientes informacion", description: " Este es un ejemplo se como se veria los datos de los pasientes  cuando  los alla registrado los Pacientes " },
                { src: vistatablet4, alt: "Registro de Doctor", description: " Esta parte para registra Doctor   para  tener informacion importenate   " },
                { src: vistatablet5, alt: "Regiatro de Empleados ", description: " Esta parte para registra  Empleados  para  tener informacion importenate" },
                { src: vistatablet18, alt: "Historial clinico", description: "Esta parte se debe  rellenar por el paciente" },
                { src: vistatablet23, alt: "Historial clinico", description: "y  seguda pantalla debera  se rellenada por el paciente " },
                { src: vistatablet24, alt: "Seleccionar Formulario", description: " esta   parte lo rellenar el doctor  y  seleccionara el color de las encias y color de los dientes" },
                { src: vistatablet25, alt: "Botón de Registrarse", description: " se el color de las encias y color de los dientes" },
                { src: vistatablet26, alt: "Botón de Registrarse", description: "seleccionara el color de las encias y color de lenguas" },
            ]
        },
        {
            title: " Servios ", images: [
                { src: vistatablet6, alt: "Pacientes", description: " paguina anterior esta parte de los pacientes para poder ingresar debe dar dos clik  " },
                { src: vistatablet7, alt: "editar datos del paciente", description: "Cuado ingresa  para editar " },
                { src: vistatablet8, alt: "modificacion de datos", description: "modificacion de datos" },
                { src: vistatablet9, alt: " esta para generar  descargar los pdf", description: "esta para generar  descargar los pdf" },
                { src: vistatablet27, alt: "Servicios", description: "Servicios esta parte de estaran los servicios se podran agregar o quitar" },
                { src: vistatablet28, alt: "Programa en uso", description: "este  se pueda agreagar mas servicios" },
                { src: vistatablet29, alt: "Programa en uso", description: " este se podra ver lo selleccionada los servicios" },
            ]
        }
    ];

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="manual-usuario-container">
            <nav className="manual-usuario-nav">
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
                <div className="manual-usuario-navigation">
                    <button onClick={goToPreviousPage} disabled={currentPage === 0} className="manual-usuario-nav-button">Atrás</button>
                    <button onClick={goToNextPage} disabled={currentPage === pages.length - 1} className="manual-usuario-nav-button">Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default Manualusuario;
