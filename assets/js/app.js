

$(document).ready(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    $("#reservar").click(function () {
        alert("Reserva efectuada correctamente")

    });

    $("#registro").click(function () {
        alert("Check-in de viaje efectuado correctamente")
    });

    $("#send").click(function () {
        alert("Mensaje enviado correctamente")
    });
});


