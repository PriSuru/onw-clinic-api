import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "../../assets/CSS/TableCSS/DynamicTable.css";
import { Pagination, Form } from "react-bootstrap";
import DynamicForm from "../Forms/DynamicForm";

const DynamicTable = ({ columns, data }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 828);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const visibleColumns = 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 828);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Format date and time in data before rendering
  const formattedData = data.map((row) => ({
    ...row,
    "Date & Time": `${dayjs(row.Date).format("DD-MMM-YYYY")} - ${dayjs(row.Time, "HH:mm A").format("hh:mm A")}`,
  }));

  // Filter data based on search query
  const filteredData = formattedData.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination Logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  const handleSearch = (formData) => {
    setSearchQuery(formData.search || "");
    setCurrentPage(1);
  };

  const formFields = [{ key: "search", label: "Search", type: "search", class: "col-12" }];

  return (
    <div className="table-responsive dynamic-table-container">
      {/* Search and Rows Per Page Selector */}
      <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap search-pagination-container">
        <div className="filter_content">
          <Form.Select
            value={recordsPerPage}
            onChange={(e) => {
              setRecordsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page
            }}
            style={{ width: "80px", display: "inline-block" }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </Form.Select>
        </div>
        <div className="search_content">
          <DynamicForm formFields={formFields} label="Search" onSubmit={handleSearch} />
        </div>
      </div>


      {/* Table */}
      <table className="table table-striped table-hover dynamic-table">
        <thead>
          <tr>
            <th>#</th>
            {columns.slice(0, isMobileView ? visibleColumns : columns.length).map((column, index) => (
              <th key={index} style={{ textAlign: getColumnAlignment(formattedData, column) }}>
                {column}
              </th>
            ))}
            {isMobileView && <th className="dropdown-column">More</th>}
          </tr>
        </thead>
        <tbody>
          {currentRecords.length > 0 ? (
            currentRecords.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                row={row}
                columns={columns}
                isMobileView={isMobileView}
                visibleColumns={visibleColumns}
                index={indexOfFirstRecord + rowIndex + 1}
              />
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 2} className="text-center">
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center flex-wrap pagination-wrapper">
        <span>
          Showing {indexOfFirstRecord + 1}-{Math.min(indexOfLastRecord, formattedData.length)} of {formattedData.length} Records
        </span>
        <Pagination className="pagination-container text-end">
          <Pagination.First disabled={currentPage === 1} onClick={() => setCurrentPage(1)} />
          <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} />
          {[...Array(totalPages).keys()].map((num) => (
            <Pagination.Item key={num + 1} active={num + 1 === currentPage} onClick={() => setCurrentPage(num + 1)}>
              {num + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} />
          <Pagination.Last disabled={currentPage === totalPages} onClick={() => setCurrentPage(totalPages)} />
        </Pagination>
      </div>

    </div>
  );
};

const TableRow = ({ row, columns, isMobileView, visibleColumns, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <tr>
        <td>{index}</td>
        {columns.slice(0, isMobileView ? visibleColumns : columns.length).map((col, colIndex) => (
          <td
            key={colIndex}
            style={{
              textAlign:
                typeof row[col] === "number"
                  ? "right"
                  : typeof row[col] === "object"
                    ? "center"
                    : "left",
            }}
          >
            {row[col]}
          </td>
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
          <td colSpan={visibleColumns + 2}>
            <table className="nested-table w-100">
              <tbody>
                {columns.slice(visibleColumns).map((col, index) => (
                  <tr key={index}>
                    <td className="nested-label">{col}</td>
                    <td style={{ textAlign: isNaN(row[col]) ? "left" : "right" }}>{row[col]}</td>
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

const getColumnAlignment = (data, column) => {
  if (data.length === 0) return "left";
  const value = data[0][column];
  if (typeof value === "number") return "right";
  if (React.isValidElement(value)) return "center";
  return "left";
};

export default DynamicTable;
