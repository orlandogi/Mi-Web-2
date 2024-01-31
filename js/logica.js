const estadosPorPais = {
  México: ["Ciudad de México", "Nuevo León", "Jalisco"],
  Canadá: ["Ontario", "Quebec", "British Columbia"]
};

const municipiosPorEstado = {
  "Ciudad de México": ["Azcapotzalco", "Coyoacán", "Miguel Hidalgo"],
  "Nuevo León": ["Monterrey", "San Pedro Garza García", "Guadalupe"],
  "Jalisco": ["Guadalajara", "Zapopan", "Tlaquepaque"],
  "Ontario": ["Toronto", "Mississauga", "Ottawa"],
  "Quebec": ["Montreal", "Quebec City", "Laval"],
  "British Columbia": ["Vancouver", "Victoria", "Surrey"]
};

const localidadesPorMunicipio = {
  "Azcapotzalco": ["Azcapotzalco", "Santa Cruz Atoyac", "Vallejo"],
  "Coyoacán": ["Coyoacán", "San Ángel", "Xochimilco"],
  "Miguel Hidalgo": ["Polanco", "Chapultepec", "Tacubaya"],
  "Monterrey": ["Colonia Independencia", "Colonia Mitras", "Colonia San Jerónimo"],
  "San Pedro Garza García": ["Colonia del Valle", "Privada Versalles", "Misión del Valle"],
  "Guadalupe": ["Colonia La Pastora", "Colonia Santa Cecilia", "Colonia San Miguel"],
  "Guadalajara": ["Chapultepec", "Oblatos", "Flamingo"],
  "Zapopan": ["Nuevo México", "La Venta del Astillero", "San Esteban"],
  "Tlaquepaque": ["San Pedrito Tlaquepaque", "Santa Anita", "San José Tateposco"],
  "Toronto": ["Scarborough", "North York", "Etobicoke"],
  "Mississauga": ["Brampton", "Oakville", "Peel"],
  "Ottawa": ["Gatineau", "Kanata", "Orléans"],
  "Montreal": ["Montreal", "Lachine", "Pointe-Claire"],
  "Quebec City": ["Quebec City", "Lévis", "Sainte-Foy"],
  "Laval": ["Laval", "Chomedey", "Sainte-Rose"],
  "Vancouver": ["Burnaby", "Richmond", "New Westminster"],
  "Victoria": ["Esquimalt", "Saanich", "Oak Bay"],
  "Surrey": ["Delta", "White Rock", "Newton"]
};

function cargarEstados() {
  const paisSeleccionado = document.getElementById("pais").value;
  const estadoSelect = document.getElementById("estado");
  const municipioSelect = document.getElementById("municipio");
  const localidadSelect = document.getElementById("localidad");

  estadoSelect.innerHTML = "<option value='' disabled selected>Seleccione un Estado</option>";
  municipioSelect.innerHTML = "<option value='' disabled selected>Seleccione un Estado primero</option>";
  localidadSelect.innerHTML = "<option value='' disabled selected>Seleccione un Municipio primero</option>";

  if (paisSeleccionado === "México" || paisSeleccionado === "Canadá") {
    estadoSelect.disabled = false;
    estadosPorPais[paisSeleccionado].forEach((estado) => {
      const option = document.createElement("option");
      option.value = estado;
      option.textContent = estado;
      estadoSelect.appendChild(option);
    });
    
  } else {
    estadoSelect.disabled = true;
  }

  municipioSelect.disabled = true;
  localidadSelect.disabled = true;

  actualizarEstadoBoton();
}

function cargarMunicipios() {
  const estadoSeleccionado = document.getElementById("estado").value;
  const municipioSelect = document.getElementById("municipio");
  const localidadSelect = document.getElementById("localidad");

  municipioSelect.innerHTML = "<option value='' disabled selected>Seleccione un Municipio</option>";
  localidadSelect.innerHTML = "<option value='' disabled selected>Seleccione un Municipio primero</option>";

  if (estadoSeleccionado) {
    municipioSelect.disabled = false;
    municipiosPorEstado[estadoSeleccionado].forEach((municipio) => {
      const option = document.createElement("option");
      option.value = municipio;
      option.textContent = municipio;
      municipioSelect.appendChild(option);
    });
  } else {
    municipioSelect.disabled = true;
  }

  localidadSelect.disabled = true;

  actualizarEstadoBoton();
}

function cargarLocalidades() {
  const municipioSeleccionado = document.getElementById("municipio").value;
  const localidadSelect = document.getElementById("localidad");

  localidadSelect.innerHTML = "<option value='' disabled selected>Seleccione una Localidad</option>";

  if (municipioSeleccionado) {
    localidadSelect.disabled = false;
    localidadesPorMunicipio[municipioSeleccionado].forEach((localidad) => {
      const option = document.createElement("option");
      option.value = localidad;
      option.textContent = localidad;
      localidadSelect.appendChild(option);
    });
  } else {
    localidadSelect.disabled = true;
  }

  actualizarEstadoBoton();
}

function seleccionLocalidad() {
  actualizarEstadoBoton();
}

function actualizarEstadoBoton() {
  const paisSeleccionado = document.getElementById("pais").value;
  const estadoSeleccionado = document.getElementById("estado").value;
  const municipioSeleccionado = document.getElementById("municipio").value;
  const localidadSeleccionada = document.getElementById("localidad").value;
  const mostrarResultadosBtn = document.getElementById("mostrarResultadosBtn");


  mostrarResultadosBtn.disabled = !(
    (paisSeleccionado !== "" && paisSeleccionado !== "Seleccione un País") &&
    (estadoSeleccionado !== "" && estadoSeleccionado !== "Seleccione un Estado") &&
    (municipioSeleccionado !== "" && municipioSeleccionado !== "Seleccione un Municipio") &&
    (localidadSeleccionada !== "" && localidadSeleccionada !== "Seleccione una Localidad")
  );
}

function mostrarResultados() {
  const paisSeleccionado = document.getElementById("pais").value;
  const estadoSeleccionado = document.getElementById("estado").value;
  const municipioSeleccionado = document.getElementById("municipio").value;
  const localidadSeleccionada = document.getElementById("localidad").value;
  
  document.getElementById("paisSeleccionado").innerText = "País: " + paisSeleccionado;
  document.getElementById("estadoSeleccionado").innerText = "Estado: " + estadoSeleccionado;
  document.getElementById("municipioSeleccionado").innerText = "Municipio: " + municipioSeleccionado;
  document.getElementById("localidadSeleccionada").innerText = "Localidad: " + localidadSeleccionada;
  mostrarImagenPais(paisSeleccionado);


  document.getElementById("resultadosCard").style.display = "block";
}

function mostrarImagenPais(paisSeleccionado) {
    const imagenPais = document.getElementById("imagenPais");

    let rutaImagen = "";
    if (paisSeleccionado === "México") {
      rutaImagen = "img/Mexico.jpg"; 
    } else if (paisSeleccionado === "Canadá") {
      rutaImagen = "img/Canada.jpg";
    }

    if (rutaImagen) {
      imagenPais.src = rutaImagen;
      imagenPais.style.display = "block";
    } else {
      imagenPais.style.display = "none";
    }
  }