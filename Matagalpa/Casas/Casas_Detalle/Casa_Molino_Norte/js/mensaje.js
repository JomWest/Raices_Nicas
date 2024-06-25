var whatsappButtons = document.querySelectorAll(".Ws-button");
var imagePath = "assets/Casas-Recursos/Casa_Molino_Norte/fachada.jpg"; 
var localServerURL = "http://127.0.0.1:5501/Matagalpa/Casas/Casas_Detalle/Casa_Molino_Norte/Casa_molino_norte.html";

whatsappButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var NOmbreCAsa = document.querySelector(".NombreCasa").textContent;
        var phoneNumber = "50587326292";
        var message = "Hola, estoy interesado en la " + NOmbreCAsa + ". ";
        var pageURL = localServerURL + "?image=" + encodeURIComponent(imagePath);
        message += pageURL;

        var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

        window.open(whatsappLink, "_blank");
    });
});
