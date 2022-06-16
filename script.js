let collegeBD = [
  {
    carrera: "Ing Sistemas",
    semestres: 10,
    materias: [
      "Programacion 1",
      "Calculo Multivariado",
      "Calculo Integral",
      "Contabilidad",
    ],
    creditos: 42,
    maestros: [
      {
        nombre: "Michael Cocuy",
        edad: "25",
        profesion: ["Desarrollador Web", "Desarrollador DevOps"],
      },
      {
        nombre: "Gabriela Diaz",
        edad: "23",
        profesion: ["Desarrollador Web", "Ing Sistemas", "Aruqitectura"],
      },
      {
        nombre: "Milton de Gsus",
        edad: "25",
        profesion: [
          "Desarrollador Web",
          "Desarrollador DevOps",
          "Master en Lenguas",
        ],
      },
    ],
    estudiantes: [
      {
        nombre: "Juan Diaz",
        edad: 25,
        semestre: 1,
      },
      {
        nombre: "Julian Paez",
        edad: 25,
        semestre: 12,
      },
      {
        nombre: "Julian Fontanarosa",
        edad: 19,
        semestre: 3,
      },
      {
        nombre: "Estiven Rozo",
        edad: 17,
        semestre: 5,
      },
      {
        nombre: "Lucia Fernada Perez",
        edad: 22,
        semestre: 6,
      },
    ],
  },
];

//Punto 1

for (let i = 0; i <= collegeBD.length - 1; i++) {
  console.log(collegeBD[i].carrera);
}

//Punto 2
for (let i = 0; i <= collegeBD.length - 1; i++) {
  console.log(
    `La carrera de ${collegeBD[i].carrera} tiene ${collegeBD[i].semestres} semestres`
  );
}

//Punto 3
for (let i = 0; i <= collegeBD.length - 1; i++) {
  credit = `${collegeBD[i].creditos / collegeBD[i].materias.length}`;
  console.log(
    `Debido a que la carrera de ${collegeBD[i].carrera} tiene ${collegeBD[i].creditos} creditos y ${collegeBD[i].materias.length} materias, cada materia tiene ${credit} creditos`
  );
}

//Punto 4
for (let i = 0; i <= collegeBD.length - 1; i++) {
  console.log(
    `La carrera de ${collegeBD[i].carrera} tiene ${collegeBD[i].maestros.length} maestros`
  );
}

//Punto 5
for (let i = 0; i <= collegeBD.length - 1; i++) {
  let menor = collegeBD[i].maestros[0].edad;
  let prof = collegeBD[i].maestros[0].nombre;
  for (let j = 0; j <= collegeBD[i].maestros.length - 1; j++) {
    if (menor >= collegeBD[i].maestros[j].edad) {
      menor = `${collegeBD[i].maestros[j].edad}`;
      prof = `${collegeBD[i].maestros[j].nombre}`;
    }
  }

  console.log(
    `El/La maestro/a ${prof} es el/la más joven de la carrera de ${collegeBD[i].carrera} `
  );
}

//Punto 6
for (let i = 0; i <= collegeBD.length - 1; i++) {
  for (let j = 0; j <= collegeBD[i].estudiantes.length - 1; j++) {
    if (collegeBD[i].estudiantes[j].semestre > collegeBD[i].semestres) {
      console.log(
        `el estudiante ${collegeBD[i].estudiantes[j].nombre} de la carrera de ${collegeBD[i].carrera} lleva más tiempo del que deberia durar la carrera (${collegeBD[i].estudiantes[j].semestre} semestres de ${collegeBD[i].semestres} )`
      );
    }
  }
}

//Punto 7
for (let i = 0; i <= collegeBD.length - 1; i++) {
  let min = collegeBD[i].estudiantes[0].edad;
  let e = collegeBD[i].estudiantes[0].nombre;
  for (let j = 0; j <= collegeBD[i].estudiantes.length - 1; j++) {
    if (min >= collegeBD[i].estudiantes[j].edad) {
      min = `${collegeBD[i].estudiantes[j].edad}`;
      e = `${collegeBD[i].estudiantes[j].nombre}`;
    }
  }

  console.log(
    `El/La estudiante/a ${e} es el/la más joven de la carrera de ${collegeBD[i].carrera} `
  );
}

//Punto 8
for (let i = 0; i <= collegeBD.length - 1; i++) {
  console.log(
    `En la carrera de ${collegeBD[i].carrera} hay ${collegeBD[i].estudiantes.length} estudiantes`
  );
}

//Punto 9
for (let i = 0; i <= collegeBD.length - 1; i++) {
  let antiguo = collegeBD[i].estudiantes[0].semestre;
  let est = collegeBD[i].estudiantes[0].nombre;
  for (let j = 0; j <= collegeBD[i].estudiantes.length - 1; j++) {
    if (
      antiguo <= collegeBD[i].estudiantes[j].semestre &&
      collegeBD[i].estudiantes[j].semestre <= collegeBD[i].semestres
    ) {
      menor = `${collegeBD[i].estudiantes[j].semestre}`;
      est = `${collegeBD[i].estudiantes[j].nombre}`;
    }
  }

  console.log(
    `El/La estudiante ${est} es el/la más antuguo/a de la carrera de ${collegeBD[i].carrera} `
  );
}