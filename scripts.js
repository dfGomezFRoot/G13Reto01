  // Datos de ejemplo
  const experiencias = [
    { puesto: "Sin Experiencia" }
];

const educacion = [
    { titulo: "Ingeneria en Sistemas", institucion: "Universidad Nacional Abierta y Distancia", año: "2021 a la actualidad" },
    { titulo: "Diplomado en Lenguaje de programacion Python Basico", institucion: "Universidad ECCI", año: "2023" },
    { titulo: "Diplomado en Lenguaje de programacion Python Intermedio", institucion: "Universidad ECCI", año: "2023" },
    { titulo: "AWS Discovery Day: Introducción a la nube y Servicios de AWS", institucion: "Universidad Nacional Abierta y Distancia", año: "2023" },
];

// Función para agregar elementos a la lista
function agregarElementos(datos, elementoId) {
    const elemento = document.getElementById(elementoId);
    datos.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${item.puesto || item.titulo}</h3>
                         <p>${item.empresa || item.institucion}</p>
                         <p>${item.periodo || item.año}</p>`;
        elemento.appendChild(div);
    });
}

// Agregar experiencias y educación
agregarElementos(experiencias, 'experiencia-lista');
agregarElementos(educacion, 'educacion-lista');