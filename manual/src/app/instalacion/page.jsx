import React from 'react';


export default function Instalacion() {
  return (
    <div className="installation-container">
      <div className="installation-wrapper">
         {/* Encabezados y lista de requisitos */}
         <h1 className="titulo-grande">Instalación</h1>
        <p>Esta documentación proporciona una guía sobre cómo instalar para gestionar y realizar la migración.</p>
        <h2 className="subtitulo-grande ">Prerrequisitos</h2>
        <ul>
          <li>npm 10.5.2 o superior (<a href="https://docs.npmjs.com/cli/v8/commands/npm-version" target="_blank" rel="noopener noreferrer">Cómo verificar la versión de npm</a>)</li>
          <li>MySQL Product Archives para crear el Usuario (<a href="https://downloads.mysql.com/archives/community/" target="_blank" rel="noopener noreferrer">Descargar</a>)</li>
          <li>Node.js (<a href="https://nodejs.org/en/download/prebuilt-installer/current" target="_blank" rel="noopener noreferrer">Descargar</a>)</li>
        </ul>

        {/* Instalación de Linux en Windows con WSL */}
        <h3 className="subtitulo-chico">Instalación de Linux en Windows con WSL</h3>
        <p>Ejecuta el siguiente comando en tu terminal:</p>
        <pre className="codigo">wsl --install</pre>

        {/* Instalación de Programas */}
        <h3 className="subtitulo-chico">Instalación de Programas</h3>
        <p>Antes de comenzar, asegúrate de tener Node.js y npm instalados en tu sistema.</p>
        <p>Clona este repositorio en tu máquina local:</p>
        <pre className="codigo">git clone https://github.com/QUEVEDODENTAL/quevedo_dental.git</pre>
        <p>Navega hasta el directorio del proyecto:</p>
        <pre className="codigo">cd quevedo_dental</pre>
        <p>Instala las dependencias del proyecto:</p>
        <pre className="comando">npm install</pre>

         {/* Configuración de la Base de Datos */}
         <h3 className="subtitulo-chico">Configuración de la Base de Datos</h3>
        <p>Crea un archivo <code>.env</code> y edítalo con los detalles de la base de datos:</p>
        <pre className="codigo">DATABASE_URL="mysql://root:Backend-1@localhost:3306/proyecto_salud?schema=public"</pre>
        <pre className="codigo">NEXTAUTH_URL="http://localhost:3000/"</pre>
        <pre className="codigo">NEXTAUTH_SECRET=TuPalabraSecret</pre>
        <p>Ejecución de Migración:</p>
        <pre className="codigo">npx prisma migrate dev</pre>
        <pre className="codigo">npx prisma migrate deploy</pre>
        <pre className="codigo">npx prisma generate</pre>

        {/* Instalar la programa para crear contraseña para uso .env */}
        <h3 className="subtitulo-chico">Instalar la programa para crear contraseña para uso .env</h3>
        <p>Para crear el usuario de MySQL Community, necesitarás descargar la versión adecuada de MySQL Product Archives. Puedes encontrarla <a href="https://downloads.mysql.com/archives/community/" target="_blank" rel="noopener noreferrer">aquí</a>.</p>

        <div>
  <p>Para crear el usuario ejecuta el comando:</p>
  <pre className="codigo">npx prisma studio</pre>
  <p>Luego, abre el enlace que se muestra (<a href="http://localhost:5555" target="_blank" rel="noopener noreferrer">http://localhost:5555</a>) en tu navegador.</p>
  <p>Después de poner el comando, aparecerá <a href="http://localhost:5555" target="_blank" rel="noopener noreferrer">http://localhost:5555</a>. Dando clic en el enlace, te llevará a la página y luego haz clic en el símbolo "+" donde te desplegará "OPEN MODEL". Deberás buscar "usuario", lo que abrirá una página donde deberás poner un correo y contraseña, y después haz clic en "Guardar".</p>
</div>

<div>
  {/* Ejecuta el proyecto */}
  <h3 className="subtitulo-chico">Ejecuta el proyecto</h3>
  <p>Para verificar que se haya ejecutado correctamente, ejecuta el comando:</p>
  <pre className="codigo">npm run dev</pre>
  <p>Abre tu navegador y ve a <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> para ver la aplicación en funcionamiento.</p>
</div>

<div>
  {/* Visualiza en otro equipo */}
  <h3 className="subtitulo-chico">Visualiza en otro equipo</h3>
  <p>Pero si es en otro equipo donde se está ejecutando abre el cmd de tu equipo y escribe <code>ipconfig o ifconfig </code>, cuando termine de ejecutarse este comando busca un apartado que diga dirección IPv4.</p>
  <p>Comando para Windows:</p>
  <pre className="codigo">ipconfig</pre>
  <p>Comando para Linux:</p>
  <pre className="codigo">ifconfig</pre>
  <p>Con la dirección IPv4 que obtengas, dirígete a tu navegador y pon tu IP en la barra de direcciones. Por ejemplo: <code>http://140.10.6.142:3000</code></p>
</div>


        
      </div>
    </div>
  );
}
