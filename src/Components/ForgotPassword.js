import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send a request to your backend here
    setMessage("If this email exists, a password reset link has been sent.");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(120deg, #e0f7fa 0%, #e8f5e9 100%)" }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: 36, borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.10)", minWidth: 340, width: "100%", maxWidth: 380 }}>
        <h2 style={{ textAlign: "center", marginBottom: 24, color: "#388e3c" }}>
          <span role="img" aria-label="lock">🔒</span> Forgot Password
        </h2>
        {message && <div style={{ color: "#388e3c", marginBottom: 16 }}>{message}</div>}
        <div style={{ marginBottom: 24 }}>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: 10, marginTop: 6, borderRadius: 6, border: "1px solid #bdbdbd" }}
            required
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: 12, background: "#43a047", color: "white", border: "none", borderRadius: 6, fontWeight: "bold", fontSize: 16, marginBottom: 10, cursor: "pointer" }}>
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword; 