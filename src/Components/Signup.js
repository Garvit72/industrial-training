import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup({ onSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      setError("Please fill all fields.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      try {
        const res = await fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (res.ok) {
          alert("Signup successful! Please login.");
          navigate("/login");
        } else {
          setError(data.error || "Signup failed");
        }
      } catch (err) {
        setError("Network error");
      }
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
          <span role="img" aria-label="signup">📝</span> Sign Up
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
        <div style={{ marginBottom: 18 }}>
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
        <div style={{ marginBottom: 24 }}>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              marginTop: 6,
              borderRadius: 6,
              border: "1px solid #bdbdbd"
            }}
          />
        </div>
        {/* OTP and Social Signup */}
        <button type="button" style={{ width: '100%', padding: 12, background: '#1976d2', color: 'white', border: 'none', borderRadius: 6, fontWeight: 'bold', fontSize: 16, marginBottom: 8, marginTop: 4 }}>
          Signup with OTP
        </button>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          <button type="button" style={{ flex: 1, padding: 10, background: '#fff', color: '#1976d2', border: '1px solid #1976d2', borderRadius: 6, fontWeight: 'bold', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" style={{ width: 18, height: 18 }} /> Google
          </button>
          <button type="button" style={{ flex: 1, padding: 10, background: '#fff', color: '#1976d2', border: '1px solid #1976d2', borderRadius: 6, fontWeight: 'bold', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" style={{ width: 18, height: 18 }} /> Facebook
          </button>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            background: "#43a047",
            color: "white",
            border: "none",
            borderRadius: 6,
            fontWeight: "bold",
            fontSize: 16,
            marginBottom: 10,
            cursor: "pointer"
          }}
        >
          Sign Up
        </button>
        <div style={{ textAlign: "center", marginTop: 10 }}>
          Already have an account? <Link to="/login" style={{ color: "#388e3c" }}>Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;