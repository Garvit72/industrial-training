import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
        onLogin(username);
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(120deg, #e0f7fa 0%, #e8f5e9 100%)"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: 36,
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          minWidth: 340,
          width: "100%",
          maxWidth: 380
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 24, color: "#388e3c" }}>
          <span role="img" aria-label="login">🔑</span> Login
        </h2>
        {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
        <div style={{ marginBottom: 18 }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              marginTop: 6,
              borderRadius: 6,
              border: "1px solid #bdbdbd"
            }}
            autoFocus
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              marginTop: 6,
              borderRadius: 6,
              border: "1px solid #bdbdbd"
            }}
          />
        </div>
        <div style={{ marginBottom: 16, textAlign: 'right' }}>
          <Link to="/forgot-password" style={{ color: '#388e3c', textDecoration: 'underline', cursor: 'pointer', fontSize: 14 }}>
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            background: loading ? "#a5d6a7" : "#43a047",
            color: "white",
            border: "none",
            borderRadius: 6,
            fontWeight: "bold",
            fontSize: 16,
            marginBottom: 10,
            cursor: loading ? "not-allowed" : "pointer"
          }}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {/* OTP and Social Login */}
        <button type="button" style={{ width: '100%', padding: 12, background: '#1976d2', color: 'white', border: 'none', borderRadius: 6, fontWeight: 'bold', fontSize: 16, marginBottom: 8, marginTop: 4 }}>
          Login with OTP
        </button>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          <button type="button" style={{ flex: 1, padding: 10, background: '#fff', color: '#1976d2', border: '1px solid #1976d2', borderRadius: 6, fontWeight: 'bold', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" style={{ width: 18, height: 18 }} /> Google
          </button>
          <button type="button" style={{ flex: 1, padding: 10, background: '#fff', color: '#1976d2', border: '1px solid #1976d2', borderRadius: 6, fontWeight: 'bold', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" style={{ width: 18, height: 18 }} /> Facebook
          </button>
        </div>
        <div style={{ textAlign: "center", marginTop: 10 }}>
          Don't have an account? <Link to="/signup" style={{ color: "#388e3c" }}>Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;