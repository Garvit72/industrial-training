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
  const [wishlist, setWishlist] = useState([]);

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
      {/* Sliding background images */}
      <div className="background-carousel">
        <img className="slide" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1500&q=80" alt="Medical Shop 1" />
        <img className="slide" src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg" alt="Medical Shop 2" />
        <img className="slide" src="https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg" alt="Medical Shop 3" />
      </div>
      <div className="background-overlay"></div>
      <div className="App">
        <Header
          cart={cart}
          user={user}
          onLogout={handleLogout}
          search={search}
          setSearch={setSearch}
          wishlist={wishlist}
        />
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
              <Banner />
              <Categories onAddToCart={handleAddToCart} search={search} />
              <FeaturedProducts onAddToCart={handleAddToCart} search={search} wishlist={wishlist} setWishlist={setWishlist} />
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