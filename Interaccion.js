const cards = document.getElementById("cards");
const toggleLayoutBtn = document.getElementById("toggleLayoutBtn");
const changeTitleBtn = document.getElementById("changeTitleBtn");
const changeColorsBtn = document.getElementById("changeColorsBtn");
const pageTitle = document.getElementById("pageTitle");
const footerGallery = document.getElementById("footerGallery");
const imageUrlInput = document.getElementById("imageUrlInput");
const addFooterImageBtn = document.getElementById("addFooterImageBtn");

// Botón: ORDENAR: COLUMNAS A FILAS
toggleLayoutBtn.addEventListener("click", () => {
  cards.classList.toggle("stacked");
});

// Botón: CAMBIAR TITULO
changeTitleBtn.addEventListener("click", () => {
  if (pageTitle.textContent === "University Demo") {
    pageTitle.textContent = "HTML & CSS: Curso práctico avanzado";
  } else {
    pageTitle.textContent = "University Demo";
  }
});

// Botón: CAMBIAR COLORES
changeColorsBtn.addEventListener("click", () => {
  cards.classList.toggle("alt");
});

// Botón: AÑADIR IMAGEN
addFooterImageBtn.addEventListener("click", () => {
  const url = imageUrlInput.value.trim();
  if (url) {
    const img = document.createElement("img");
    img.src = url;
    footerGallery.appendChild(img);
    imageUrlInput.value = "";
  } else {
    alert("Intenta de nuevo con otro un URL o añada uno nuevo");
  }
});
