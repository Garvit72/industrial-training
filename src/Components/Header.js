import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  { name: "Medicines", path: "/#medicines" },
  { name: "Equipment", path: "/#devices" },
  { name: "Baby Care", path: "/#babycare" },
  { name: "Personal Care", path: "/#personalcare" },
  { name: "Vitamins", path: "/#vitamins" },
  { name: "First Aid", path: "/#firstaid" }
];

const suggestions = [
  "Paracetamol", "Ibuprofen", "Amoxicillin", "Vitamin C", "Baby Lotion", "Blood Pressure Monitor", "Bandages"
];

function Header({ cart, user, onLogout, search, setSearch, wishlist }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [autoList, setAutoList] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const navigate = useNavigate();

  // Autocomplete logic
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length > 0) {
      setAutoList(
        suggestions.filter(s => s.toLowerCase().includes(e.target.value.toLowerCase()))
      );
    } else {
      setAutoList([]);
    }
  };

  const handleAutoClick = (val) => {
    setSearch(val);
    setAutoList([]);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#e3f2fd', boxShadow: '0 2px 8px rgba(25, 118, 210, 0.06)' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 32px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <Link to="/" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 'bold', fontSize: 24 }}>Medical Store</Link>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
            <Link to="/about" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>About</Link>
            <Link to="/contact" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>Contact</Link>
            <div style={{ position: 'relative' }} onMouseEnter={() => setShowCat(true)} onMouseLeave={() => setShowCat(false)}>
              <span style={{ color: '#1976d2', fontWeight: 500, cursor: 'pointer', padding: '0 8px' }}>Categories ▼</span>
              {showCat && (
                <div style={{ position: 'absolute', top: 28, left: 0, background: '#fff', border: '1px solid #b3e5fc', borderRadius: 8, boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)', minWidth: 180, zIndex: 10 }}>
                  {categories.map(cat => (
                    <div key={cat.name} style={{ padding: '10px 18px', cursor: 'pointer', color: '#1976d2', fontWeight: 500 }}
                      onClick={() => { setShowCat(false); navigate(cat.path); }}
                      onKeyDown={e => { if (e.key === 'Enter') { setShowCat(false); navigate(cat.path); } }}
                      tabIndex={0}
                    >
                      {cat.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search medicine..."
              value={search}
              onChange={handleSearchChange}
              style={{ padding: '8px 16px', borderRadius: 6, border: '1px solid #b3e5fc', background: '#fff', fontSize: 16, minWidth: 180 }}
              autoComplete="off"
            />
            {autoList.length > 0 && (
              <div style={{ position: 'absolute', top: 38, left: 0, background: '#fff', border: '1px solid #b3e5fc', borderRadius: 8, boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)', minWidth: 180, zIndex: 10 }}>
                {autoList.map((item, idx) => (
                  <div key={idx} style={{ padding: '8px 14px', cursor: 'pointer', color: '#1976d2' }} onClick={() => handleAutoClick(item)}>{item}</div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ position: 'relative', marginRight: 8 }}>
            <button onClick={() => setShowWishlist(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative' }}>
              <svg width="28" height="28" fill="#e57373" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span style={{ position: 'absolute', top: -6, right: -6, background: '#e57373', color: 'white', borderRadius: '50%', padding: '2px 7px', fontSize: 12, fontWeight: 'bold' }}>{wishlist.length}</span>
            </button>
          </div>
          {showWishlist && (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.25)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowWishlist(false)}>
              <div style={{ background: '#fff', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 350, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', position: 'relative' }} onClick={e => e.stopPropagation()}>
                <button onClick={() => setShowWishlist(false)} style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }}>×</button>
                <h3 style={{ color: '#e57373', marginBottom: 10 }}>My Wishlist</h3>
                {wishlist.length === 0 ? (
                  <div style={{ color: '#888', fontStyle: 'italic' }}>No items in wishlist.</div>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {wishlist.map(item => (
                      <li key={item.name || item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        {item.image && <img src={item.image} alt={item.name} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6, border: '1px solid #eee' }} />}
                        <span>{item.name || item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
          <div style={{ position: 'relative', marginRight: 16 }}>
            <Link to="/cart" style={{ display: 'inline-block' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#1976d2" viewBox="0 0 24 24">
                <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-12.832-2l1.528-8h15.304l1.528 8h-18.36zm17.832-10h-2.184l-1.724-3.447c-.184-.368-.563-.553-.947-.553h-9.25c-.384 0-.763.185-.947.553l-1.724 3.447h-2.184c-.553 0-1 .447-1 1s.447 1 1 1h1.25l1.716 9.001c.09.474.51.999.999.999h12.07c.489 0 .909-.525.999-.999l1.716-9.001h1.25c.553 0 1-.447 1-1s-.447-1-1-1z"/>
              </svg>
              {cart && cart.length > 0 && (
                <span style={{ position: 'absolute', top: -6, right: -6, background: 'red', color: 'white', borderRadius: '50%', padding: '2px 7px', fontSize: 12, fontWeight: 'bold' }}>{cart.length}</span>
              )}
            </Link>
          </div>
          {user ? (
            <>
              <span style={{ marginRight: 16, color: '#1976d2' }}>Welcome, {user}!</span>
              <button onClick={onLogout} style={{ background: '#fff', color: '#1976d2', border: '1px solid #1976d2', padding: '6px 14px', borderRadius: 4, cursor: 'pointer' }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ color: '#1976d2', textDecoration: 'underline' }}>Login</Link>
              <Link to="/signup" style={{ color: '#1976d2', textDecoration: 'underline' }}>Signup</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
