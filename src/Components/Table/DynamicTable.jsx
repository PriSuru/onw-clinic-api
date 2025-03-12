import React from "react";
import "../../assets/CSS/TableCSS/DynamicTable.css";

const DynamicTable = ({ columns, data }) => {
  return (
    <div className="table-responsive dynamic-table-container">
      <table className="table table-striped table-hover dynamic-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">No Data Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;