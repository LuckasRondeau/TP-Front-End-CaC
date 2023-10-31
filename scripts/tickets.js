
function montoPagar() {
    Event.preventDefault();

    const cantidad = parseInt(document.getElementById("input-cantidad").value);
    const categoria = document.getElementById("select-tickets").value;
    const valor = 200;
    let valorEntrada = 0;
    let valorTotal = 0;

    const precios = {
        1: 0.2,
        2: 0.5,
        3: 0.85,
        4: 1,
    };

    if (cantidad > 0 && categoria > 0 && categoria <= 4) {
        valorEntrada = valor * precios[categoria];
        valorTotal = valorEntrada * cantidad;
    } else {
        swal.fire({
            title: "Error!",
            text: "No se ha completado un campo o se ha ingresado un valor inválido",
            icon: "error",
            width: "330px",
        });
    }

    document.getElementById("input-total-pagar").value =
        "Monto total a pagar: $" + valorTotal.toFixed(2);
}

function borrar() {
    const form = document.getElementById("formulario-tickets");
    form.reset();
}
