function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.title}
      />

      <div>
        <h3>{item.title}</h3>

        <p>Rs. {item.price}</p>

        <div>
          <button onClick={() => onDecrease(item.id)}>
            -
          </button>

          <span> {item.quantity} </span>

          <button onClick={() => onIncrease(item.id)}>
            +
          </button>
        </div>

        <p>
          Subtotal: Rs. {item.price * item.quantity}
        </p>

        <button onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem