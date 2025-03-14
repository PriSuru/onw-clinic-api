import React, { useState, useEffect } from "react";
import "../../assets/CSS/TableCSS/DynamicTable.css";

const DynamicTable = ({ columns, data }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 828);
  const visibleColumns = 3; // Mobile view ke liye sirf 4 columns show karna hai

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 828);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="table-responsive dynamic-table-container">
      <table className="table table-striped table-hover dynamic-table">
        <thead>
          <tr>
            {columns.slice(0, isMobileView ? visibleColumns : columns.length).map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            {isMobileView && <th className="dropdown-column">More</th>}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                row={row}
                columns={columns}
                isMobileView={isMobileView}
                visibleColumns={visibleColumns}
              />
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className="text-center">No Data Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ row, columns, isMobileView, visibleColumns }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <tr>
        {columns.slice(0, isMobileView ? visibleColumns : columns.length).map((col, colIndex) => (
          <td key={colIndex}>{row[col]}</td>
        ))}
        {isMobileView && (
          <td>
            <button className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "▲" : "▼"}
            </button>
          </td>
        )}
      </tr>
      {isMobileView && isExpanded && (
        <tr className="expanded-row">
          <td colSpan={visibleColumns + 1}>
            <table className="nested-table w-100">
              <tbody>
                {columns.slice(visibleColumns).map((col, index) => (
                  <tr key={index}>
                    <td className="nested-label">{col}</td>
                    <td>{row[col]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
};

export default DynamicTable;
