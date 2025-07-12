import React, { useState } from "react";

const initialReviews = {};

function ProductReview({ productId }) {
  const [reviews, setReviews] = useState(initialReviews[productId] || []);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !text.trim()) {
      setError("Please provide a star rating and a review.");
      return;
    }
    const newReview = {
      rating,
      text,
      date: new Date().toLocaleString(),
    };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    setRating(0);
    setText("");
    setError("");
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1)
      : null;

  return (
    <div style={{ border: "1px solid #e0e0e0", borderRadius: 10, padding: 20, marginTop: 30, maxWidth: 500 }}>
      <h3 style={{ marginBottom: 10 }}>Product Reviews</h3>
      {averageRating && (
        <div style={{ marginBottom: 10 }}>
          <strong>Average Rating:</strong> {averageRating} / 5
          <span style={{ color: "#FFD600", marginLeft: 8 }}>
            {"★".repeat(Math.round(averageRating))}
            {"☆".repeat(5 - Math.round(averageRating))}
          </span>
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 8 }}>
          <span>Rate: </span>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                cursor: "pointer",
                color: star <= rating ? "#FFD600" : "#BDBDBD",
                fontSize: 22,
              }}
              onClick={() => handleStarClick(star)}
              data-testid={`star-${star}`}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write your review..."
          rows={3}
          style={{ width: "100%", borderRadius: 6, border: "1px solid #bdbdbd", padding: 8, marginBottom: 8 }}
        />
        {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
        <button type="submit" style={{ background: "#43a047", color: "white", border: "none", borderRadius: 6, padding: "8px 18px", cursor: "pointer" }}>
          Submit Review
        </button>
      </form>
      <div>
        {reviews.length === 0 ? (
          <div style={{ color: "#757575" }}>No reviews yet.</div>
        ) : (
          reviews.map((review, idx) => (
            <div key={idx} style={{ borderTop: idx === 0 ? "none" : "1px solid #eee", padding: "10px 0" }}>
              <div style={{ color: "#FFD600", fontSize: 18 }}>
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </div>
              <div style={{ margin: "4px 0" }}>{review.text}</div>
              <div style={{ fontSize: 12, color: "#888" }}>{review.date}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductReview; 