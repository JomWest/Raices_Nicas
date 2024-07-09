var whatsappButtons = document.querySelectorAll(".Ws-button");
var currentURL = window.location.href;
whatsappButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        var NOmbreCAsa = document.querySelector(".NombreCasa").textContent;
        var phoneNumber = "50587326292";
        var message = "Hola, estoy interesado en la " + NOmbreCAsa + ". ";
        message += "¿Podrías proporcionarme más información la proiedad?\n";

        var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message) + currentURL;

        window.open(whatsappLink, "_blank");
    });
});

