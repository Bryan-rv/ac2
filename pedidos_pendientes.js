var pedidosPendientes = ["Pizza Margarita - Mesa 1", "Hamburguesa Doble - Mesa 2", "Pizza Vegetariana - Mesa 3"];
var listaPedidos = document.getElementById("lista-pedidos");

pedidosPendientes.forEach(function(pedido) {
  var listItem = document.createElement("li");
  listItem.textContent = pedido;
  listaPedidos.appendChild(listItem);
});
