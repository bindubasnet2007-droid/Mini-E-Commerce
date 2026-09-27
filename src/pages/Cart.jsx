import CartItem from "../components/CartItem";

const Cart = ({ cartItems, onRemove, onIncrease, onDecrease }) => {

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>You have {cartItems.length} item(s) in your cart.</p>

          <div className="cart-items">
            {cartItems.map((item, index) => (
              <CartItem
                key={`${item.id}-${index}`}
                item={item}
                onRemove={onRemove}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
              />
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: Rs. {totalPrice}</h2>
          </div>
        </>
      )}

    </div>
  );
};

export default Cart;