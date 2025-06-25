import React, { useState } from "react";

const categories = [
  {
    name: "Medicines",
    image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg"
  },
  {
    name: "Vitamins",
    image: "https://images.pexels.com/photos/3683077/pexels-photo-3683077.jpeg"
  },
  {
    name: "Personal Care",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
  },
  {
    name: "Baby Care",
    image: "https://images.pexels.com/photos/3933275/pexels-photo-3933275.jpeg"
  },
  {
    name: "Devices",
    image: "https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg"
  },
  {
    name: "First Aid",
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg"
  }
];

const medicineCategories = [
  {
    name: "Pain Relief",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    medicines: [
      { name: "Paracetamol", price: 25 },
      { name: "Ibuprofen", price: 40 }
    ]
  },
  {
    name: "Antibiotics",
    image: "https://images.pexels.com/photos/3850681/pexels-photo-3850681.jpeg",
    medicines: [
      { name: "Amoxicillin", price: 120 },
      { name: "Azithromycin", price: 150 }
    ]
  },
  {
    name: "Cold & Flu",
    image: "https://images.pexels.com/photos/3873192/pexels-photo-3873192.jpeg",
    medicines: [
      { name: "Cetirizine", price: 30 },
      { name: "Dolo 650", price: 35 }
    ]
  },
  {
    name: "Allergy",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Paracetamol_500mg_tablets.jpg",
    medicines: [
      { name: "Loratadine", price: 50 },
      { name: "Levocetirizine", price: 60 }
    ]
  },
  {
    name: "Diabetes",
    image: "https://images.pexels.com/photos/6941881/pexels-photo-6941881.jpeg",
    medicines: [
      { name: "Metformin", price: 90 },
      { name: "Glibenclamide", price: 110 }
    ]
  },
  {
    name: "Heart Care",
    image: "https://images.pexels.com/photos/433267/pexels-photo-433267.jpeg",
    medicines: [
      { name: "Atenolol", price: 80 },
      { name: "Enalapril", price: 95 }
    ]
  },
  {
    name: "Digestive Health",
    image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg",
    medicines: [
      { name: "Omeprazole", price: 70 },
      { name: "Domperidone", price: 60 }
    ]
  },
  {
    name: "Skin Care",
    image: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg",
    medicines: [
      { name: "Clotrimazole Cream", price: 55 },
      { name: "Betnovate Cream", price: 65 }
    ]
  },
  {
    name: "Eye/Ear Care",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    medicines: [
      { name: "Ciprofloxacin Eye Drops", price: 45 },
      { name: "Neomycin Ear Drops", price: 50 }
    ]
  }
];

const vitamins = [
  { name: "Vitamin C", price: 150 },
  { name: "Vitamin D", price: 120 },
  { name: "Vitamin B12", price: 200 },
  { name: "Multivitamin", price: 180 }
];

const personalCareProducts = [
  { name: "Face Wash", price: 120 },
  { name: "Moisturizer", price: 180 },
  { name: "Hand Sanitizer", price: 60 },
  { name: "Sunscreen", price: 250 }
];

const babyCareProducts = [
  { name: "Baby Lotion", price: 140 },
  { name: "Baby Shampoo", price: 110 },
  { name: "Baby Diapers", price: 320 },
  { name: "Baby Wipes", price: 90 }
];

const deviceProducts = [
  { name: "Digital Thermometer", price: 299 },
  { name: "Blood Pressure Monitor", price: 1200 },
  { name: "Glucometer", price: 850 },
  { name: "Nebulizer", price: 1500 }
];

const firstAidProducts = [
  { name: "Bandages", price: 50 },
  { name: "Antiseptic Cream", price: 60 },
  { name: "Cotton Roll", price: 40 },
  { name: "First Aid Box", price: 250 }
];

function Categories({ onAddToCart, search }) {
  const [showMedicines, setShowMedicines] = useState(false);
  const [showVitamins, setShowVitamins] = useState(false);
  const [showPersonalCare, setShowPersonalCare] = useState(false);
  const [showBabyCare, setShowBabyCare] = useState(false);
  const [showDevices, setShowDevices] = useState(false);
  const [showFirstAid, setShowFirstAid] = useState(false);

  // Filter medicines by search
  const filteredCategories = medicineCategories.map(cat => {
    if (!search) return cat;
    const filteredMeds = cat.medicines?.filter(med => med.name.toLowerCase().includes(search.toLowerCase()));
    return { ...cat, medicines: filteredMeds };
  });
  const anyMatch = filteredCategories.some(cat => cat.medicines && cat.medicines.length > 0);

  return (
    <section style={{ padding: "20px" }}>
      <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>Shop by Category</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
        {categories.map((cat) => (
          cat.name === "Medicines" ? (
            <div key={cat.name} style={{ border: "1px solid #ccc", padding: "20px", width: "100%", maxWidth: "600px", textAlign: "center", background: "#fff", borderRadius: 12, cursor: "pointer", position: "relative" }} onClick={() => setShowMedicines(v => !v)}>
              <img src={cat.image} alt={cat.name} style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />
              <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>{cat.name}</div>
              <div style={{ fontSize: 14, color: '#388e3c', margin: '8px 0' }}>{showMedicines ? 'Hide' : 'Show'} Categories ▼</div>
              {showMedicines && (
                <div style={{ marginTop: 16, textAlign: 'left', maxHeight: 350, overflowY: 'auto' }}>
                  {anyMatch ? filteredCategories.map((cat) => (
                    <div key={cat.name} style={{ marginBottom: 18, borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                      <div style={{ fontWeight: 'bold', marginBottom: 6 }}>{cat.name}</div>
                      {cat.medicines && cat.medicines.map((med) => (
                        <div key={med.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                          <span>{med.name} - ₹{med.price}</span>
                          <button style={{ marginLeft: 8, background: '#4caf50', color: 'white', border: 'none', borderRadius: 4, padding: '2px 8px', cursor: 'pointer' }} onClick={e => { e.stopPropagation(); onAddToCart({ name: med.name, price: `₹${med.price}` }); }}>
                            Add to Cart
                          </button>
                        </div>
                      ))}
                    </div>
                  )) : <div style={{ color: '#888', fontStyle: 'italic' }}>No medicines found.</div>}
                </div>
              )}
            </div>
          ) : cat.name === "Vitamins" ? (
            <div key={cat.name} style={{ border: "1px solid #ccc", padding: "20px", width: "100%", maxWidth: "600px", textAlign: "center", background: "#fff", borderRadius: 12, cursor: "pointer", position: "relative" }} onClick={() => setShowVitamins(v => !v)}>
              <img src={cat.image} alt={cat.name} style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />
              <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>{cat.name}</div>
              <div style={{ fontSize: 14, color: '#388e3c', margin: '8px 0' }}>{showVitamins ? 'Hide' : 'Show'} Vitamins ▼</div>
              {showVitamins && (
                <div style={{ marginTop: 16, textAlign: 'left' }}>
                  {vitamins.map((vit) => (
                    <div key={vit.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, borderBottom: '1px solid #eee', paddingBottom: 4 }}>
                      <span>{vit.name} - ₹{vit.price}</span>
                      <button style={{ marginLeft: 8, background: '#4caf50', color: 'white', border: 'none', borderRadius: 4, padding: '2px 8px', cursor: 'pointer' }} onClick={e => { e.stopPropagation(); onAddToCart({ name: vit.name, price: `₹${vit.price}` }); }}>
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : cat.name === "Personal Care" ? (
            <div key={cat.name} style={{ border: "1px solid #ccc", padding: "20px", width: "100%", maxWidth: "600px", textAlign: "center", background: "#fff", borderRadius: 12, cursor: "pointer", position: "relative" }} onClick={() => setShowPersonalCare(v => !v)}>
              <img src={cat.image} alt={cat.name} style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />
              <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>{cat.name}</div>
              <div style={{ fontSize: 14, color: '#388e3c', margin: '8px 0' }}>{showPersonalCare ? 'Hide' : 'Show'} Products ▼</div>
              {showPersonalCare && (
                <div style={{ marginTop: 16, textAlign: 'left' }}>
                  {personalCareProducts.map((prod) => (
                    <div key={prod.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, borderBottom: '1px solid #eee', paddingBottom: 4 }}>
                      <span>{prod.name} - ₹{prod.price}</span>
                      <button style={{ marginLeft: 8, background: '#4caf50', color: 'white', border: 'none', borderRadius: 4, padding: '2px 8px', cursor: 'pointer' }} onClick={e => { e.stopPropagation(); onAddToCart({ name: prod.name, price: `₹${prod.price}` }); }}>
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : cat.name === "Baby Care" ? (
            <div key={cat.name} style={{ border: "1px solid #ccc", padding: "20px", width: "100%", maxWidth: "600px", textAlign: "center", background: "#fff", borderRadius: 12, cursor: "pointer", position: "relative" }} onClick={() => setShowBabyCare(v => !v)}>
              <img src={cat.image} alt={cat.name} style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />
              <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>{cat.name}</div>
              <div style={{ fontSize: 14, color: '#388e3c', margin: '8px 0' }}>{showBabyCare ? 'Hide' : 'Show'} Products ▼</div>
              {showBabyCare && (
                <div style={{ marginTop: 16, textAlign: 'left' }}>
                  {babyCareProducts.map((prod) => (
                    <div key={prod.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, borderBottom: '1px solid #eee', paddingBottom: 4 }}>
                      <span>{prod.name} - ₹{prod.price}</span>
                      <button style={{ marginLeft: 8, background: '#4caf50', color: 'white', border: 'none', borderRadius: 4, padding: '2px 8px', cursor: 'pointer' }} onClick={e => { e.stopPropagation(); onAddToCart({ name: prod.name, price: `₹${prod.price}` }); }}>
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : cat.name === "Devices" ? (
            <div key={cat.name} style={{ border: "1px solid #ccc", padding: "20px", width: "100%", maxWidth: "600px", textAlign: "center", background: "#fff", borderRadius: 12, cursor: "pointer", position: "relative" }} onClick={() => setShowDevices(v => !v)}>
              <img src={cat.image} alt={cat.name} style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />
              <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>{cat.name}</div>
              <div style={{ fontSize: 14, color: '#388e3c', margin: '8px 0' }}>{showDevices ? 'Hide' : 'Show'} Devices ▼</div>
              {showDevices && (
                <div style={{ marginTop: 16, textAlign: 'left' }}>
                  {deviceProducts.map((prod) => (
                    <div key={prod.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, borderBottom: '1px solid #eee', paddingBottom: 4 }}>
                      <span>{prod.name} - ₹{prod.price}</span>
                      <button style={{ marginLeft: 8, background: '#4caf50', color: 'white', border: 'none', borderRadius: 4, padding: '2px 8px', cursor: 'pointer' }} onClick={e => { e.stopPropagation(); onAddToCart({ name: prod.name, price: `₹${prod.price}` }); }}>
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : cat.name === "First Aid" ? (
            <div key={cat.name} style={{ border: "1px solid #ccc", padding: "20px", width: "100%", maxWidth: "600px", textAlign: "center", background: "#fff", borderRadius: 12, cursor: "pointer", position: "relative" }} onClick={() => setShowFirstAid(v => !v)}>
              <img src={cat.image} alt={cat.name} style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />
              <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>{cat.name}</div>
              <div style={{ fontSize: 14, color: '#388e3c', margin: '8px 0' }}>{showFirstAid ? 'Hide' : 'Show'} Products ▼</div>
              {showFirstAid && (
                <div style={{ marginTop: 16, textAlign: 'left' }}>
                  {firstAidProducts.map((prod) => (
                    <div key={prod.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, borderBottom: '1px solid #eee', paddingBottom: 4 }}>
                      <span>{prod.name} - ₹{prod.price}</span>
                      <button style={{ marginLeft: 8, background: '#4caf50', color: 'white', border: 'none', borderRadius: 4, padding: '2px 8px', cursor: 'pointer' }} onClick={e => { e.stopPropagation(); onAddToCart({ name: prod.name, price: `₹${prod.price}` }); }}>
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null
        ))}
      </div>
    </section>
  );
}

export default Categories;