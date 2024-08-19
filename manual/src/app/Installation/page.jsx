import React from 'react';

export default function Installation() {
  return (
    <div className="installation-container">
      <div className="installation-wrapper">
         {/* Headers and Requirements List */}
         <h1 className="titulo-grande">Installation</h1>
        <p>This documentation provides a guide on how to install for managing and performing migration.</p>
        <h2 className="subtitulo-grande ">Prerequisites</h2>
        <ul>
          <li>npm 10.5.2 or higher (<a href="https://docs.npmjs.com/cli/v8/commands/npm-version" target="_blank" rel="noopener noreferrer">How to check npm version</a>)</li>
          <li>MySQL Product Archives to create the User (<a href="https://downloads.mysql.com/archives/community/" target="_blank" rel="noopener noreferrer">Download</a>)</li>
          <li>Node.js (<a href="https://nodejs.org/en/download/prebuilt-installer/current" target="_blank" rel="noopener noreferrer">Download</a>)</li>
        </ul>

        {/* Installing Linux on Windows with WSL */}
        <h3 className="subtitulo-chico">Installing Linux on Windows with WSL</h3>
        <p>Run the following command in your terminal:</p>
        <pre className="codigo">wsl --install</pre>

        {/* Program Installation */}
        <h3 className="subtitulo-chico">Program Installation</h3>
        <p>Before you begin, make sure you have Node.js and npm installed on your system.</p>
        <p>Clone this repository to your local machine:</p>
        <pre className="codigo">git clone https://github.com/QUEVEDODENTAL/quevedo_dental.git</pre>
        <p>Navigate to the project directory:</p>
        <pre className="codigo">cd quevedo_dental</pre>
        <p>Install project dependencies:</p>
        <pre className="comando">npm install</pre>

         {/* Database Configuration */}
         <h3 className="subtitulo-chico">Database Configuration</h3>
        <p>Create a <code>.env</code> file and edit it with the database details:</p>
        <pre className="codigo">DATABASE_URL="mysql://root:Backend-1@localhost:3306/proyecto_salud?schema=public"</pre>
        <pre className="codigo">NEXTAUTH_URL="http://localhost:3000/"</pre>
        <pre className="codigo">NEXTAUTH_SECRET=YourSecretWord</pre>
        <p>Migration Execution:</p>
        <pre className="codigo">npx prisma migrate dev</pre>
        <pre className="codigo">npx prisma migrate deploy</pre>
        <pre className="codigo">npx prisma generate</pre>

        {/* Install the program to create password for .env usage */}
        <h3 className="subtitulo-chico">Install the program to create password for .env usage</h3>
        <p>To create the MySQL Community user, you'll need to download the appropriate version of MySQL Product Archives. You can find it <a href="https://downloads.mysql.com/archives/community/" target="_blank" rel="noopener noreferrer">here</a>.</p>

        <div>
  <p>To create the user, execute the command:</p>
  <pre className="codigo">npx prisma studio</pre>
  <p>Then, open the displayed link (<a href="http://localhost:5555" target="_blank" rel="noopener noreferrer">http://localhost:5555</a>) in your browser.</p>
  <p>After entering the command, <a href="http://localhost:5555" target="_blank" rel="noopener noreferrer">http://localhost:5555</a> will appear. Clicking on the link will take you to the page, then click on the "+" symbol where it will display "OPEN MODEL". You should look for "usuario", which will open a page where you should enter an email and password, and then click "Save".</p>
</div>

<div>
  {/* Run the project */}
  <h3 className="subtitulo-chico">Run the project</h3>
  <p>To verify that it has run correctly, execute the command:</p>
  <pre className="codigo">npm run dev</pre>
  <p>Open your browser and go to <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> to see the application in action.</p>
</div>

<div>
  {/* View on another computer */}
  <h3 className="subtitulo-chico">View on another computer</h3>
  <p>But if it's on another computer where it's running, open your computer's cmd and type <code>ipconfig</code>, when this command finishes executing, look for a section that says IPv4 address.</p>
  <p>Command for Windows:</p>
  <pre className="codigo">ipconfig</pre>
  <p>Command for Linux:</p>
  <pre className="codigo">ifconfig</pre>
  <p>With the IPv4 address you get, go to your browser and enter your IP in the address bar. For example: <code>http://140.10.6.142:3000</code></p>
</div>


        
      </div>
    </div>
  );
}
