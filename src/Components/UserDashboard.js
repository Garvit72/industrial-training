import React from "react";

function UserDashboard({ user, cart }) {
  // Example recent orders (static for now)
  const recentOrders = [
    { id: 1, name: "Paracetamol", date: "2024-06-01", price: "₹25" },
    { id: 2, name: "Vitamin C Tablets", date: "2024-05-28", price: "₹150" },
  ];

  return (
    <section style={{ padding: 32, background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", maxWidth: 600, margin: "40px auto" }}>
      <h2 style={{ color: "#388e3c", marginBottom: 16 }}>Welcome, {user}!</h2>
      <div style={{ marginBottom: 24 }}>
        <strong>Cart Items:</strong> {cart.length}
      </div>
      <div>
        <strong>Recent Orders</strong>
        <ul style={{ listStyle: "none", padding: 0, marginTop: 8 }}>
          {recentOrders.map(order => (
            <li key={order.id} style={{ borderBottom: "1px solid #eee", padding: "8px 0" }}>
              <span>{order.name}</span> <span style={{ color: "#888", marginLeft: 8 }}>({order.date})</span> <span style={{ float: "right" }}>{order.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UserDashboard; 