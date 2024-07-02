document.addEventListener("DOMContentLoaded", function() {
    const cantidadInput = document.getElementById("cantidad");
    const opcionSelect = document.getElementById("opcion");
    const totalAPagarElement = document.querySelector(".pagofinal");
    const resumenButton = document.getElementById("resumenBtn");
    
    resumenButton.addEventListener("click", function() {
        const cantidad = parseInt(cantidadInput.value);
        const opcion = opcionSelect.value;

        if (!cantidad || cantidad <= 0) {
            alert("Por favor, ingrese una cantidad válida.");
            return;
        }

        let total = cantidad * 200;
        let descuento = 0;

        switch (opcion) {
            case "Estudiante":
                descuento = 0.8; // 80% de descuento
                break;
            case "Trainee":
                descuento = 0.5; // 50% de descuento
                break;
            case "Junior":
                descuento = 0.15; // 15% de descuento
                break;
            default:
                descuento = 0;
        }

        total = total * (1 - descuento);
        totalAPagarElement.textContent = "total a pagar: $" + total.toFixed(2);
    });
});
