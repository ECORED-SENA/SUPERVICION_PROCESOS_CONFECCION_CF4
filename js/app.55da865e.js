(function(e){function a(a){for(var o,t,c=a[0],s=a[1],l=a[2],u=0,d=[];u<c.length;u++)t=c[u],Object.prototype.hasOwnProperty.call(r,t)&&r[t]&&d.push(r[t][0]),r[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(a);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,a=0;a<i.length;a++){for(var n=i[a],o=!0,t=1;t<n.length;t++){var c=n[t];0!==r[c]&&(o=!1)}o&&(i.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},t={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"8fe2ab7c","chunk-0206bfa0":"1ec802cc","chunk-04b93936":"9bf845ce","chunk-13a6037e":"4678d61e","chunk-16015154":"7f542321","chunk-17977988":"fd9f23f9","chunk-2c06842c":"a531aff5","chunk-2d208d90":"cfe99bd7","chunk-2d21d0e2":"645ccfc9","chunk-2d22c123":"7f95b559","chunk-2e80bb9a":"73b1e89c","chunk-3145fe0f":"8801e097","chunk-328f70dd":"72c7837a","chunk-3807499c":"9716e6d1","chunk-3c94cd2f":"5a592ac6","chunk-3dc647fd":"c45dbc17","chunk-4cdd78c0":"8a83c42f","chunk-515a8379":"2834c848","chunk-53ccb27e":"3bca94b8","chunk-59974754":"65241b9c","chunk-766a929b":"7fcdd33f","chunk-839300a6":"30893d5c","chunk-c796899c":"5f949034",comple:"b9e59979",creditos:"1455779c",glosario:"6b611660",intro:"79d41684",referencias:"8339391c",tema1:"44561303",tema2:"f5301b76",tema3:"a71e419d"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1};t[e]?a.push(t[e]):0!==t[e]&&n[e]&&a.push(t[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"a67e9f54","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"9ca6e835","chunk-766a929b":"b55b6314","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"11c2e3c8",creditos:"3006d74f",glosario:"55b10aad",intro:"0e433876",referencias:"afc9efb9",tema1:"d035a47c",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===r)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete t[e],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){t[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",d.name="ChunkLoadError",d.type=o,d.request=t,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],i={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=i,s=n("2877"),l=Object(s["a"])(c,t,r,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),p=n("ae58"),m=n("7e58");d["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:m["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema3").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema3").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Patronaje digital de prendas de vestir                               ",descripcionCurso:"Explicar el manejo de softwares para la elaboración de patrones y escalado digital, es parte de la comprensión de esta temática, es por ello, que se abordará todo el proceso de digitalización a partir del reconocimiento de la interfaz, hasta el proceso de trazo automático. Se abordarán los softwares Audaces 360 y OptiTex en detalle; y Gerber se abordará de manera general.",imagenBannerPrincipal:n("9370"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Audaces 360",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Funciones básicas",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Patronaje en Audaces de prendas inferiores y superiores",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Escalado de patrones en “Audaces Patrones”",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"OptiTex",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Funciones básicas de PDS",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Patronaje en OptiTex de prendas inferiores y superiores",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Escalado de patrones en Marker OptiTex",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Gerber",desarrolloContenidos:!0,subMenu:[]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Audaces 360 - The most complete solution in systems for the fashion industry. (2021). Retrieved 27 May 2021, from",link:"https://audaces.com/audaces-360/"},{referencia:"OptiTex - Soluciones Digitales de Principio a Fin para la industria de Moda y Vestuario. (2021), Retrieved 27 May 2021, from",link:"https://optitex.com/es/"},{referencia:"Gerber - convierta sus diseños en productos acabados. (2021), Retrieved 27 May 2021, from",link:"https://www.gerbertechnology.com/es-es/"},{referencia:"SENA.  (2020).  Equipo de Desarrollo Curricular, SENA Programa Técnico en Patronaje Industrial de Prendas de Vestir, Centro de Manufactura en Textil y Cuero, Distrito Capital, 2020."},{referencia:"SENA.  (2021).  Equipo de Desarrollo Curricular, SENA Programa Técnico en Elaboración de Prendas de Vestir Sobre Medidas, Centro de Manufactura en Textil y Cuero, Distrito Capital, 2021."}],glosario:[{termino:"CAD",significado:"Diseño Asistido por Computador."},{termino:"CAM",significado:"Manufacturas Asistidas por Computador."},{termino:"Digitalizadora\t",significado:"Es un periférico que permite al usuario introducir gráficos o dibujos a mano, tal como lo haría con lápiz y papel."},{termino:"Interfaz",significado:"Zona de comunicación o acción de un sistema sobre otro."},{termino:"PDS",significado:"Sistema de Diseño de Patrones."},{termino:"Piquetes",significado:"Líneas cortas (0,3 máximo 0,5 cm) en dirección perpendicular al molde, señaladas en el patrón con el fin de facilitar la operación de confección, se hacen para indicar ubicaciones y guiar la unión de cortes."},{termino:"Procedimiento",significado:"Descripción precisa de los pasos para realizar un proceso. Es la respuesta al cómo hacer el proceso."},{termino:"Plotter",significado:"Es una impresora de gran formato que se utiliza para imprimir gráficos y planos."},{termino:"Proceso",significado:"Descripción general de los pasos de una actividad o conjunto de operaciones."},{termino:"Segmento",significado:"Es un fragmento de la recta que está comprendido entre dos puntos, llamados puntos extremos o finales."},{termino:"Software",significado:"Se conoce como software, logicial o soporte lógico al sistema formal de un sistema informático, que comprende el conjunto de los componentes lógicos necesarios que hacen posible la realización de tareas específicas."}],complementario:[{texto:"SENA.  (2020).  Interpretación de pantys, recuperado el 27 de mayo de 2021.",tipo:"Video",link:"https://www.youtube.com/watch?v=9geZEB4JOtQ"},{texto:"SENA.  (2021).  Interpretación hípsters, recuperado el 27 de mayo de 2021.",tipo:"Video",link:"https://www.youtube.com/watch?v=-GlhLbiF6dY"},{texto:"SENA.  (2021).  Pantaloncillo masculino, recuperado el 27 de mayo de 2021.",tipo:"Video",link:"https://www.youtube.com/watch?v=v9mOfjGAG3Y"},{texto:"Fernando Jaramillo - Soluciones automatizadas.",tipo:"Manual",descarga:"/downloads/0.COMPLEMENTARIO 1 - MANUAL  VERSION 11.pdf"},{texto:"Herramientas digitales Moda, 13 de junio 2018, AUDACES TIZADA Trazo.",tipo:"Video",link:"https://youtu.be/C0O6derJC2s"},{texto:"Herramientas digitales Moda, 15 de marzo 2018, OPTITEX - MARKER Trazo de patrones.",tipo:"Video",link:"https://youtu.be/fscxWYsenLE"},{texto:"Goméz, M.  (2017).  Tutorial Modaris Lectra, reucperado el 28 de mayo de 2021.",tipo:"Video",link:"https://www.youtube.com/watch?v=qRMjHPIRPiQ"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Paola Angélica Castro Salazar",cargo:"Experta temática",centro:"Centro de Formación en Diseño, Confección y Moda - Regional Antioquia"},{nombre:"Ledy Johana Velásquez Hernández",cargo:"Experta temática",centro:"Centro de Formación en Diseño, Confección y Moda - Regional Antioquia"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Diseñadora instruccional",centro:"Centro de la Industria para la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Jhana Johanna Bustillo Ardila",cargo:"Revisión de estilo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"María Natalia Maldonado Delgado",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Edgar Mauricio Cortes García",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jenny Paola Montillo Gélvez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var y=n("9224");o["a"].prototype.$package=y,new o["a"]({router:b,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},9370:function(e,a,n){e.exports=n.p+"img/banner-princiapal.5618f4d7.png"},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.48e259bb.png"}});
//# sourceMappingURL=app.55da865e.js.map