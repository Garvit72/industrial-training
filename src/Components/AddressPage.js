import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddressPage({ cartItems, total }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India"
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the order to your backend
      alert("Order placed successfully! Thank you for your purchase.");
      navigate("/");
    }
  };

  return (
    <div style={{ 
      maxWidth: 800, 
      margin: "40px auto", 
      background: "#fff", 
      borderRadius: 8, 
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)", 
      padding: 24 
    }}>
      <h2 style={{ textAlign: "center", marginBottom: 24, color: "#4caf50" }}>
        📦 Shipping Address
      </h2>
      
      {/* Order Summary */}
      <div style={{ 
        background: "#f5f5f5", 
        padding: 16, 
        borderRadius: 8, 
        marginBottom: 24 
      }}>
        <h3 style={{ marginBottom: 12, color: "#4caf50" }}>Order Summary</h3>
        <div style={{ marginBottom: 8 }}>
          <strong>Items ({cartItems.length}):</strong>
          <ul style={{ margin: "8px 0", paddingLeft: 20 }}>
            {cartItems.map((item, idx) => (
              <li key={idx}>{item.name} - {item.price}</li>
            ))}
          </ul>
        </div>
        <div style={{ borderTop: "1px solid #ddd", paddingTop: 8, fontWeight: "bold" }}>
          Total: ₹{total}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <label style={{ display: "block", marginBottom: 6, fontWeight: "500" }}>
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 4,
                border: errors.firstName ? "1px solid #f44336" : "1px solid #ddd",
                fontSize: 14
              }}
            />
            {errors.firstName && <span style={{ color: "#f44336", fontSize: 12 }}>{errors.firstName}</span>}
          </div>
          
          <div>
            <label style={{ display: "block", marginBottom: 6, fontWeight: "500" }}>
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 4,
                border: errors.lastName ? "1px solid #f44336" : "1px solid #ddd",
                fontSize: 14
              }}
            />
            {errors.lastName && <span style={{ color: "#f44336", fontSize: 12 }}>{errors.lastName}</span>}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <label style={{ display: "block", marginBottom: 6, fontWeight: "500" }}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 4,
                border: errors.email ? "1px solid #f44336" : "1px solid #ddd",
                fontSize: 14
              }}
            />
            {errors.email && <span style={{ color: "#f44336", fontSize: 12 }}>{errors.email}</span>}
          </div>
          
          <div>
            <label style={{ display: "block", marginBottom: 6, fontWeight: "500" }}>
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 4,
                border: errors.phone ? "1px solid #f44336" : "1px solid #ddd",
                fontSize: 14
              }}
            />
            {errors.phone && <span style={{ color: "#f44336", fontSize: 12 }}>{errors.phone}</span>}
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 6, fontWeight: "500" }}>
            Street Address *
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows="3"
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 4,
              border: errors.address ? "1px solid #f44336" : "1px solid #ddd",
              fontSize: 14,
              resize: "vertical"
            }}
          />
          {errors.address && <span style={{ color: "#f44336", fontSize: 12 }}>{errors.address}</span>}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <label style={{ display: "block", marginBottom: 6, fontWeight: "500" }}>
              City *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 4,
                border: errors.city ? "1px solid #f44336" : "1px solid #ddd",
                fontSize: 14
              }}
            />
            {errors.city && <span style={{ color: "#f44336", fontSize: 12 }}>{errors.city}</span>}
          </div>
          
          <div>
            <label style={{ display: "block", marginBottom: 6, fontWeight: "500" }}>
              State *
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 4,
                border: errors.state ? "1px solid #f44336" : "1px solid #ddd",
                fontSize: 14
              }}
            />
            {errors.state && <span style={{ color: "#f44336", fontSize: 12 }}>{errors.state}</span>}
          </div>
          
          <div>
            <label style={{ display: "block", marginBottom: 6, fontWeight: "500" }}>
              ZIP Code *
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 4,
                border: errors.zipCode ? "1px solid #f44336" : "1px solid #ddd",
                fontSize: 14
              }}
            />
            {errors.zipCode && <span style={{ color: "#f44336", fontSize: 12 }}>{errors.zipCode}</span>}
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{ display: "block", marginBottom: 6, fontWeight: "500" }}>
            Country
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 4,
              border: "1px solid #ddd",
              fontSize: 14
            }}
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button
            type="button"
            onClick={() => navigate("/cart")}
            style={{
              padding: "12px 24px",
              background: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: 4,
              fontWeight: "bold",
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            ← Back to Cart
          </button>
          <button
            type="submit"
            style={{
              padding: "12px 32px",
              background: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: 4,
              fontWeight: "bold",
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddressPage; 