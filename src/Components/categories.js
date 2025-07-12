import React, { useState } from "react";
import ProductReview from "./ProductReview";

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
    <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', background: '#f8fcff', borderRadius: 8, boxShadow: '0 2px 8px rgba(25,118,210,0.04)', padding: 8 }}>
      <section style={{ padding: "6px" }}>
        <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>Shop by Category</h3>
        <div style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: "flex-start", justifyContent: 'center', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <div
              key={cat.name}
              style={{
                border: "1px solid #ccc",
                padding: "6px",
                width: "100%",
                maxWidth: "260px",
                textAlign: "center",
                background: "#fff",
                borderRadius: 6,
                cursor: "pointer",
                position: "relative",
                marginBottom: 2
              }}
              onClick={() => {
                if (cat.name === "Medicines") setShowMedicines(v => !v);
                if (cat.name === "Vitamins") setShowVitamins(v => !v);
                if (cat.name === "Personal Care") setShowPersonalCare(v => !v);
                if (cat.name === "Baby Care") setShowBabyCare(v => !v);
                if (cat.name === "Devices") setShowDevices(v => !v);
                if (cat.name === "First Aid") setShowFirstAid(v => !v);
              }}
            >
              <img src={cat.image} alt={cat.name} style={{ width: "100%", height: 36, objectFit: "cover", borderRadius: 4, marginBottom: 4 }} />
              <div style={{ fontWeight: "bold", fontSize: "11px", marginBottom: "2px" }}>{cat.name}</div>
              <div style={{ fontSize: 9, color: '#388e3c', margin: '2px 0' }}>
                {(() => {
                  if (cat.name === "Medicines") return showMedicines ? 'Hide' : 'Show';
                  if (cat.name === "Vitamins") return showVitamins ? 'Hide' : 'Show';
                  if (cat.name === "Personal Care") return showPersonalCare ? 'Hide' : 'Show';
                  if (cat.name === "Baby Care") return showBabyCare ? 'Hide' : 'Show';
                  if (cat.name === "Devices") return showDevices ? 'Hide' : 'Show';
                  if (cat.name === "First Aid") return showFirstAid ? 'Hide' : 'Show';
                  return '';
                })()} {cat.name} ▼
              </div>
              {/* Expanded content for each category */}
              {cat.name === "Medicines" && showMedicines && (
                <div style={{ marginTop: 4, textAlign: 'left', maxHeight: 80, overflowY: 'auto' }}>
                  {anyMatch ? filteredCategories.map((cat) => (
                    <div key={cat.name} style={{ marginBottom: 4, borderBottom: '1px solid #eee', paddingBottom: 2 }}>
                      <div style={{ fontWeight: 'bold', marginBottom: 2, fontSize: 10 }}>{cat.name}</div>
                      {cat.medicines && cat.medicines.map((med) => (
                        <div key={med.name} style={{ display: 'flex', flexDirection: 'column', marginBottom: 2, borderBottom: '1px solid #eee', paddingBottom: 2 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2, fontSize: 10 }}>
                            <span>{med.name} - ₹{med.price}</span>
                            <button style={{ marginLeft: 3, background: '#4caf50', color: 'white', border: 'none', borderRadius: 2, padding: '0 4px', cursor: 'pointer', fontSize: 9 }} onClick={e => { e.stopPropagation(); onAddToCart({ name: med.name, price: `₹${med.price}` }); }}>
                              Add
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )) : <div style={{ color: '#888', fontStyle: 'italic', fontSize: 9 }}>No medicines found.</div>}
                </div>
              )}
              {cat.name === "Vitamins" && showVitamins && (
                <div style={{ marginTop: 4, textAlign: 'left' }}>
                  {vitamins.map((vit) => (
                    <div key={vit.name} style={{ display: 'flex', flexDirection: 'column', marginBottom: 2, borderBottom: '1px solid #eee', paddingBottom: 2 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2, fontSize: 10 }}>
                        <span>{vit.name} - ₹{vit.price}</span>
                        <button style={{ marginLeft: 3, background: '#4caf50', color: 'white', border: 'none', borderRadius: 2, padding: '0 4px', cursor: 'pointer', fontSize: 9 }} onClick={e => { e.stopPropagation(); onAddToCart({ name: vit.name, price: `₹${vit.price}` }); }}>
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {cat.name === "Personal Care" && showPersonalCare && (
                <div style={{ marginTop: 4, textAlign: 'left' }}>
                  {personalCareProducts.map((prod) => (
                    <div key={prod.name} style={{ display: 'flex', flexDirection: 'column', marginBottom: 2, borderBottom: '1px solid #eee', paddingBottom: 2 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2, fontSize: 10 }}>
                        <span>{prod.name} - ₹{prod.price}</span>
                        <button style={{ marginLeft: 3, background: '#4caf50', color: 'white', border: 'none', borderRadius: 2, padding: '0 4px', cursor: 'pointer', fontSize: 9 }} onClick={e => { e.stopPropagation(); onAddToCart({ name: prod.name, price: `₹${prod.price}` }); }}>
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {cat.name === "Baby Care" && showBabyCare && (
                <div style={{ marginTop: 4, textAlign: 'left' }}>
                  {babyCareProducts.map((prod) => (
                    <div key={prod.name} style={{ display: 'flex', flexDirection: 'column', marginBottom: 2, borderBottom: '1px solid #eee', paddingBottom: 2 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2, fontSize: 10 }}>
                        <span>{prod.name} - ₹{prod.price}</span>
                        <button style={{ marginLeft: 3, background: '#4caf50', color: 'white', border: 'none', borderRadius: 2, padding: '0 4px', cursor: 'pointer', fontSize: 9 }} onClick={e => { e.stopPropagation(); onAddToCart({ name: prod.name, price: `₹${prod.price}` }); }}>
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {cat.name === "Devices" && showDevices && (
                <div style={{ marginTop: 4, textAlign: 'left' }}>
                  {deviceProducts.map((prod) => (
                    <div key={prod.name} style={{ display: 'flex', flexDirection: 'column', marginBottom: 2, borderBottom: '1px solid #eee', paddingBottom: 2 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2, fontSize: 10 }}>
                        <span>{prod.name} - ₹{prod.price}</span>
                        <button style={{ marginLeft: 3, background: '#4caf50', color: 'white', border: 'none', borderRadius: 2, padding: '0 4px', cursor: 'pointer', fontSize: 9 }} onClick={e => { e.stopPropagation(); onAddToCart({ name: prod.name, price: `₹${prod.price}` }); }}>
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {cat.name === "First Aid" && showFirstAid && (
                <div style={{ marginTop: 4, textAlign: 'left' }}>
                  {firstAidProducts.map((prod) => (
                    <div key={prod.name} style={{ display: 'flex', flexDirection: 'column', marginBottom: 2, borderBottom: '1px solid #eee', paddingBottom: 2 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2, fontSize: 10 }}>
                        <span>{prod.name} - ₹{prod.price}</span>
                        <button style={{ marginLeft: 3, background: '#4caf50', color: 'white', border: 'none', borderRadius: 2, padding: '0 4px', cursor: 'pointer', fontSize: 9 }} onClick={e => { e.stopPropagation(); onAddToCart({ name: prod.name, price: `₹${prod.price}` }); }}>
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Categories;