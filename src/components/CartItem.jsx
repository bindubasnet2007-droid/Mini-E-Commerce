const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div>
        <h3>{item.name}</h3>
        <p>Category: {item.category}</p>
        <p>Price: Rs. {item.price}</p>

        <div>
          <button type="button" onClick={() => onDecrease(item.id)}>
            -
          </button>

          <span> {item.quantity || 1} </span>

          <button type="button" onClick={() => onIncrease(item.id)}>
            +
          </button>
        </div>
      </div>

      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>

    </div>
  );
};

export default CartItem;