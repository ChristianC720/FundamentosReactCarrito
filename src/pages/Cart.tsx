function Cart(){
    return(
        <>
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        {cart.length === 0 ? (
          <li>No hay productos en el carrito</li>
        ) : (
          cart.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio}
            </li>
          ))
        )}
      </ul>
    </div>
        </>
    )
}
export default Cart