import React from "react";

function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <aside style={{ padding: "20px", background: "#fff", border: "1px solid #ccc", margin: "20px", borderRadius: "8px" }}>
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>{item.name} - {item.price}</span>
              <button onClick={() => onRemoveFromCart(idx)} style={{ background: "#f44336", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px" }}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Cart; 