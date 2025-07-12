import React from "react";

function UserDashboard({ user, cart }) {
  // Example recent orders (static for now)
  const recentOrders = [
    { id: 1, name: "Paracetamol", date: "2024-06-01", price: "₹25", status: "Delivered" },
    { id: 2, name: "Vitamin C Tablets", date: "2024-05-28", price: "₹150", status: "Shipped" },
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
            <li key={order.id} style={{ borderBottom: "1px solid #eee", padding: "8px 0", display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <div>
                <span>{order.name}</span> <span style={{ color: "#888", marginLeft: 8 }}>({order.date})</span> <span style={{ color: '#388e3c', marginLeft: 8 }}>{order.status}</span>
                {/* Live order tracking mock */}
                {order.status !== 'Delivered' && (
                  <span style={{ marginLeft: 8, color: '#1976d2', fontSize: 13 }}>Live Tracking: <span style={{ fontWeight: 600 }}>In Transit</span></span>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontWeight: 500 }}>{order.price}</span>
                <button style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 10px', fontSize: 13, cursor: 'pointer' }}>Repeat Order</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Chat with Pharmacist */}
      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <button style={{ background: '#43a047', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 24px', fontSize: 16, display: 'flex', alignItems: 'center', gap: 8, margin: '0 auto' }}>
          <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M12 3C6.477 3 2 6.805 2 11c0 1.61.67 3.09 1.82 4.32-.13.98-.56 2.09-1.7 3.18-.2.19-.25.5-.13.75.12.25.39.36.64.28 2.19-.7 3.7-1.56 4.56-2.13C8.98 17.77 10.45 18 12 18c5.523 0 10-3.805 10-7 0-4.195-4.477-8-10-8zm-1 9H7v-2h4v2zm6 0h-4v-2h4v2z"/></svg>
          Chat with Pharmacist
        </button>
      </div>
    </section>
  );
}

export default UserDashboard; 