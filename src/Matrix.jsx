import React, { useState } from "react";
import "./Matrix.css"; // Import CSS file

const Matrix = () => {
  // Track clicked or not
  const [clicked, setClicked] = useState([]);

  // Handles box clicks
  const handleClick = (row, col) => {
    // Convert 3x3 matrix(row and column) to index value
    const index = row * 3 + col;

    // Check if the box is already clicked
    if (clicked.includes(index)) return;

    // Add new index to clicked array
    const newClicked = [...clicked, index];

    // Check for the last clicked index
    if (newClicked.length === 9) {
      setTimeout(() => {
        newClicked.forEach((box, i) => {
          setTimeout(() => {
            document.getElementById(`box-${box}`).style.backgroundColor = "orange";
          }, i * 300);
        });
      }, 300);
    } else {
      // Change the clicked box to green
      document.getElementById(`box-${index}`).style.backgroundColor = "green";
    }

    // Update state
    setClicked(newClicked);
  };

  // Function to refresh the page
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="matrix-container">
      <div className="matrix">
        {Array.from({ length: 3 }, (_, row) =>
          Array.from({ length: 3 }, (_, col) => (
            <div
              key={`${row}-${col}`}
              id={`box-${row * 3 + col}`}
              className="box"
              onClick={() => handleClick(row, col)}
            ></div>
          ))
        )}
      </div>
      {/* Reset Button */}
      <button className="reset-btn" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Matrix;
