(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();document.querySelector("#app").innerHTML="";const t=()=>{var e=document.createElement("div");e.id="mydiv";var i=document.createElement("img");i.src="img/JavaScript-logo.jpg",e.appendChild(i),document.body.appendChild(e)},d=()=>{var e=document.createElement("div");e.id="myDivNav",document.body.appendChild(e);var i=document.createElement("div");i.className="mydivClass",i.id="btnInicio",i.innerHTML="JavaScript",e.appendChild(i),document.getElementById("btnInicio").addEventListener("click",()=>{u()});var o=document.createElement("div");o.className="mydivClass",o.id="btnQsomos",o.innerHTML="Ebooks",e.appendChild(o),document.getElementById("btnQsomos").addEventListener("click",()=>{l()});var s=document.createElement("div");s.className="mydivClass",s.id="btnDescargas",s.innerHTML="Descargas",e.appendChild(s),document.getElementById("btnDescargas").addEventListener("click",()=>{p()});var a=document.createElement("div");a.className="mydivClass",a.id="btnContacto",a.innerHTML="Contacto",e.appendChild(a),document.getElementById("btnContacto").addEventListener("click",()=>{m()})},c=()=>{let e=document.createElement("div");e.id="myDivNav2",e.innerHTML=`
   <ul>
        <li>Aplicaciones Web, codigo escrito integramente en JavaScript</li>
        <br>
        <li>Descarga gratuita de todo el contenido</li>
        <br>
        <li>Redacción, edición, armado y publicación de Ebooks</li>
        </li>
        
    </ul>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  `,document.body.appendChild(e)},l=()=>{document.querySelector("#myDivNav2").innerHTML=`
<h4>Libros Electrónicos:</h4>
Han revolucionado la forma en que leemos y compartimos la lectura.<br>
Se han convertido en una parte integral de nuestras vidas y los numerosos beneficios tanto para escritores como para
lectores al adoptar esta forma moderna de literatura.<br><br>

<h4>¿Qué son los E-books?</h4>
Los e-books son versiones digitales de libros tradicionales que se pueden leer en dispositivos electrónicos como
e-readers, tabletas, teléfonos inteligentes o computadoras. Estos libros digitales conservan el contenido textual
y gráfico de los libros impresos, pero presentan ventajas únicas en términos de accesibilidad y versatilidad. <br><br>

<h4>Beneficios para los Escritores:</h4>
Facilidad de Publicación: Los escritores tienen la oportunidad de autopublicar sus obras sin los desafíos tradicionales
de la publicación impresa.
Alcance Global: Los e-books pueden llegar a audiencias de todo el mundo a través de plataformas en línea, permitiendo
una mayor visibilidad.
Costos Reducidos: La publicación digital elimina los costos asociados con la impresión y la distribución física, lo
que puede resultar en mayores márgenes de beneficio.
Actualizaciones y Correcciones: Los escritores pueden realizar cambios en sus obras de manera sencilla y rápida, 
asegurando que su contenido esté siempre actualizado.<br><br>

<h4>Beneficios para los Lectores:</h4>
Portabilidad: Los e-books permiten llevar una biblioteca completa en un solo dispositivo, ideal para leer en movimiento.
Accesibilidad: Las personas con discapacidades visuales pueden ajustar el tamaño de fuente y utilizar tecnologías de asistencia para una experiencia de lectura más cómoda.
Búsqueda y Resaltado: Los lectores pueden buscar términos específicos y resaltar pasajes importantes, facilitando la revisión y el estudio.
Interactividad: Algunos e-books incluyen elementos interactivos, como enlaces a recursos relacionados, videos y cuestionarios.
Medio Ambiente: La lectura digital reduce la necesidad de papel y la huella ambiental asociada a la producción y distribución de libros impresos. <br><br>

<h4>Evolución de la Experiencia de Lectura:</h4>
Efectos Visuales: Los e-books permiten la integración de imágenes de alta calidad y gráficos enriquecidos para mejorar 
la experiencia de lectura.
Realidad Aumentada (RA) y Realidad Virtual (RV): Las tecnologías emergentes están abriendo nuevas posibilidades para
una experiencia de lectura más inmersiva y envolvente.
Inteligencia Artificial (IA): Los e-books pueden aprovechar la IA para ofrecer recomendaciones de lectura
personalizadas y análisis de texto más profundos. <br><br>

<h4>Futuro de los E-books: </h4>
Continua Innovación: Se espera que la tecnología siga evolucionando, lo que podría dar lugar a nuevas formas de interacción y contenido en los e-books.
Coexistencia con Libros Impresos: Aunque los e-books han ganado popularidad, es probable que los libros impresos sigan siendo valorados por su tacto físico y encanto tradicional.
Nuevos Modelos de Negocio: La industria de los e-books podría desarrollar modelos de suscripción y distribución que ofrezcan aún más opciones a los lectores y escritores.

`},u=()=>{document.querySelector("#myDivNav2").innerHTML=` JavaScript es un lenguaje de programación
  ampliamente utilizado en el desarrollo web.<br><br>

  Fue creado originalmente para agregar interactividad a las páginas web y permitir que los usuarios interactúen 
  con el contenido de una manera dinámica.<br><br>

  A lo largo de los años, JavaScript ha evolucionado y se ha convertido en un lenguaje de programación de
  propósito general, utilizado no solo en el desarrollo web, sino también en aplicaciones
  móviles, servidores y otros entornos. <br><br> 

  <h3>Beneficios de la programación en JavaScript:</h3><br> 
  <h4>Interactividad en el lado del cliente:</h4>  

  JavaScript permite crear interacciones dinámicas en las páginas web. <br><br>

  Puedes crear elementos emergentes, validaciones de formularios en tiempo real, carruseles, galerías
  de imágenes y muchas otras funciones interactivas sin tener que recargar la página. <br><br>

  <h4>Amplia compatibilidad:</h4>
  Los navegadores modernos admiten JavaScript, lo que garantiza que tu código
  funcione en una amplia gama de dispositivos y plataformas, desde computadoras de escritorio hasta
  dispositivos móviles. <br><br> 

  <h4>Facilidad de aprendizaje:</h4> 
  JavaScript es relativamente fácil de aprender, especialmente para aquellos
  que ya tienen experiencia en programación. Su sintaxis es similar a otros lenguajes de programación, lo
  que facilita la transición. <br><br>

  <h4>Comunidad activa:</h4>
  JavaScript cuenta con una gran comunidad de desarrolladores que comparten recursos,
  bibliotecas y frameworks.<br> <br> 
  Esto te permite acceder a soluciones preconstruidas y aprender de otros
  programadores. <br><br>

  <h4>Utilizado en el desarrollo web moderno:</h4>
  Frameworks como React, Angular y Vue.js se basan en JavaScript
  y son ampliamente utilizados para crear interfaces de usuario interactivas y modernas.<br><br> 

  <h4>Node.js:</h4>
  JavaScript no se limita al lado del cliente. Con Node.js, puedes usar JavaScript en el
  lado del servidor para construir aplicaciones web en tiempo real y escalables.<br><br> 

  <h4>Librerías y frameworks:</h4> 
  Existe una amplia gama de librerías y frameworks de JavaScript que te
  permiten acelerar el desarrollo.<br><br> 

  Algunos ejemplos populares son jQuery para manipulación del DOM, Bootstrap
  para diseño responsivo y Express.js para desarrollo de aplicaciones web en Node.js.<br><br>
  <h4>Aplicaciones móviles:</h4>
  Con tecnologías como React Native, puedes utilizar tus habilidades en JavaScript 
  para desarrollar aplicaciones móviles para iOS y Android. <br><br> 

  <h4>Actualizaciones constantes:</h4>
  JavaScript sigue evolucionando con nuevas características y mejoras.<br><br> 

  Las especificaciones como ECMAScript definen nuevas versiones del lenguaje para mantenerlo actualizado
  y relevante. <br><br> 

  <h4>Salida inmediata:</h4>
  Al ejecutarse en el navegador del usuario, los cambios realizados en el código JavaScript
  se reflejan de inmediato, lo que permite una rápida iteración y desarrollo.
  
  `},p=()=>{document.querySelector("#myDivNav2").innerHTML=`<h4>Descargas:</h4>
    <br>
    <div id = "divImg">
    <div class = "divItemDesc">  
    <a id="pdfLink" href="/descargas/politicaDdigital.pdf" download>
        <img class ="imgDesc" src="img/portadaPd.jpg" alt="Descargar PDF" style="width: 300px; height: auto;" >
    </a>
    </div>
    <div  class = "divItemDesc">
    <a id="pdfLink" href="/descargas/guiDeProgramacion.pdf" download>
        <img class ="imgDesc" src="img/portadaPb.jpg" alt="Descargar PDF" style="width: 300px; height: auto;" >
    </a>
    </div>
    <div  class = "divItemDesc">
    <a id="pdfLink" href="/descargas/eloquentJavaScript.pdf" download>
        <img class ="imgDesc" src="img/portadaEl.jpg" alt="Descargar PDF" style="width: 300px; height: auto;" >
    </a>
    </div>
    </div>
    <br>
    
    
    
    <br><br><br><br><br><br>
    `},m=()=>{let e=document.createElement("canvas");e.id="divCanvas1",e.width=300,e.height=300,e.getContext("2d").fillRect(0,0,e.width,e.height),document.querySelector("#myDivNav2").innerHTML="",document.querySelector("#myDivNav2").appendChild(e)},v=()=>{let e=document.createElement("div"),i=document.createElement("div");i.id="divDatos1",i.innerHTML=`
 
   <p> Whatsapp Arg: +54 1134795400 &#160 &#160 </p>
   <p> Twitter: @Baires.js &#160 &#160 </p>
   <p> Instagram: @Baires.js &#160 &#160 </p>
  
   <br>
  `,e.appendChild(i),e.id="mydivPie";let o=document.createElement("img");o.id="img1",o.src="img/pieJavaScript.jpg",e.appendChild(o),document.body.appendChild(e)};t();d();c();v();
