// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        isDragging = true;
    }

    function handleTouchMove(event) {
        if (!isDragging) return;
        const currentX = event.touches[0].clientX;
        const diffX = startX - currentX;
        if (diffX > 50) {
            if (currentIndex < carouselItems.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
            isDragging = false;
        } else if (diffX < -50) {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = carouselItems.length - 1;
            }
            updateCarousel();
            isDragging = false;
        }
    }

    function handleTouchEnd() {
        isDragging = false;
    }

    function handleMouseDown(event) {
        startX = event.clientX;
        isDragging = true;
    }

    function handleMouseMove(event) {
        if (!isDragging) return;
        const currentX = event.clientX;
        const diffX = startX - currentX;
        if (diffX > 50) {
            if (currentIndex < carouselItems.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
            isDragging = false;
        } else if (diffX < -50) {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = carouselItems.length - 1;
            }
            updateCarousel();
            isDragging = false;
        }
    }

    function handleMouseUp() {
        isDragging = false;
    }

    carouselInner.addEventListener('touchstart', handleTouchStart);
    carouselInner.addEventListener('touchmove', handleTouchMove);
    carouselInner.addEventListener('touchend', handleTouchEnd);

    carouselInner.addEventListener('mousedown', handleMouseDown);
    carouselInner.addEventListener('mousemove', handleMouseMove);
    carouselInner.addEventListener('mouseup', handleMouseUp);
    carouselInner.addEventListener('mouseleave', handleMouseUp);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Autoplay functionality (optional)
    setInterval(function() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }, 3000); // Cambia cada 3 segundos
});

var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content");
var modalCarousel = document.getElementById("modalCarousel");
var carouselInner = document.querySelector(".carousel-inner");

// Función para abrir el modal y replicar el carousel
function openModal() {
    modal.style.display = "block";

    // Limpiar el contenido existente del modalCarousel
    modalCarousel.innerHTML = "";
    
    // Clonar el carousel original dentro del modal
    var carouselClone = carouselInner.cloneNode(true);
    modalCarousel.appendChild(carouselClone);
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Asignar evento click a cada imagen del carousel para abrir el modal
var carouselItems = document.querySelectorAll(".carousel-item");
carouselItems.forEach(function(item) {
    item.addEventListener("click", function() {
        openModal();
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