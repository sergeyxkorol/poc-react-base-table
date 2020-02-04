import React from "react";
import "./Filter.scss";

export default function Filter({ columns, onChange }) {
  function handleChange(columnKey) {
    onChange(columnKey);
  }

  return (
    <div className="filter">
      <h3>Filter</h3>
      <ul className="filter-list">
        {columns.map(column => (
          <li key={column.key} className="filter-elem">
            <label className="filter-label">
              <input
                type="checkbox"
                checked={column.hidden}
                onChange={() => handleChange(column.key)}
              />
              {column.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
