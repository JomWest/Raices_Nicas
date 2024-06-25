var whatsappButtons = document.querySelectorAll(".Ws-button");
var imagePath = "/ruta/a/tu/imagen/fachada.jpg"; // Ruta de la imagen en tu sitio Netlify
var netlifyURL = "https://raicesnicas.netlify.app"; // URL base de tu sitio Netlify

whatsappButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var NOmbreCAsa = document.querySelector(".NombreCasa").textContent;
        var phoneNumber = "50587326292";
        var message = "Hola, estoy interesado en la " + NOmbreCAsa + ". ";
        message += "Aquí tienes más detalles: ";

        // Crear el enlace directo a la imagen en tu sitio Netlify
        var imageURL = netlifyURL + imagePath;

        // Agregar el enlace a la imagen al mensaje
        message += imageURL;

        var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

        window.open(whatsappLink, "_blank");
    });
});
