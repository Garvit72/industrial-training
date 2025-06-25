import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Categories from './Components/categories';
import FeaturedProducts from './Components/FeaturedProducts';
import Footer from './Components/Footer';
import CartPage from './Components/CartPage';
import AddressPage from './Components/AddressPage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ForgotPassword from './Components/ForgotPassword';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (idx) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleSignup = (username) => {
    setUser(username); // For demo, log in after signup
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
  };

  return (
    <Router>
      <div className="App">
        <nav style={{ background: '#4caf50', padding: '10px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: 20 }}>Medical Store</Link>
            {/* Navigation Links */}
            <div style={{ display: 'flex', gap: 20 }}>
               <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
               <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>About</Link>
               <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
            </div>
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search medicine..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ padding: '6px 12px', borderRadius: 4, border: 'none', minWidth: 180 }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* Cart Icon with badge as a link */}
            <div style={{ position: 'relative', marginRight: 16 }}>
              <Link to="/cart" style={{ display: 'inline-block' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 24 24">
                  <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-12.832-2l1.528-8h15.304l1.528 8h-18.36zm17.832-10h-2.184l-1.724-3.447c-.184-.368-.563-.553-.947-.553h-9.25c-.384 0-.763.185-.947.553l-1.724 3.447h-2.184c-.553 0-1 .447-1 1s.447 1 1 1h1.25l1.716 9.001c.09.474.51.999.999.999h12.07c.489 0 .909-.525.999-.999l1.716-9.001h1.25c.553 0 1-.447 1-1s-.447-1-1-1z"/>
                </svg>
                {cart.length > 0 && (
                  <span style={{ position: 'absolute', top: -6, right: -6, background: 'red', color: 'white', borderRadius: '50%', padding: '2px 7px', fontSize: 12, fontWeight: 'bold' }}>{cart.length}</span>
                )}
              </Link>
            </div>
            {user ? (
              <>
                <span style={{ marginRight: 16 }}>Welcome, {user}!</span>
                <button onClick={handleLogout} style={{ background: '#fff', color: '#4caf50', border: 'none', padding: '6px 14px', borderRadius: 4, cursor: 'pointer' }}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" style={{ color: 'white', textDecoration: 'underline' }}>Login</Link>
                <Link to="/signup" style={{ color: 'white', textDecoration: 'underline' }}>Signup</Link>
              </>
            )}
          </div>
        </nav>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="/cart" element={<CartPage cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />} />
          <Route path="/address" element={<AddressPage cartItems={cart} total={cart.reduce((sum, item) => {
            const price = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
            return sum + (isNaN(price) ? 0 : price);
          }, 0)} />} />
          <Route path="/about" element={
            <div style={{ padding: '40px', textAlign: 'center', minHeight: '60vh' }}>
              <h1 style={{ color: '#4caf50', marginBottom: '20px' }}>About Us</h1>
              <p style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                Welcome to our Medical Store! We are committed to providing high-quality healthcare products 
                and medications to our community. Our team of healthcare professionals ensures that all 
                products meet the highest standards of safety and efficacy.
              </p>
              <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ color: '#4caf50' }}>Quality Products</h3>
                  <p>We source only the best medications and healthcare products</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ color: '#4caf50' }}>Expert Staff</h3>
                  <p>Our team includes qualified pharmacists and healthcare professionals</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ color: '#4caf50' }}>Customer Care</h3>
                  <p>We prioritize your health and satisfaction above everything else</p>
                </div>
              </div>
            </div>
          } />
          <Route path="/contact" element={
            <div style={{ padding: '40px', textAlign: 'center', minHeight: '60vh' }}>
              <h1 style={{ color: '#4caf50', marginBottom: '20px' }}>Contact Us</h1>
              <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: '#4caf50' }}>Get in Touch</h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    Have questions about our products or services? We're here to help!
                  </p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#4caf50' }}>📍 Address</h4>
                  <p>123 Medical Center Drive<br />Healthcare City, HC 12345</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#4caf50' }}>📞 Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#4caf50' }}>✉️ Email</h4>
                  <p>info@medicalstore.com</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#4caf50' }}>🕒 Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 8:00 PM<br />
                  Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          } />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={user ? (
            <>
              <Header />
              <Banner />
              <Categories onAddToCart={handleAddToCart} search={search} />
              <FeaturedProducts onAddToCart={handleAddToCart} search={search} />
              <Footer />
            </>
          ) : (
            <Login onLogin={handleLogin} />
          )} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;