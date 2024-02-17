const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
    $(reservar).click(function () {
        alert("Reserva efectuada correctamente")

    });

    $(document).ready(function () {
        $(registro).click(function () {
            alert("Check-in de viaje efectuado correctamente")
        });




    });
});
