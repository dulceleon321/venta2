function calcularCambio() {
    const computadora = parseFloat(document.getElementById('computadora').value);
    const impresora = parseFloat(document.getElementById('impresora').value);
    const monitor = parseFloat(document.getElementById('monitor').value);

    const total = computadora + impresora + monitor;
    const cantidadCancelada = parseFloat(document.getElementById('cantidadCancelada').value);

    let resultado = '';
    if (isNaN(cantidadCancelada)) {
        resultado = 'Por favor, ingrese una cantidad válida.';
    } else if (cantidadCancelada < total) {
        resultado = 'Cantidad insuficiente. Total a pagar: Q ' + total.toFixed(2);
    } else {
        const cambio = cantidadCancelada - total;
        resultado = 'Cambio: Q ' + cambio.toFixed(2);
    }

    document.getElementById('resultado').innerText = resultado;
}
