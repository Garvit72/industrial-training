import React, { useState } from "react";
import ProductReview from "./ProductReview";

const products = [
  { name: "Ibuprofen", price: "₹40", priceValue: 40, brand: "MediLife", category: "Medicines", rating: 4.2, prescription: true, image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg", images: ["https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg", "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg"], uses: "Pain relief, anti-inflammatory", ingredients: "Ibuprofen 400mg", sideEffects: "Nausea, dizziness", available: true, dosage: "1 tablet every 6-8 hours", popularity: 90, added: 20240101 },
  { name: "Amoxicillin", price: "₹120", priceValue: 120, brand: "PharmaPlus", category: "Medicines", rating: 4.7, prescription: true, image: "https://images.pexels.com/photos/3850681/pexels-photo-3850681.jpeg", images: ["https://images.pexels.com/photos/3850681/pexels-photo-3850681.jpeg", "https://images.pexels.com/photos/3873192/pexels-photo-3873192.jpeg"], uses: "Antibiotic for bacterial infections", ingredients: "Amoxicillin 500mg", sideEffects: "Rash, diarrhea", available: false, dosage: "1 capsule every 8 hours", popularity: 120, added: 20240301 },
  { name: "Azithromycin", price: "₹150", image: "https://images.pexels.com/photos/3850681/pexels-photo-3850681.jpeg" },
  { name: "Cetirizine", price: "₹30", priceValue: 30, brand: "MediLife", category: "Medicines", rating: 4.0, prescription: false, image: "https://images.pexels.com/photos/3873192/pexels-photo-3873192.jpeg", popularity: 60, added: 20240115 },
  { name: "Dolo 650", price: "₹35", priceValue: 35, brand: "HealWell", category: "Medicines", rating: 4.5, prescription: false, image: "https://images.pexels.com/photos/3873192/pexels-photo-3873192.jpeg", popularity: 80, added: 20240210 },
  { name: "Metformin", price: "₹90", priceValue: 90, brand: "PharmaPlus", category: "Medicines", rating: 4.3, prescription: true, image: "https://images.pexels.com/photos/6941881/pexels-photo-6941881.jpeg", popularity: 100, added: 20240310 },
  { name: "Glibenclamide", price: "₹110", image: "https://images.pexels.com/photos/6941881/pexels-photo-6941881.jpeg" },
  { name: "Atenolol", price: "₹80", image: "https://images.pexels.com/photos/433267/pexels-photo-433267.jpeg" },
  { name: "Enalapril", price: "₹95", image: "https://images.pexels.com/photos/433267/pexels-photo-433267.jpeg" },
  { name: "Omeprazole", price: "₹70", image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg" },
  { name: "Domperidone", price: "₹60", image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg" },
  { name: "Clotrimazole Cream", price: "₹55", image: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg" },
  { name: "Betnovate Cream", price: "₹65", image: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg" },
  { name: "Ciprofloxacin Eye Drops", price: "₹45", image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg" },
  { name: "Neomycin Ear Drops", price: "₹50", image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg" },
  { name: "Baby Lotion", price: "₹140", priceValue: 140, brand: "BabyCare", category: "Baby Care", rating: 4.8, prescription: false, image: "https://images.pexels.com/photos/3933275/pexels-photo-3933275.jpeg", popularity: 110, added: 20240315 },
  { name: "Blood Pressure Monitor", price: "₹1200", priceValue: 1200, brand: "MediEquip", category: "Equipment", rating: 4.6, prescription: false, image: "https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg", popularity: 130, added: 20240220 },
  { name: "Fusidic Acid Cream", price: "₹85", priceValue: 85, brand: "Fucidin", category: "Medicines", rating: 4.6, prescription: true, image: "https://www.netmeds.com/images/product-v1/600x600/812013/fucidin_cream_15gm_0.jpg", uses: "Topical antibiotic for skin infections", ingredients: "Fusidic Acid 2%", sideEffects: "Irritation, rash", available: true, dosage: "Apply thin layer 2-3 times daily", popularity: 60, added: 20240601 },
  { name: "Mupirocin Ointment", price: "₹120", priceValue: 120, brand: "Bactroban", category: "Medicines", rating: 4.8, prescription: true, image: "https://www.netmeds.com/images/product-v1/600x600/801013/bactroban_ointment_5gm_0.jpg", uses: "Treats impetigo and skin infections", ingredients: "Mupirocin 2%", sideEffects: "Burning, stinging", available: true, dosage: "Apply to affected area 2-3 times daily", popularity: 70, added: 20240601 },
  { name: "Neosporin Skin Ointment", price: "₹75", priceValue: 75, brand: "Neosporin", category: "Medicines", rating: 4.7, prescription: false, image: "https://www.netmeds.com/images/product-v1/600x600/8897/neosporin_skin_ointment_5gm_0.jpg", uses: "Prevents infection in minor cuts, wounds", ingredients: "Neomycin, Bacitracin, Polymyxin B", sideEffects: "Redness, itching", available: true, dosage: "Apply 1-3 times daily", popularity: 80, added: 20240601 },
  { name: "Betadine Ointment", price: "₹60", priceValue: 60, brand: "Betadine", category: "Medicines", rating: 4.5, prescription: false, image: "https://www.netmeds.com/images/product-v1/600x600/8898/betadine_ointment_10gm_0.jpg", uses: "Antiseptic for wounds, burns", ingredients: "Povidone Iodine 10%", sideEffects: "Temporary staining, irritation", available: true, dosage: "Apply as needed", popularity: 75, added: 20240601 },
];

const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
const brands = ["All", ...Array.from(new Set(products.map(p => p.brand)))];
const ratings = ["All", 4.5, 4.0, 3.5, 3.0];
const prescriptions = ["All", "Prescription", "Non-Prescription"];
const sortOptions = [
  { label: "Popularity", value: "popularity" },
  { label: "Price: Low to High", value: "priceAsc" },
  { label: "Price: High to Low", value: "priceDesc" },
  { label: "Newest Arrivals", value: "newest" }
];

function FeaturedProducts({ onAddToCart, search, wishlist, setWishlist }) {
  const [modalProduct, setModalProduct] = useState(null);
  const [filterCat, setFilterCat] = useState("All");
  const [filterBrand, setFilterBrand] = useState("All");
  const [filterRating, setFilterRating] = useState("All");
  const [filterPres, setFilterPres] = useState("All");
  const [filterPrice, setFilterPrice] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("popularity");
  const [showNewsletter, setShowNewsletter] = useState(false);

  let filtered = products.filter(p => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (filterCat !== "All" && p.category !== filterCat) return false;
    if (filterBrand !== "All" && p.brand !== filterBrand) return false;
    if (filterRating !== "All" && p.rating < filterRating) return false;
    if (filterPres !== "All") {
      if (filterPres === "Prescription" && !p.prescription) return false;
      if (filterPres === "Non-Prescription" && p.prescription) return false;
    }
    if (p.priceValue < filterPrice[0] || p.priceValue > filterPrice[1]) return false;
    return true;
  });

  if (sortBy === "popularity") filtered = filtered.sort((a, b) => b.popularity - a.popularity);
  if (sortBy === "priceAsc") filtered = filtered.sort((a, b) => a.priceValue - b.priceValue);
  if (sortBy === "priceDesc") filtered = filtered.sort((a, b) => b.priceValue - a.priceValue);
  if (sortBy === "newest") filtered = filtered.sort((a, b) => b.added - a.added);

  const handleWishlist = (product) => {
    setWishlist((prev) => prev.includes(product.name)
      ? prev.filter(n => n !== product.name)
      : [...prev, product.name]);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => setShowNewsletter(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ padding: "20px" }}>
      {/* Coupons/Discounts Banner */}
      <div style={{ background: '#fffde7', color: '#e65100', borderRadius: 8, padding: '12px 20px', marginBottom: 18, fontWeight: 500, fontSize: 17, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span role="img" aria-label="gift">🎁</span> Use code <span style={{ color: '#388e3c', fontWeight: 700 }}>HEALTH10</span> for 10% off! &nbsp;|&nbsp; <span style={{ color: '#1976d2' }}>Free shipping on orders over ₹499</span>
      </div>
      {/* Newsletter Popup */}
      {showNewsletter && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.25)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowNewsletter(false)}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 350, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowNewsletter(false)} style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }}>×</button>
            <h3 style={{ color: '#1976d2', marginBottom: 10 }}>Subscribe for Health Tips & Offers</h3>
            <p style={{ fontSize: 15, marginBottom: 16 }}>Get exclusive discounts and expert health tips in your inbox.</p>
            <input type="email" placeholder="Your email" style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', marginBottom: 12 }} />
            <button style={{ width: '100%', background: '#43a047', color: '#fff', border: 'none', borderRadius: 6, padding: 12, fontWeight: 'bold', fontSize: 16 }}>Subscribe</button>
          </div>
        </div>
      )}
      <h3>Featured Products</h3>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        <select value={filterCat} onChange={e => setFilterCat(e.target.value)} style={{ padding: 6, borderRadius: 6 }}>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <select value={filterBrand} onChange={e => setFilterBrand(e.target.value)} style={{ padding: 6, borderRadius: 6 }}>
          {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
        </select>
        <select value={filterRating} onChange={e => setFilterRating(e.target.value === "All" ? "All" : parseFloat(e.target.value))} style={{ padding: 6, borderRadius: 6 }}>
          {ratings.map(r => <option key={r} value={r}>{r === "All" ? "All Ratings" : `≥ ${r}★`}</option>)}
        </select>
        <select value={filterPres} onChange={e => setFilterPres(e.target.value)} style={{ padding: 6, borderRadius: 6 }}>
          {prescriptions.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <span>Price:</span>
        <input type="number" min={0} max={filterPrice[1]} value={filterPrice[0]} onChange={e => setFilterPrice([+e.target.value, filterPrice[1]])} style={{ width: 60, borderRadius: 6, padding: 4, border: '1px solid #b3e5fc' }} />
        <span>-</span>
        <input type="number" min={filterPrice[0]} max={2000} value={filterPrice[1]} onChange={e => setFilterPrice([filterPrice[0], +e.target.value])} style={{ width: 60, borderRadius: 6, padding: 4, border: '1px solid #b3e5fc' }} />
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ padding: 6, borderRadius: 6, marginLeft: 16 }}>
          {sortOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filtered.length === 0 ? (
          <div style={{ color: '#888', fontStyle: 'italic' }}>No products found.</div>
        ) : filtered.map((product) => (
          <div key={product.name} style={{ border: "1px solid #ccc", padding: "10px", flex: "1 1 200px", background: "#fff", borderRadius: 8, position: 'relative' }}>
            {/* Verified Seller Badge */}
            <div style={{ position: 'absolute', top: 8, left: 8, background: '#e3f2fd', color: '#1976d2', borderRadius: 6, padding: '2px 8px', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#43a047" style={{ marginRight: 2 }}><path d="M12 2l4 4h4v4l-8 8-8-8v-4h4z"/></svg>
              Verified Seller
            </div>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 6, marginBottom: 8 }} />
            <h4>{product.name}</h4>
            {/* Prescription Required Tag */}
            {product.prescription && (
              <div style={{ background: '#fff3e0', color: '#e65100', borderRadius: 4, padding: '2px 8px', fontSize: 12, fontWeight: 500, display: 'inline-block', marginBottom: 6 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#e65100" style={{ marginRight: 2, verticalAlign: 'middle' }}><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13zm0-15H5V5h14v1z"/></svg>
                Prescription Required
              </div>
            )}
            <p>{product.price}</p>
            <button style={{ backgroundColor: "#4CAF50", color: "white", border: "none", padding: "5px 10px", borderRadius: 4, marginRight: 8 }} onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
            <button style={{ backgroundColor: wishlist.includes(product.name) ? '#e57373' : '#fff', color: wishlist.includes(product.name) ? '#fff' : '#e57373', border: '1px solid #e57373', padding: '5px 10px', borderRadius: 4, marginRight: 8 }} onClick={() => handleWishlist(product)}>
              {wishlist.includes(product.name) ? '♥' : '♡'} Wishlist
            </button>
            <button style={{ backgroundColor: '#1976d2', color: 'white', border: 'none', padding: '5px 10px', borderRadius: 4 }} onClick={() => setModalProduct(product)}>
              View Details
            </button>
            {/* SSL Secure Payment Badge, Return/Refund, Support */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#e8f5e9', color: '#388e3c', borderRadius: 4, padding: '2px 6px', fontSize: 12 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#388e3c"><path d="M12 17a2 2 0 0 1-2-2h2v-2h-2v-2h2V9h-2V7h2V5h-2V3h2V1h2v2h2v2h-2v2h2v2h-2v2h2a2 2 0 0 1-2 2z"/></svg>
                SSL Secure
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#fffde7', color: '#fbc02d', borderRadius: 4, padding: '2px 6px', fontSize: 12 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbc02d"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z"/></svg>
                7-day Return/Refund
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#e3f2fd', color: '#1976d2', borderRadius: 4, padding: '2px 6px', fontSize: 12 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#1976d2"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg>
                24x7 Support
              </span>
            </div>
            <ProductReview productId={product.name} />
          </div>
        ))}
      </div>
      {/* Product Recommendations */}
      <div style={{ marginTop: 40 }}>
        <h4 style={{ color: '#1976d2', marginBottom: 12 }}>Customers also bought</h4>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {products.slice(0, 3).map((rec, idx) => (
            <div key={rec.name + idx} style={{ background: '#f8fcff', border: '1px solid #e3f2fd', borderRadius: 8, padding: 16, minWidth: 140, textAlign: 'center' }}>
              <img src={rec.image} alt={rec.name} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 6, marginBottom: 8 }} />
              <div style={{ fontWeight: 500 }}>{rec.name}</div>
              <div style={{ color: '#388e3c', fontWeight: 600 }}>{rec.price}</div>
              <button style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 10px', fontSize: 14, marginTop: 6 }} onClick={() => onAddToCart(rec)}>Add</button>
            </div>
          ))}
        </div>
      </div>
      {modalProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setModalProduct(null)}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 340, maxWidth: 500, position: 'relative' }} onClick={e => e.stopPropagation()}>
            {/* Verified Seller Badge */}
            <div style={{ position: 'absolute', top: 12, left: 12, background: '#e3f2fd', color: '#1976d2', borderRadius: 6, padding: '2px 8px', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#43a047" style={{ marginRight: 2 }}><path d="M12 2l4 4h4v4l-8 8-8-8v-4h4z"/></svg>
              Verified Seller
            </div>
            <button onClick={() => setModalProduct(null)} style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }}>×</button>
            <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
              {modalProduct.images && modalProduct.images.map((img, idx) => (
                <img key={idx} src={img} alt={modalProduct.name + ' img'} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8, border: '1px solid #eee' }} />
              ))}
            </div>
            <h2>{modalProduct.name}</h2>
            <p style={{ fontWeight: 'bold', fontSize: 18 }}>{modalProduct.price}</p>
            <div style={{ margin: '10px 0' }}>
              <span style={{ fontWeight: 500 }}>Availability: </span>
              <span style={{ color: modalProduct.available ? '#43a047' : '#e57373', fontWeight: 500 }}>{modalProduct.available ? 'In Stock' : 'Out of Stock'}</span>
            </div>
            <div style={{ margin: '10px 0' }}>
              <span style={{ fontWeight: 500 }}>Dosage: </span>{modalProduct.dosage}
            </div>
            <div style={{ margin: '10px 0' }}>
              <span style={{ fontWeight: 500 }}>Uses: </span>{modalProduct.uses}
            </div>
            <div style={{ margin: '10px 0' }}>
              <span style={{ fontWeight: 500 }}>Ingredients: </span>{modalProduct.ingredients}
            </div>
            <div style={{ margin: '10px 0' }}>
              <span style={{ fontWeight: 500 }}>Side Effects: </span>{modalProduct.sideEffects}
            </div>
            <button style={{ backgroundColor: wishlist.includes(modalProduct.name) ? '#e57373' : '#fff', color: wishlist.includes(modalProduct.name) ? '#fff' : '#e57373', border: '1px solid #e57373', padding: '5px 10px', borderRadius: 4, marginRight: 8 }} onClick={() => handleWishlist(modalProduct)}>
              {wishlist.includes(modalProduct.name) ? '♥' : '♡'} Wishlist
            </button>
            {/* Prescription Required Tag */}
            {modalProduct.prescription && (
              <div style={{ background: '#fff3e0', color: '#e65100', borderRadius: 4, padding: '2px 8px', fontSize: 12, fontWeight: 500, display: 'inline-block', marginBottom: 6 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#e65100" style={{ marginRight: 2, verticalAlign: 'middle' }}><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13zm0-15H5V5h14v1z"/></svg>
                Prescription Required
              </div>
            )}
            {/* SSL Secure Payment Badge, Return/Refund, Support */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#e8f5e9', color: '#388e3c', borderRadius: 4, padding: '2px 6px', fontSize: 12 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#388e3c"><path d="M12 17a2 2 0 0 1-2-2h2v-2h-2v-2h2V9h-2V7h2V5h-2V3h2V1h2v2h2v2h-2v2h2v2h-2v2h2a2 2 0 0 1-2 2z"/></svg>
                SSL Secure
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#fffde7', color: '#fbc02d', borderRadius: 4, padding: '2px 6px', fontSize: 12 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbc02d"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z"/></svg>
                7-day Return/Refund
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#e3f2fd', color: '#1976d2', borderRadius: 4, padding: '2px 6px', fontSize: 12 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#1976d2"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/></svg>
                24x7 Support
              </span>
            </div>
            <ProductReview productId={modalProduct.name} />
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProducts; 