export default {
  global: {
    componenteFormativo:
      'Patronaje digital de prendas de vestir                               ',
    descripcionCurso:
      'Explicar el manejo de Softwares para la elaboración de patrones y escalado digital, es parte de la comprensión de esta temática, es por ello, que se abordará todo el proceso de digitalización a partir del reconocimiento de la interfaz, hasta el proceso de trazo automático. Se abordarán los softwares Audaces 360 y OptiTex en detalle; y Gerber se abordará de manera general.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Audaces 360',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Funciones básicas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Patronaje en Audaces de prendas inferiores y superiores',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Escalado de patrones en “Audaces Patrones”',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'OptiTex',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Funciones básicas de PDS',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Patronaje en OptiTex de prendas inferiores y superiores',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Escalado de patrones en Marker OptiTex',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gerber',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Audaces 360 - The most complete solution in systems for the fashion industry. (2021). Retrieved 27 May 2021. from',
      link: 'https://audaces.com/audaces-360/',
    },
    {
      referencia:
        'OptiTex - Soluciones Digitales de Principio a Fin para la industria de Moda y Vestuario. (2021). Retrieved 27 May 2021. from',
      link: 'https://optitex.com/es/',
    },
    {
      referencia:
        'Gerber - convierta sus diseños en productos acabados. (2021). Retrieved 27 May 2021. from',
      link: 'https://www.gerbertechnology.com/es-es/',
    },
    {
      referencia:
        'SENA.  (2020).  Equipo de Desarrollo Curricular, SENA Programa Técnico en Patronaje Industrial de Prendas de Vestir, Centro de Manufactura en Textil y Cuero, Distrito Capital, 2020.',
    },
    {
      referencia:
        'SENA.  (2021).  Equipo de Desarrollo Curricular, SENA Programa Técnico en Elaboración de Prendas de Vestir Sobre Medidas, Centro de Manufactura en Textil y Cuero, Distrito Capital, 2021.',
    },
  ],
  glosario: [
    {
      termino: 'CAD',
      significado: 'Diseño Asistido por Computador.',
    },
    {
      termino: 'CAM',
      significado: 'Manufacturas Asistidas por Computador.',
    },
    {
      termino: 'Digitalizadora	',
      significado:
        'Es un periférico que permite al usuario introducir gráficos o dibujos a mano, tal como lo haría con lápiz y papel.',
    },
    {
      termino: 'Interfaz',
      significado: 'Zona de comunicación o acción de un sistema sobre otro.',
    },
    {
      termino: 'PDS',
      significado: 'Sistema de Diseño de Patrones.',
    },
    {
      termino: 'Piquetes',
      significado:
        'Líneas cortas (0,3 máximo 0,5 cm) en dirección perpendicular al molde, señaladas en el patrón con el fin de facilitar la operación de confección, se hacen para indicar ubicaciones y guiar la unión de cortes.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'Descripción precisa de los pasos para realizar un proceso. Es la respuesta al cómo hacer el proceso.',
    },
    {
      termino: 'Plotter',
      significado:
        'Es una impresora de gran formato que se utiliza para imprimir gráficos y planos.',
    },
    {
      termino: 'Proceso',
      significado:
        'Descripción general de los pasos de una actividad o conjunto de operaciones.',
    },
    {
      termino: 'Segmento',
      significado:
        'Es un fragmento de la recta que está comprendido entre dos puntos, llamados puntos extremos o finales.',
    },
    {
      termino: 'Software',
      significado:
        'Se conoce como software, logicial o soporte lógico al sistema formal de un sistema informático, que comprende el conjunto de los componentes lógicos necesarios que hacen posible la realización de tareas específicas.',
    },
  ],
  complementario: [
    {
      texto:
        'SENA.  (2020).  Interpretación de pantys, recuperado el 27 de mayo de 2021.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9geZEB4JOtQ',
    },
    {
      texto:
        'SENA.  (2021).  Interpretación hípsters, recuperado el 27 de mayo de 2021.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-GlhLbiF6dY',
    },
    {
      texto:
        'SENA.  (2021).  Pantaloncillo masculino, recuperado el 27 de mayo de 2021.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=v9mOfjGAG3Y',
    },
    {
      texto: 'Fernando Jaramillo - Soluciones automatizadas.',
      tipo: 'Manual',
      descarga: '/downloads/0.COMPLEMENTARIO 1 - MANUAL  VERSION 11.pdf',
    },
    {
      texto:
        'Herramientas digitales Moda, 13 de junio 2018, AUDACES TIZADA Trazo.',
      tipo: 'Video',
      link: 'https://youtu.be/C0O6derJC2s',
    },
    {
      texto:
        'Herramientas digitales Moda, 15 de marzo 2018, OPTITEX - MARKER Trazo de patrones.',
      tipo: 'Video',
      link: 'https://youtu.be/fscxWYsenLE',
    },
    {
      texto:
        'Goméz, M.  (2017).  Tutorial Modaris Lectra, reucperado el 28 de mayo de 2021.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qRMjHPIRPiQ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
