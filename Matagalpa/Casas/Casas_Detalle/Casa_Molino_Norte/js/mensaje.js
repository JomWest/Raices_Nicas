var whatsappButtons = document.querySelectorAll(".Ws-button");

whatsappButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var NOmbreCAsa = document.querySelector(".NombreCasa").textContent;
        var phoneNumber = "50587326292";
        var message = "Hola, estoy interesado en la " + NOmbreCAsa + ". ";
        message += "¿Podrías proporcionarme más información la proiedad?\n";

        var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

        window.open(whatsappLink, "_blank");
    });
});

