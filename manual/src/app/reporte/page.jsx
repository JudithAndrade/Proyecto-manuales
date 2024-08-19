'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight,  } from 'react-icons/fa';

import pt1 from '../../assets/image/pt1.png';
import pt2 from '../../assets/image/pt2.png';
import pt3 from '../../assets/image/pt3.png';
import pt4 from '../../assets/image/pt4.png';
import pt5 from '../../assets/image/pt5.png';
import pt6 from '../../assets/image/pt6.png';
import pt7 from '../../assets/image/pt7.png';
import historialdecliente from '../../assets/image/historialdecliente.png';

  import p1 from '../../assets/image/p1.jpg';
    import p2 from '../../assets/image/p2.png';
    import p3 from '../../assets/image/p3.png';
    import p4 from '../../assets/image/p4.png';
    import p5 from '../../assets/image/p5.png';


import vistatablet15 from '../../assets/image/vistatablet15.png';
import vistatablet16 from '../../assets/image/vistatablet16.png';
import vistatablet17 from '../../assets/image/vistatablet17.png';
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
import vistatablet14 from '../../assets/image/vistatablet14.png';
import vistatablet30 from '../../assets/image/vistatablet30.png';

import Diagrama from '../../assets/image/Diagrama.png';

const images = [
  { src: vistatablet15  },
  { src: vistatablet16 },
  { src: vistatablet17},
  { src: vistatablet1 },
  { src: vistatablet2 },
  { src: vistatablet3 },
  { src: vistatablet4 },
  { src: vistatablet5 },
  { src: vistatablet6 },
  { src: vistatablet7},
  { src: vistatablet8 },
  { src: vistatablet9 },
  { src: vistatablet10},
  { src: vistatablet11 },
  { src: vistatablet12 },
  { src: vistatablet13},
  { src: vistatablet14 },
  { src: vistatablet30 },
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLeftIconHovered, setIsLeftIconHovered] = useState(false);
  const [isRightIconHovered, setIsRightIconHovered] = useState(false);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto mb-8">
      <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 px-4">
        <h2 className="mb-4 text-xl tracking-tight font-extrabold text-black md:pl-4 md:ml-0">Vista de pantalla de tablet</h2>
        <button
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-5xl z-10 ${isLeftIconHovered ? 'scale-110 transition-transform duration-300' : ''}`}
          onClick={prevImage}
          onMouseEnter={() => setIsLeftIconHovered(true)}
          onMouseLeave={() => setIsLeftIconHovered(false)}
        >
          <FaChevronLeft />
        </button>
        <div className="relative">
          <Image
            src={images[currentImageIndex].src}
            alt={`Slide ${currentImageIndex + 1}`}
            className={`w-full h-[400px] sm:h-[800px] md:h-[900px] object-cover transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-60'}`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-25"></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {images[currentImageIndex].caption}
          </div>
        </div>
        <button
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-5xl z-10 ${isRightIconHovered ? 'scale-110 transition-transform duration-300' : ''}`}
          onClick={nextImage}
          onMouseEnter={() => setIsRightIconHovered(true)}
          onMouseLeave={() => setIsRightIconHovered(false)}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

const Reporte = () => {
  return (
    <div className="reporte">
      <div className="reporte-content">
      <h1 className="title"><strong>Introducción</strong></h1>
      <p className="p-sangria">El proyecto Quevedo Dental surge como respuesta a la necesidad de mejorar la gestión y organización de expedientes clínicos en clínicas dentales. La eficiente administración de la información de los pacientes es fundamental para garantizar un servicio de calidad y una atención médica efectiva y se propone el desarrollo de una plataforma tecnológica que optimice el manejo de datos clínicos, simplificando procesos y mejorando la interacción con los pacientes.</p>
      
      <div>
        <h1 className="title"><strong>Quevedo Dental</strong></h1>
        <p className="p-sangria">Quevedo Dental es un sistema diseñado para la gestión y organización de expedientes de pacientes en una clínica dental. Este proyecto tiene como objetivo mejorar la eficiencia en la administración de información de pacientes actuales y futuros, facilitando la actualización y el ordenamiento de datos clínicos.</p>
      </div>

      <div>
        <h2 className="subtitle"><strong>Tecnologías Seleccionadas</strong></h2>
        <p className="p-sangria"><strong>Prisma:</strong> Prisma se erige como una herramienta clave al implementar un Modelo de Relaciones Universal (UMR). Este enfoque proporciona una abstracción eficiente para la gestión de interacciones con la base de datos, mejorando la coherencia y la flexibilidad en nuestras operaciones.</p>
        <p className="p-sangria"><strong>JSX:</strong> React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización. En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, React separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas. React no requiere usar JSX, pero la mayoría de la gente lo encuentra útil como ayuda visual cuando trabajan con interfaz de usuario dentro del código Javascript. Esto también permite que React muestre mensajes de error o advertencia más útiles.</p>
        <p className="p-sangria"><strong>JavaScript:</strong> JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado.</p>
        <p className="p-sangria"><strong> NEXT.JS:</strong>Next es un framework de JavaScript creado por Vercel (antes conocido como ZEIT) para construir aplicaciones React renderizadas del lado del servidor listas para la producción.Es de código abierto y facilita enormemente la creación de páginas web y aplicaciones web. Este framework es de fácil aprendizaje para desarrolladores con experiencia en front-end</p>
      
      </div>

      <h2 className="title">Justificación</h2>
      <p className="p-sangria">Prisma se presenta como una herramienta clave al implementar un Modelo de Relaciones Universal (UMR). Este enfoque sugiere que Prisma ofrece una abstracción eficiente para gestionar interacciones con la base de datos, lo que mejora la coherencia y la flexibilidad en las operaciones. En resumen, Prisma simplifica y optimiza la forma en que interactuamos con las bases de datos en nuestras aplicaciones.</p>
          <p className="p-sangria">Por otro lado, tienes una descripción de JSX y JavaScript, centrándose en cómo React aborda el manejo del renderizado y la lógica de la interfaz de usuario. JSX es una extensión de JavaScript que React utiliza para definir la estructura del DOM de manera declarativa. Esto permite que la lógica de renderizado esté intrínsecamente unida a la lógica de la interfaz de usuario, lo que simplifica el desarrollo y la comprensión del código.</p>
          <p className="p-sangria">JavaScript, como se describe, es el lenguaje de programación que permite implementar funciones complejas en páginas web. Es esencial para añadir interactividad y dinamismo a las aplicaciones web modernas, ya sea actualizando contenido, mostrando mapas interactivos, animaciones 2D/3D, entre otras funcionalidades.</p>
          <p className="p-sangria">Finalmente, hemos seleccionado Next.js como nuestro framework para el desarrollo web. Next.js nos permite construir aplicaciones React renderizadas del lado del servidor listas para producción. Con características avanzadas como renderizado del lado del servidor y enrutamiento basado en archivos, Next.js simplifica el desarrollo de aplicaciones web y mejora su rendimiento. Su integración con React y su facilidad de aprendizaje lo convierten en una opción ideal para nuestro proyecto.</p>

          <div className="content">
            <h2 className="subtitle"><strong> Especificaciones del Dentista</strong></h2>
            <p><strong>Registro y Contacto Inicial:</strong></p>
            <ul className="p-sangria">
              <li>El sistema debe permitir a los clientes (pacientes) registrarse y proporcionar sus datos.</li>
              <li>Se debe solicitar un correo electrónico u otro medio de contacto para enviar información adicional.</li>
            </ul>
            <p><strong>Expedientes y Recordatorios:</strong></p>
            <ul className="p-sangria">
              <li>Los expedientes de los pacientes deben ser gestionados y actualizados.</li>
              <li>Se enviarán recordatorios automáticos a los pacientes sobre sus citas por correo electrónico o mensaje de texto.</li>
              <li>Los recordatorios pueden ser configurados para enviarse en intervalos específicos (por ejemplo, cada dos días).</li>
            </ul>
            <p><strong>Interacción con el Cliente:</strong></p>
            <ul className="p-sangria">
              <li>El paciente debe poder confirmar, cancelar o reprogramar sus citas mediante un enlace o contacto telefónico proporcionado en los recordatorios.</li>
              <li>La tecnología para enviar recordatorios debe ser eficiente y de bajo costo, como mensajes de texto y correos electrónicos.</li>
            </ul>
            <p><strong>Interfaz de Usuario:</strong></p>
            <ul className="p-sangria">
              <li>La interfaz debe ser sencilla y fácil de usar, permitiendo al paciente ver sus citas, historial clínico y adeudos.</li>
              <li>Los empleados de la clínica deben tener perfiles con distintos niveles de acceso y funciones, como agendar, cancelar o modificar citas.</li>
            </ul>
            <p><strong>Historial Clínico y Servicios:</strong></p>
            <ul className="p-sangria">
              <li>El historial clínico debe ser accesible principalmente para los doctores, aunque se puede incluir una vista limitada para los pacientes.</li>
              <li>Se pueden agregar servicios adicionales y mostrar precios directamente en la interfaz.</li>
            </ul>
            <p><strong>Radiografías y Documentos Externos:</strong></p>
            <ul className="p-sangria">
              <li>Se debe facilitar la integración de radiografías y otros documentos médicos externos en el historial clínico del paciente.</li>
            </ul>
        </div>
        <div className="content">
            <h2 className="title"><strong>Encargados de Área y Detalles de las Tareas</strong></h2>
            <h3 className="subtitle">Andrés Manuel Hernández Talamantes - Base de Datos</h3>
            <ul className="p-sangria">
              <li><strong>Elaboración de Base de Datos:</strong> Diseño y desarrollo de la estructura de la base de datos.</li>
              <li><strong>Creación de Módulos de Prisma:</strong> Conexión con la base de datos y creación de archivos de configuración <code>.env</code>.</li>
              <li><strong>Actualización de Archivo.js:</strong> Agregación de ejemplos para la inserción de más datos en las tablas.</li>
              <li><strong>Corrección de la Base de Datos:</strong> Ajustes y mejoras en la estructura y funcionamiento de la base de datos.</li>
              <li><strong>Creación de Carpetas:</strong> Organización de carpetas para backend y base de datos.</li>
            </ul>

            <h3 className="subtitle">José Fabián Rauda Rivera - Backend</h3>
            <ul className="p-sangria">
              <li><strong>Capacitación Next.js:</strong> Formación en el uso de Next.js.</li>
              <li><strong>Actualización de Estructura y Registro:</strong> Mejora de la estructura y procesos de registro de usuarios.</li>
              <li><strong>Actualización de RegistroPage:</strong> Optimización y mejora de la página de registro.</li>
              <li><strong>Pruebas Backend:</strong> Ejecución de pruebas para asegurar el correcto funcionamiento del backend.</li>
              <li><strong>Eliminado y Creación de Rutas:</strong> Eliminación de carpetas obsoletas, creación de nuevas rutas y combinación de código.</li>
              <li><strong>Migration.sql:</strong> Desarrollo y actualización de scripts de migración para la base de datos.</li>
            </ul>

            <h3 className="subtitle">Aileen Lizet Cruz Sánchez - Frontend</h3>
            <ul className="p-sangria">
              <li><strong>Desarrollo del Historial Clínico:</strong> Implementación y mejora de la funcionalidad del historial clínico.</li>
              <li><strong>Maquetado de Páginas:</strong> Diseño y maquetación de las páginas de la interfaz de usuario.</li>
              <li><strong>Actualización del Cuestionario:</strong> Mejora y actualización del cuestionario para la obtención de información de los pacientes.</li>
              <li><strong>Implementación de Primer Cambio en Login:</strong> Desarrollo e integración de mejoras en la página de inicio de sesión.</li>
              <li><strong>Desarrollo del Dashboard:</strong> Integración y desarrollo del panel de control para los usuarios del sistema.</li>
              <li><strong>Implementación de Servicios Paciente y Carrito:</strong> Desarrollo de la funcionalidad para la gestión de servicios y carrito de compras.</li>
            </ul>

            <h3 className="subtitle">Luis Angel Murillo Salinas - AQ y Frontend</h3>
            <ul className="p-sangria">
              <li><strong>Capacitación de Selenium:</strong> Formación en la implementación de pruebas automatizadas con Selenium.</li>
              <li><strong>Organización de Rutas y Combinación de Código:</strong> Organización y combinación de código para garantizar la coherencia y eficiencia del frontend.</li>
              <li><strong>Desarrollo del Cuestionario:</strong> Implementación del cuestionario para la obtención de información de los pacientes.</li>
              <li><strong>Desarrollo del Dashboard:</strong> Integración y desarrollo del panel de control para los usuarios del sistema.</li>
              <li><strong>Modificación del Carrusel y Perfil:</strong> Mejora y ajuste del carrusel de imágenes y del perfil de usuario en la interfaz.</li>
              <li><strong>Implementación de Contexto Carrito y Servicios:</strong> Desarrollo del contexto para la gestión del carrito de compras y los servicios de los pacientes.</li>
            </ul>

            </div>
            <div className="content">
            <h1 className="subtitle"><strong>Objetivos del Proyecto</strong></h1>
            <ul className="p-sangria">
              <li><strong>Registro de pacientes:</strong> Permitir a los pacientes registrarse y proporcionar sus datos personales y médicos.</li>
              <li><strong>Gestión de expedientes:</strong> Administrar y actualizar los expedientes clínicos de los pacientes de manera eficiente.</li>
              <li><strong>Recordatorios automáticos:</strong> Enviar recordatorios automáticos a los pacientes sobre sus citas mediante correo electrónico o mensaje de texto.</li>
              <li><strong>Interacción con el cliente:</strong> Permitir a los pacientes confirmar, cancelar o reprogramar sus citas de manera sencilla y eficiente.</li>
              <li><strong>Historial clínico y servicios:</strong> Facilitar el acceso al historial clínico de los pacientes y la gestión de servicios adicionales.</li>
              <li><strong>Integración de radiografías y documentos externos:</strong> Permitir la integración de radiografías y otros documentos médicos en el historial clínico de los pacientes.</li>
            </ul>
          </div>


          <h2 className="subtitle"><strong>Diagrama</strong></h2>
                <div>
                  {/* Contenedor de imágenes */}
                  <Image src={Diagrama} alt="p1" width={900} height={400} className="image image-p1" />
                 
                  <p>Este es el diagrama de flujos y lo que esta en verde es todo lo que funciona y como va conectado a la bd  y lo del amarillo es lo que falto como terminarlo</p>
                </div>


              {/* Sección "Diseños de páginas" */}
              <h2 className="subtitle"><strong>  preediseños páginas</strong></h2>
                <p>En esta sección se presentan varios prediseños de la página web.</p>

                <div className="collage">
                  {/* Contenedor de imágenes */}
                  <Image src={p1} alt="p1" width={300} height={200} className="image image-p1" />
                  {/* Imágenes de prediseños */}
                  <Image src={p2} alt="p2" width={300} height={200} className="image image-p2" />
                  <Image src={p3} alt="p3" width={300} height={200} className="image image-p3" />
                  <Image src={p4} alt="p4" width={300} height={200} className="image image-p4" />
                  <Image src={p5} alt="p5" width={300} height={200} className="image image-p5" />
                  <p> este muestra el diseño previo en la cual se muestra la información de va llevar del destista  este fue antes de la actualizaciones</p>
                </div>




          
                {/* Sección "Historial de Cliente Borrador" */}
                <h2 className="subtitle"><strong> Historial de Cliente Borrador</strong></h2>
            <p>Esta sección muestra un borrador del historial de un cliente.</p>
            <div  className="collage">
              {/* Imagen del historial de cliente */}
              <Image src={historialdecliente} alt="historial de cliente" width={450} height={400}  className="image"  />
              <Image src={vistatablet7} alt="historial de cliente" width={450} height={300}  className="image" />
            </div>


            {/* Sección "Prediseños de menú para el dentista" */}
            <h3 className="subtitle"> <strong> Preediseños  Menu para el Dentista</strong></h3>
            <p>Aquí se muestran los prediseños específicos para el menú de un sitio web de dentista.</p>
          <div className="collage">
            {/* Contenedor de imágenes */}
            <Image src={pt1} alt="pt1" width={200} height={75}  />
            {/* Imágenes de prediseños de menú */}
            <Image src={pt2} alt="pt2" width={200} height={75}  />
            <Image src={pt3} alt="pt3" width={200} height={75} />
            <Image src={pt4} alt="pt4" width={200} height={75}  />
            <Image src={pt5} alt="pt5" width={200} height={75}  />
            <Image src={pt6} alt="pt6" width={200} height={75}  />
            <Image src={pt7} alt="pt7" width={199} height={75} />
        <p>Estos se ve los bosetos  se hiba aber el  inicio cuando ingrera respestivas pantallas  los cuales  se
         se va usar  y algunas pantalla fueron modificadas</p>
        </div>


          <div className="content">
            <h1 className="title"><strong>Resultados del Proyecto</strong></h1>
            <ul className="p-sangria">
          <li>
          <strong>Desarrollo de una plataforma funcional:</strong> 
          Se ha desarrollado una plataforma tecnológica que cumple con las especificaciones y funcionalidades requeridas.
        </li>
        <li>
          <strong>Implementación de tecnologías avanzadas:</strong> 
          Se han utilizado tecnologías avanzadas como Prisma, React (JSX) y JavaScript para garantizar un desarrollo eficiente y escalable.
        </li>
        <li>
          <strong>Mejora en la gestión de expedientes:</strong> 
          La plataforma ha mejorado significativamente la gestión de expedientes clínicos, facilitando su administración y actualización.
        </li>
        <li>
          <strong>Interacción mejorada con los pacientes:</strong> 
          Se han implementado funcionalidades que permiten una interacción más eficiente y personalizada con los pacientes, como los recordatorios automáticos y la gestión de citas.
        </li>
        <li>
          <strong>Acceso seguro a la información:</strong> 
              Se ha garantizado un acceso seguro a la información médica de los pacientes, protegiendo su privacidad y confidencialidad.
            </li>
            <li>
              <strong>Documentación completa:</strong> 
              Se ha elaborado una documentación técnica detallada que facilita la comprensión y el mantenimiento del proyecto.
            </li>
          </ul>
            </div>
            <div>
              <Carousel />
            </div>
         <h2   className="subtitle"><strong>Especificaciones del codigo</strong></h2>
         <h2   className="subtitle"> Tamaños de Pantallas</h2>
        <p className="p-sangria"> Esta es una directiva que proporciona información sobre el tipo de datos que se espera en
          este archivo. En este caso, indica que se espera una configuración de Tailwind CSS.
           module.exports Esta línea exporta un objeto que contiene la configuración de Tailwind CSS.
            screens: Esta es una sección de la configuración que define los tamaños de pantalla utilizados
            para generar clases de utilidad responsivas.
            </p>


        <pre className="comando">
         
        {`
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          screens: {
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }
       
            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }
       
            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
          },
      `}
        </pre>
        <h2 className="subtitle">Paletas de Colores:</h2>

        <pre className="comando">
          {`
        theme: {
          colors: {
            primary: {
              seccion: '#F3F5F9',
              info: '#1BC3EA',
              main: '#FFFBF2',
              white: '#FFFFFf',
              red: '#F94848'
            },
            text: {
              blackText: '#151515'
            },
            secondary: {
              font: '#1A71AB',
              button: '#1A71AB',
              icon: '#8190b5',
              card: '#1A71AB',
              dash: '#0f2246'
            }
          }
        }
      `}
        </pre>


         <h2 className="subtitle"> Autenticación de Usuario</h2>
       <p className="p-sangria">La autenticación de usuario es un proceso fundamental en el ámbito de la seguridad en línea. Consiste en verificar la identidad de un usuario que solicita acceso a determinados recursos, como sistemas, aplicaciones o plataformas digitales. Podría decirse que la autenticación de usuario es como la puerta de entrada a un mundo digital seguro ya que aumenta la seguridad del usuario.</p>
       
        <p className="p-sangria">Se utiliza la función signIn de next-auth/react para intentar iniciar sesión. Se le pasa el método de autenticación ('credentials') y un objeto que contiene el correo electrónico (Email) y la contraseña (Password) proporcionados por el usuario.</p>
        <p>La respuesta del intento de inicio de sesión se guarda en la variable res.</p>
        <p>Si no hay ningún error en la respuesta, se asume que el inicio de sesión fue exitoso y se redirige al usuario a la página de dashboard</p>
        <pre className="comando">
          {` 
              'use client'
        // Importación de módulos y hooks necesarios
        import { set, useForm } from "react-hook-form"; // Para el manejo de formularios
        import { signIn } from "next-auth/react"; // Para la autenticación
        import { useRouter } from 'next/navigation'; // Para la navegación
        import { useState } from 'react'; // Para manejar el estado
       
        // Componente principal del formulario de inicio de sesión
        function LoginForm() {
       
          // Inicialización de useForm para manejar el formulario
          const {
            register, // Para registrar los campos del formulario
            handleSubmit, // Para manejar el envío del formulario
            formState: { errors }, // Para manejar los errores del formulario
          } = useForm();
       
          const router = useRouter(); // Hook para la navegación
          const [error, setError] = useState(null); 
          // Estado para manejar errores de autenticación
       
          // Función que se ejecuta al enviar el formulario
          const onSubmit = handleSubmit(async (data) => {
            console.log(data);
       
          // Intento de inicio de sesión utilizando las credenciales proporcionadas
            const res = await signIn('credentials', {
              Email: data.Email, // Email del usuario
              Password: data.Password, // Contraseña del usuario
              redirect: false, // No redirigir automáticamente
            });
       
            console.log(res);
       
            // Manejo de errores o redirección en caso de éxito
            if (res.error) {
              setError(res.error); // Establece el error si ocurre
            } else {
          router.push('/dashboard'); 
          // Redirige al dashboard si el inicio de sesión es exitoso
            }
          });
       
          return (
            <div className="mx-1 p-4 custom-shadowa rounded-lg lg:w-3/5 md:w-3/4
             bg-secondary-dash2">
          <h1 className='text-5xl font-bold flex justify-center mb-8'>Iniciar sesión</h1>
       
              <form onSubmit={onSubmit} className="space-y-4">
       
                {error && (
              <p className="bg-primary-red text-xs text-white p-3 rounded-md text-center"> 
                {error}</p>
                )}
       
                <div className="flex flex-col">
                  <label htmlFor="Email" className="text-lg font-medium">
                    Correo:
                  </label>
                  <input
                    type="Email"
                    {...register("Email", {
                      required: {
                        value: true,
                        message: "Email is required", 
                        // Mensaje de error si el campo está vacío
                      },
                    })}
                   className="w-full outline-none rounded-md mb-4 bg-gray-200 px-4 py-3"
                    placeholder="Ingresa tu correo electrónico"
                    style={{ fontWeight: "300" }}
                  />
      `}
        </pre>
        <h2 className="subtitle"><strong> Extenciones</strong></h2>
        <p className="p-sangria" > React-PDF le permite mostrar PDF archivos como si fueran imágenes en una aplicación React sin problemas o usando varios plugins</p>
        <prev className="comando">npm install @react-pdf/renderer --save</prev>
        <p> esta se aplico el React-PDF </p>

        <pre className="comando">{`import { PDFDocument, PDFViewer,} from '@react-pdf/renderer'; 
        <div>
        <h2>Vista Previa del Historial Clínico</h2>
        <PDFViewer>
        <HistorialClinicoPDF datos={formData} currentDate={currentDate}/>

        </PDFViewer>
        <button onClick={() => setShowForm(true)}>Regresar</button>
      </div>
    )}
  </div>
);` }</pre>
      <h2 className="subtitle"><strong>Informe de Errores </strong></h2>
      <div className="bitacora-errores">
        <table>
          <thead>
            <tr>
              <th colSpan="2">Información del Proyecto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Título del Proyecto</td>
              <td>Proyecto Salud</td>
            </tr>
            <tr>
              <td>Nombre de la Empresa</td>
              <td>Proyecto Salud</td>
            </tr>
            <tr>
              <td>Responsable del Proyecto</td>
              <td>Andrés Manuel Hernández Talamantes</td>
            </tr>
            <tr>
              <td>Encargados de área</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>Judith Adilene Andrade Perez</td>
                      <td>DOCUMENTADORA</td>
                    </tr>
                    <tr>
                      <td>Aileen Lizet Cruz Sánchez</td>
                      <td>FRONTEND</td>
                    </tr>
                    <tr>
                      <td>José Fabián Rauda Rivera</td>
                      <td>BACKEND</td>
                    </tr>
                    <tr>
                      <td>Andrés Manuel Hernández Talamantes</td>
                      <td>BASE DE DATOS</td>
                    </tr>
                    <tr>
                      <td>Luis Angel Murillo Salinas</td>
                      <td>AQ y FRONTEND</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Título de  Error</th>
              <th>Descripción del Error</th>
              <th>Solución</th>
              <th>Reportante</th>
              <th>Cargo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6/05/2024</td>
              <td>Error: Cannot find module 'node-fetch'</td>
              <td>La causa más probable de este error es que el módulo 'node-fetch' no está instalado...</td>
              <td>Versión corregida</td>
              <td>José Fabián Rauda Rivera</td>
              <td>BACKEND</td>
            </tr>
            <tr>
              <td>3/05/2024</td>
              <td>Problemas de las imágenes</td>
              <td>Problemas de descargue de las librerías...</td>
              <td>rm -rf node_modules
                rm package-lock.json
                npm cache clean --force
                npm install</td>
              <td>Luis Angel Murillo Salinas</td>
              <td>AQ y FRONTEND</td>
            </tr>
            <tr>
              <td>15/05/2024</td>
              <td>Problemas de formulario</td>
              <td>Import trace for requested module...</td>
              <td>falta solucionar</td>
              <td>Luis Angel Murillo Salinas</td>
              <td>FRONTEND</td>
            </tr>
            <tr>
              <td>23/04/2024</td>
              <td>npm error code ENOTEMPTY</td>
              <td>Este error de npm, con el código de error ENOTEMPTY...</td>
              <td>Versión corregida</td>
              <td>José Fabián Rauda Rivera</td>
              <td>BACKEND</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Reporte;
