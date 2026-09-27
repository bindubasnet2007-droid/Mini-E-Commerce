import CartItem from '../components/CartItem'

function Cart({ cartItems, onRemove, onIncrease, onDecrease }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemove}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          ))}

          <h2>Total: Rs. {total}</h2>
        </div>
      )}
    </div>
  )
}

export default Cart