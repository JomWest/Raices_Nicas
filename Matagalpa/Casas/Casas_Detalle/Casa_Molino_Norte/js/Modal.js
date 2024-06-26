// Obtener referencia al modal y al contenido del modal
var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content");

// Función para abrir el modal y cargar su contenido
function openModal() {
    // Mostrar el modal
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Iniciar el carousel principal
initCarousel(document.querySelector(".carousel"));

// Función para inicializar el carousel
function initCarousel(carousel) {
    var carouselItems = carousel.querySelectorAll(".carousel-item");
    var totalItems = carouselItems.length;
    var slide = 0;

    function moveToSelectedSlide(index) {
        if (index < 0 || index >= totalItems) return;

        slide = index;

        carouselItems.forEach(function(item, i) {
            if (i === slide) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // Función para avanzar al siguiente slide
    function nextSlide() {
        slide = (slide + 1) % totalItems;
        moveToSelectedSlide(slide);
    }

    // Función para retroceder al slide anterior
    function prevSlide() {
        slide = (slide - 1 + totalItems) % totalItems;
        moveToSelectedSlide(slide);
    }

    // Event listeners para los controles del carousel
    var nextBtn = carousel.querySelector(".next");
    var prevBtn = carousel.querySelector(".prev");

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", function() {
            nextSlide();
        });

        prevBtn.addEventListener("click", function() {
            prevSlide();
        });
    }

    // Iniciar el carousel
    moveToSelectedSlide(0);
}

// Inicializar el carousel dentro del modal
function initModalCarousel() {
    var modalCarousel = document.getElementById("modalCarousel");
    var modalItems = modalCarousel.querySelectorAll(".carousel-item");
    var totalItems = modalItems.length;
    var slide = 0;

    function moveToSelectedSlide(index) {
        if (index < 0 || index >= totalItems) return;

        slide = index;

        modalItems.forEach(function(item, i) {
            if (i === slide) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // Función para avanzar al siguiente slide
    function nextSlide() {
        slide = (slide + 1) % totalItems;
        moveToSelectedSlide(slide);
    }

    // Función para retroceder al slide anterior
    function prevSlide() {
        slide = (slide - 1 + totalItems) % totalItems;
        moveToSelectedSlide(slide);
    }

    // Event listeners para los controles del carousel en el modal
    var nextBtn = modalCarousel.querySelector(".next");
    var prevBtn = modalCarousel.querySelector(".prev");

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", function() {
            nextSlide();
        });

        prevBtn.addEventListener("click", function() {
            prevSlide();
        });
    }

    // Iniciar el carousel en el modal
    moveToSelectedSlide(0);
}

// Asignar evento click a cada imagen del carousel principal para abrir el modal
var carouselItems = document.querySelectorAll(".carousel-item");
carouselItems.forEach(function(item) {
    item.addEventListener("click", function() {
        openModal();
        initModalCarousel(); // Iniciar el carousel dentro del modal al abrirlo
    });
});

// Asignar evento click al botón de cerrar del modal
var closeButton = document.querySelector(".close");
if (closeButton) {
    closeButton.addEventListener("click", function() {
        closeModal();
    });
}

// Cerrar modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};
