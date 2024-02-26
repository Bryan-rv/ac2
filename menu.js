function mostrarCapturaPedido() {
  document.getElementById("contenido").innerHTML = "";
  cargarContenido("captura-pedido.html");
}

function mostrarActualizarInventario() {
  document.getElementById("contenido").innerHTML = "";
  cargarContenido("actualizar-inventario.html");
}

function mostrarPedidosPendientes() {
  document.getElementById("contenido").innerHTML = "";
  cargarContenido("pedidos-pendientes.html");
}

function cargarContenido(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("contenido").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
