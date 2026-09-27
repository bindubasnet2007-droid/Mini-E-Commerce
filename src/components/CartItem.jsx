const CartItem = ({ item, onRemove }) => {
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
      </div>

      <button onClick={() => onRemove(item.id)}>
        Remove
      </button>

    </div>
  );
};

export default CartItem;