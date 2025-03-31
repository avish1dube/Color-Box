import React, { useState } from "react";
import "./Matrix.css"; // Import CSS file

const Matrix = () => {
  // track clicked or not
  const [clicked, setClicked] = useState([]);
  
  // Handles box clicks
  const handleClick = (row, col) => {
    
    //convert 3x3 matrix(row and column) to index value
    const index = row * 3 + col; 

    // check the box is clicked or not  if true do nothing
    if (clicked.includes(index)) return;

    // ... is a spread operator and here used to add a new element(index) into an existing Array
    const newClicked = [...clicked, index];

    // checck for the last clicked index.
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
    // update the state with newClicked 
    setClicked(newClicked);
  };

  return (
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
  );
};

export default Matrix;
