import React from "react";
import "../App.css"; // Ensure correct path to your CSS file

const Dropdown = ({ months, selectedMonth, setSelectedMonth }) => {
  const handleChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <label>Select Month:</label>
      <select value={selectedMonth} onChange={handleChange}>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
