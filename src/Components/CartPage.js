import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CartPage({ cartItems, onRemoveFromCart }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  const handlePurchase = () => {
    navigate("/address", { state: { cartItems, total } });
  };

  const handleRemove = (itemId) => {
    fetch(`http://localhost:5000/cart/${itemId}`, { method: 'DELETE' })
      .then(() => {
        // Update local state or refetch cart
      });
  };

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", padding: 24 }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee", paddingBottom: 8 }}>
                <span>{item.name} - {item.price}</span>
                <button onClick={() => handleRemove(item.id)} style={{ background: "#f44336", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px" }}>Remove</button>
              </li>
            ))}
          </ul>
          <div style={{ textAlign: "right", fontWeight: "bold", fontSize: 18, marginTop: 16 }}>
            Total: ₹{total}
          </div>
          <button
            style={{ marginTop: 24, width: '100%', padding: 12, background: '#4caf50', color: 'white', border: 'none', borderRadius: 4, fontWeight: 'bold', fontSize: 16, cursor: 'pointer' }}
            onClick={handlePurchase}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage; 