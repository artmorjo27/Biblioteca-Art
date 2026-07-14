const catalogo = document.getElementById("catalogo");
const buscar = document.getElementById("buscar");
const categoria = document.getElementById("categoria");

const modal = document.getElementById("modal");
const cerrar = document.querySelector(".cerrar");

const modalImagen = document.getElementById("modalImagen");
const modalTitulo = document.getElementById("modalTitulo");
const modalAutor = document.getElementById("modalAutor");
const modalCategoria = document.getElementById("modalCategoria");
const modalSinopsis = document.getElementById("modalSinopsis");

const categorias = [
    "Ciencia",
    "Fantasía",
    "Thriller",
    "Literatura",
    "Otros"
];

// ==============================
// Mostrar libros agrupados
// ==============================

function mostrarLibros(lista) {

    catalogo.innerHTML = "";

    if (lista.length === 0) {

        catalogo.innerHTML = `
            <h2 style="text-align:center; width:100%; color:#666;">
                No se encontraron libros.
            </h2>
        `;

        return;
    }

    categorias.forEach(nombreCategoria => {

        const librosCategoria = lista.filter(libro => libro.categoria === nombreCategoria);

        if (librosCategoria.length === 0) return;

        const seccion = document.createElement("section");
        seccion.className = "categoria";

        const titulo = document.createElement("h2");
        titulo.className = "tituloCategoria";
        titulo.textContent = nombreCategoria;

        const grid = document.createElement("div");
        grid.className = "gridCategoria";

        librosCategoria.forEach(libro => {

            const tarjeta = document.createElement("div");
            tarjeta.className = "card";

            tarjeta.innerHTML = `

                <img src="${libro.imagen}" alt="${libro.titulo}">

                <div class="info">

                    <h2>${libro.titulo}</h2>

                    <h3>${libro.autor}</h3>

                    <span class="categoriaLibro">
                        ${libro.categoria}
                    </span>

                    <p>
                        ${
                            libro.sinopsis.length > 140
                            ? libro.sinopsis.substring(0,140) + "..."
                            : libro.sinopsis
                        }
                    </p>

                </div>

            `;

            tarjeta.addEventListener("click", () => abrirModal(libro));

            grid.appendChild(tarjeta);

        });

        seccion.appendChild(titulo);
        seccion.appendChild(grid);

        catalogo.appendChild(seccion);

    });

}

// ==============================
// Abrir modal
// ==============================

function abrirModal(libro){

    modal.style.display = "flex";

    modalImagen.src = libro.imagen;

    modalImagen.alt = libro.titulo;

    modalTitulo.textContent = libro.titulo;

    modalAutor.textContent = libro.autor;

    modalCategoria.textContent = libro.categoria;

    modalSinopsis.textContent = libro.sinopsis;

}

// ==============================
// Cerrar modal
// ==============================

cerrar.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

// ==============================
// Buscador + filtro
// ==============================

function filtrarLibros(){

    const texto = buscar.value.toLowerCase();

    const categoriaSeleccionada = categoria.value;

    const resultado = libros.filter(libro => {

        const coincideTexto =

            libro.titulo.toLowerCase().includes(texto)

            ||

            libro.autor.toLowerCase().includes(texto);

        const coincideCategoria =

            categoriaSeleccionada === "Todos"

            ||

            libro.categoria === categoriaSeleccionada;

        return coincideTexto && coincideCategoria;

    });

    mostrarLibros(resultado);

}

buscar.addEventListener("input", filtrarLibros);

categoria.addEventListener("change", filtrarLibros);

// ==============================
// Inicio
// ==============================

mostrarLibros(libros);