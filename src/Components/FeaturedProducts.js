import React from "react";

const products = [
  { name: "Ibuprofen", price: "₹40", image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg" },
  { name: "Amoxicillin", price: "₹120", image: "https://images.pexels.com/photos/3850681/pexels-photo-3850681.jpeg" },
  { name: "Azithromycin", price: "₹150", image: "https://images.pexels.com/photos/3850681/pexels-photo-3850681.jpeg" },
  { name: "Cetirizine", price: "₹30", image: "https://images.pexels.com/photos/3873192/pexels-photo-3873192.jpeg" },
  { name: "Dolo 650", price: "₹35", image: "https://images.pexels.com/photos/3873192/pexels-photo-3873192.jpeg" },
  { name: "Metformin", price: "₹90", image: "https://images.pexels.com/photos/6941881/pexels-photo-6941881.jpeg" },
  { name: "Glibenclamide", price: "₹110", image: "https://images.pexels.com/photos/6941881/pexels-photo-6941881.jpeg" },
  { name: "Atenolol", price: "₹80", image: "https://images.pexels.com/photos/433267/pexels-photo-433267.jpeg" },
  { name: "Enalapril", price: "₹95", image: "https://images.pexels.com/photos/433267/pexels-photo-433267.jpeg" },
  { name: "Omeprazole", price: "₹70", image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg" },
  { name: "Domperidone", price: "₹60", image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg" },
  { name: "Clotrimazole Cream", price: "₹55", image: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg" },
  { name: "Betnovate Cream", price: "₹65", image: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg" },
  { name: "Ciprofloxacin Eye Drops", price: "₹45", image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg" },
  { name: "Neomycin Ear Drops", price: "₹50", image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg" }
];

function FeaturedProducts({ onAddToCart, search }) {
  const filtered = search
    ? products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    : products;

  return (
    <section style={{ padding: "20px" }}>
      <h3>Featured Products</h3>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {filtered.length === 0 ? (
          <div style={{ color: '#888', fontStyle: 'italic' }}>No products found.</div>
        ) : filtered.map((product) => (
          <div key={product.name} style={{ border: "1px solid #ccc", padding: "10px", flex: "1 1 200px", background: "#fff", borderRadius: 8 }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 6, marginBottom: 8 }} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button style={{ backgroundColor: "#4CAF50", color: "white", border: "none", padding: "5px 10px", borderRadius: 4 }} onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts; 