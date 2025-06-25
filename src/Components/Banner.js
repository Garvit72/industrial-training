import React, { useEffect, useState } from "react";

function Banner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <section style={{ padding: "40px", backgroundColor: "#e8f5e9", textAlign: "center" }}>
      <h2
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)",
          fontSize: "2.2rem",
          marginBottom: 12
        }}
      >
        Your Health, Our Priority
      </h2>
      <p
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1s 0.2s cubic-bezier(.4,0,.2,1), transform 1s 0.2s cubic-bezier(.4,0,.2,1)",
          fontSize: "1.25rem"
        }}
      >
        Shop from a wide range of medicines and health products
      </p>
    </section>
  );
}

export default Banner;
