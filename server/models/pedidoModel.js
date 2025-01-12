//Array donde se almacenan los pedidos
const PEDIDOS = []

//Proximo id del pedido
let localizadorId = 1;

//Metodo para obtener todos los pedidos
const getPedidos = () => PEDIDOS;

//Metodo para obtener un pedido a partir de su localizador
const getPedidoLocalizador = (localizador) =>
    PEDIDOS.find((pedido) => pedido.localizador === localizador);

//Metodo para obtener un pedido a partir de su identificador numerico
const getPedidoId = (id) => PEDIDOS.find((pedido) => pedido.idPedido === id);

//Metodo para modicar el estado de un pedido
const actualizarEstadoPedido = (localizador, estado) => {
    let pedido = getPedidoLocalizador(localizador);

    if(pedido){
        pedido.estado = estado;
    }
    return pedido;
}
//Metodo para eliminar un pedido
const eliminarPedido = (localizador) => {
    const itemIndex = PEDIDOS.findIndex((p) => p.localizador === localizador);
    if (itemIndex > -1){
        PEDIDOS.splice(intemIndex, 1);
    }
}

//Metodo para crear un pedido
const crearPedido = (pedido) => {
    pedido.idPedido = localizadorId;
    localizadorId = localizadorId + 1;
    PEDIDOS.push(pedido);

    return pedido;
}

module.exports = {
    getPedidos,
    getPedidoLocalizador,
    getPedidoId,
    crearPedido,
    actualizarEstadoPedido,
    eliminarPedido
}