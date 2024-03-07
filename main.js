//Imprime en div app /////////////////////////
document.querySelector('#app').innerHTML = `` 
 
// miBannerJs //////////////////////////////  
const miBannerJs = () => {
let divBanner1 = document.createElement("div");
divBanner1.id = "mydiv";
let img = document.createElement("img");
img.src = "img/JavaScript-logo.jpg";
divBanner1.appendChild(img);
//let divBanner2 = document.createElement("div");
//divBanner2.id = "myDiv2";
//divBanner2.innerHTML = `<h2>Desarrollos JavaScript</h2>`;
//divBanner1.appendChild(divBanner2);
//document.body.appendChild(divBanner1);

//************************************************** */
let divBanner2 = document.createElement("div");
    divBanner2.id = "myDiv2";
    divBanner2.innerHTML = `
    &#160;&#160;&#160;&#160;
    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1134795400">
    <img  src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;&#160;&#160;
    <a href="https://www.instagram.com/baires.js/" style="text-decoration: none;">
    <img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
    
`;
        divBanner1.appendChild(divBanner2);
        document.body.appendChild(divBanner1);

//************************************************** */

}
//miBannerJs()

// barraNav1 ///////////////////////////////////////
  const barraNav1 = () =>{
    var nav1 = document.createElement("div");
    nav1.id = "myDivNav";
    document.body.appendChild(nav1);
  
   /*
    var navDiv1 = document.createElement("div");
    navDiv1.className = "mydivClass";
    navDiv1.id = "btnInicio";
    navDiv1.innerHTML = 'JavaScript'
    nav1.appendChild(navDiv1)
    document.getElementById("btnInicio").addEventListener("click", ()=>{inicioJavaScript()});
    //document.body.appendChild(navDiv1);
   */ 
    var navDiv5 = document.createElement("div");
    navDiv5.className = "mydivClass";
    navDiv5.id = "btnCursos";
    navDiv5.innerHTML = 'Cursos'
    nav1.appendChild(navDiv5)
    document.getElementById("btnCursos").addEventListener("click", ()=>{cursos()});
    //document.body.appendChild(navDiv1);

    var navDiv6 = document.createElement("div");
    navDiv6.className = "mydivClass";
    navDiv6.id = "btnSoporte";
    navDiv6.innerHTML = 'Soporte'
    nav1.appendChild(navDiv6)
    document.getElementById("btnSoporte").addEventListener("click", ()=>{soporte()});
    //document.body.appendChild(navDiv1);


    /*
    var navDiv2 = document.createElement("div");
    navDiv2.className = "mydivClass";
    navDiv2.id = "btnQsomos";
    navDiv2.innerHTML = 'Ebooks'
    nav1.appendChild(navDiv2)
    document.getElementById("btnQsomos").addEventListener("click", ()=>{ebooksFunction()});
    //document.body.appendChild(navDiv2);
    */

    var navDiv3 = document.createElement("div");
    navDiv3.className = "mydivClass";
    navDiv3.id = "btnDescargas";
    navDiv3.innerHTML = 'Links'
    nav1.appendChild(navDiv3)
    document.getElementById("btnDescargas").addEventListener("click", ()=>{descargas()});
    //document.body.appendChild(navDiv3);

    var navDiv4 = document.createElement("div");
    navDiv4.className = "mydivClass";
    navDiv4.id = "btnContacto";
    navDiv4.innerHTML = 'Free App'
    nav1.appendChild(navDiv4)
    document.getElementById("btnContacto").addEventListener("click", ()=>{repositorio()});
    //document.body.appendChild(navDiv4);

    
    /*   
    var myButton = document.createElement("button");
    myButton.id = "mybutton";
    myButton.textContent = "Click me!";
    nav1.appendChild(myButton);
    
    myButton.addEventListener("click", function() {
      nav1.innerHTML = `<h1>Hola Moone!!!!</h1>`;
   
    });
    */
  }
  //  barraNav1()


//Barra nav2////////////////////////////////
const barraNav2 = () =>{

  let nav2 = document.createElement("div");
  nav2.id = "myDivNav2";
  nav2.innerHTML = `
  BairesJS es un emprendimiento freelancer apasionado por la programación JavaScript.<br>
  Su enfoque principal se centra en el desarrollo de aplicaciones web y móviles utilizando
  esta tecnología versátil y poderosa.<br>
  La página BairesJS sirve como plataforma central para todos sus proyectos y servicios.
  Los visitantes pueden explorar y descargar todo el material de forma gratuita en la cuenta
  de GitHub.<br>
  Esta transparencia y accesibilidad reflejan el compromiso de BairesJS con la comunidad y su
  deseo de fomentar el aprendizaje y la colaboración en el campo de la programación.<br>
  Cada proyecto está diseñado con una cuidadosa atención a los detalles y optimizado para
  brindar una experiencia de usuario excepcional.<br>
  Además del desarrollo de aplicaciones, BairesJS ofrece servicios adicionales que incluyen
  la generación, edición y maquetación de ebooks, la creación de presentaciones y
  la redacción de textos de índole general.<br>
  BairesJS se distingue por su amplia gama de proyectos y servicios, y su enfoque 
  en la calidad y la innovación.<br>
  `
  document.body.appendChild(nav2);  
}

// barraNav2()
  
// BR ////////////////////////////////////
//var br = document.createElement("br");
//document.body.appendChild(br)

const ebooksFunction = () => {

document.querySelector('#myDivNav2').innerHTML = `
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

`;

}
//Cursos//////////////////////////////////////////////////

const cursos = () => {

  document.querySelector('#myDivNav2').innerHTML = `

<h4>Python Consola Parte I</h4>

En el mundo de la programación, aprender a utilizar Python desde la línea de comandos o modo consola es
fundamental. <br>

Esta forma de trabajar con Python te permite interactuar directamente con el intérprete de Python, ejecutar
scripts y experimentar con el lenguaje de programación de una manera más directa y práctica. <br>

Los cursos gratuitos y libros en formato PDF que se centran en el uso de Python en modo consola son recursos
valiosos para aquellos que desean adquirir habilidades prácticas en programación. <br>

Ya sea que estés buscando iniciarte en la programación o mejorar tus habilidades existentes, estos recursos
te brindarán una sólida comprensión de Python y cómo utilizarlo de manera efectiva desde la línea de comandos. <br>

A través de ejercicios prácticos y proyectos guiados, estos recursos te ayudarán a familiarizarte con la
sintaxis de Python, los conceptos fundamentales de programación y cómo aplicarlos en el contexto 
del modo consola. <br>

Además, aprenderás a utilizar herramientas y bibliotecas populares de Python para realizar tareas específicas
y resolver problemas del mundo real. <br>

Al aprovechar estos cursos gratuitos y libros en formato PDF, podrás desarrollar habilidades sólidas
en programación con Python, lo que te abrirá nuevas oportunidades en el campo de la tecnología, la ciencia de datos, la inteligencia artificial y más. <br>
<br>
<ul>
        <li><a href="curso-python-consola-primera-parte/">Contenido </a></li>
        <li> Documentación oficial de Python online</a></li>
        <li> 1 Guia Python off line</a></li>
        <li> 9 cursos online total 57 hs en video </a></li>
        <li> 6 Cusrsos online total 340 videos</a></li>
        <li> 5 Libros Off Line en Pdf</a></li>
        <li> 2 Libros online</a></li>
       
    </ul>
  `;
  
  }

//Clases//////////////////////////////////////////////////////////////////////////////////////////////////
  const soporte = () => {

    document.querySelector('#myDivNav2').innerHTML = `
  
  <h4>Soporte Online</h4>
  Autodidacta o Autoaprendizaje se refiere a la práctica de adquirir conocimientos o habilidades por
  cuenta propia, sin la ayuda directa de un maestro o instructor tradicional. Un autodidacta es alguien que se
  enseña a sí mismo utilizando recursos disponibles como libros, internet, cursos en línea, tutoriales,
  experimentación personal y cualquier otra fuente de información accesible. El autoaprendizaje implica una
  gran autonomía y motivación intrínseca por parte del individuo para explorar y adquirir conocimiento de manera
  independiente.
  <br><br>
  La inteligencia artificial puede desempeñar un papel importante al proporcionar herramientas y plataformas
  de aprendizaje personalizadas, recomendaciones de contenido relevante y retroalimentación adaptativa para
  guiar el proceso de autoaprendizaje. Esto permite a los autodidactas explorar y adquirir conocimiento de
  manera más eficiente y personalizada, aprovechando al máximo su autonomía y motivación intrínseca.
  <br><br>
  Interactuar con la inteligencia artificial de manera activa, planteando preguntas específicas y filtrando
  la información proporcionada, puede ayudar a obtener una información más concreta y relevante para tus
  necesidades. Al hacer preguntas más detalladas o específicas, puedes dirigir la conversación hacia áreas
  de interés específicas o solicitar clarificaciones sobre temas particulares. Además, al filtrar la información
  proporcionada por la IA y hacer nuevas preguntas basadas en esa información, puedes profundizar en el tema
  y obtener una comprensión más completa. En resumen, la interacción activa con la inteligencia artificial
  puede ser una estrategia efectiva para obtener información más precisa y concreta.
  <br><br>
  El aprendizaje puede ser un viaje desafiante
  y a veces puedes necesitar soporte extra. Es por eso que ofrecemos ayuda adicional para
  complementar tu experiencia de aprendizaje. No dudes en contactarnos si necesitas o tienes
  alguna pregunta. Estamos aquí para brindarte la orientación y el apoyo que necesitas para tener éxito en tu
  camino en el aprendizaje de programación.
 `;
    
    }
    
  

//Function E-book ////////////////////////////////////////////
const inicioJavaScript = () => {
  //  var fragment = document.createDocumentFragment();
  
  
  //var div = document.createElement("div");
  //div.innerHTML = 
  document.querySelector('#myDivNav2').innerHTML = ` JavaScript es un lenguaje de programación
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
  
  `;
  
  //fragment.appendChild(div);
  
  //document.body.appendChild(fragment);
  
  }
  const descargas = () => {
    //let divBannerDesc = document.createElement("div");
    //divBannerDesc.id = "divBannerDesc"
    document.querySelector('#myDivNav2').innerHTML=`<h4>Descargas:</h4>
    <br>
    <div id = "divImg">
    <div class = "divItemDesc">  
    <a id="pdfLink" href="/descargas/politicaDdigital.pdf" download>
    <img class ="imgDesc" src="img/portadaPd.jpg" alt="Descargar PDF" style="width: 300px; height: auto;" >
    <p>Libro de politica moderna enfocado en la informática</p>
    </a>
    </div>
    <div  class = "divItemDesc">
    <a id="pdfLink" href="/descargas/guiDeProgramacion.pdf" download>
        <img class ="imgDesc" src="img/portadaPb.jpg" alt="Descargar PDF" style="width: 300px; height: auto;" >
        <p>Libro de Programacion básica en construcción</p>
        </a>
    </div>
    <div  class = "divItemDesc">
    <a id="pdfLink" href="/descargas/eloquentJavaScript.pdf" download>
        <img class ="imgDesc" src="img/portadaEl.jpg" alt="Descargar PDF" style="width: 300px; height: auto;" >
    <P>3era Edición del libro Eloquent JavaScript en español</P>
    </a>
    </div>
    
    <div  class = "divItemDesc">
    <a href="https://bairesjs.github.io/motos/" style="text-decoration: none;">
    <img class ="imgDesc" src="img/plantilla-2.jpg" style="width: 300px; height: auto;" >
    <p>Página web demo catálogo de Motos</p>
    </a>
    </div>
    
    <div  class = "divItemDesc">
    <a href="https://bairesjs.github.io/preciodeamigo/" style="text-decoration: none;">
    <img class ="imgDesc" src="img/plantilla-3.jpg" style="width: 300px; height: auto;" >
    <p>Página web demo catálogo de herrería</p>
    </a>
    
    </div>
    </div>
    
    
    
    
    <br><br><br><br><br><br>
    `;
  }
//Funcion Canvas //////////////////////////////////////////////

const repositorio = () =>{
  document.querySelector('#myDivNav2').innerHTML=`<h4>Descarga gratis de todos los proyectos:</h4>
  <br>
  <div id = "divImg">
  <div class = "divItemDesc">  
  <a id="pdfLink" href="https://github.com/BairesJs?tab=repositories">
      <img class ="imgDesc" src="img/gitHub.jpg" alt="Descargar PDF" style="width: 300px; height: auto;" >
  </a>
  </div>
`


}
///////////////////////////////////////////////////////////////
const pieDePaginaJs = () => {
  let divBanner1 = document.createElement("div");
  
  let divDatos1 = document.createElement("div")
  divDatos1.id = "divDatos1"
  divDatos1.innerHTML = `

  <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1134795400">
    <img  src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;
    <a href="https://www.instagram.com/baires.js/" style="text-decoration: none;">
    <img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
    <hr>
   `
  divBanner1.appendChild(divDatos1)
  
   

  
  divBanner1.id = "mydivPie";
  let img = document.createElement("img");
  img.id = "img1"
  img.src = "img/pieJavaScript.jpg";
  divBanner1.appendChild(img);
  document.body.appendChild(divBanner1);
  }
  // pieDePaginaJs()

 miBannerJs()
 barraNav1()
 barraNav2()
 pieDePaginaJs()


 //Cursos//////////////////////////////////////////////////






 
 


 






 

  


