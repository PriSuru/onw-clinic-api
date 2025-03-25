import React, { useState, useEffect } from "react";
import { CCard, CCardBody } from "@coreui/react";
import CustomButton from "../../Components/Buttons/CustomButton";
import DynamicTable from "../../Components/Table/DynamicTable";
import "../../assets/CSS/ReportCSS/MyReportContent.css";
import ContentBaseType from '../../Components/ContentsType/ContentBaseType';
import { FaDownload, FaTrash, FaShare } from "react-icons/fa";

const MyReportContent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      alert(`Uploading: ${file.name}`);
    }
  };

  const columns = ["SNo.", "Report Name", "Date", "Download", "Share", "Action"];
  const data = [
    {
      "SNo.": 1,
      "Report Name": "Blood Test Report",
      "Date": "12-Mar-2025",
      "Download": <CustomButton key="download-1" label={<FaDownload />} onClick={() => alert("Downloading...")} variant="success" />,
      "Share": <CustomButton key="share-1" label={<FaShare />} onClick={() => alert("Sharing...")} variant="primary" />,
      "Action": <CustomButton key="delete-1" label={<FaTrash />} onClick={() => alert("Deleting...")} variant="danger" />,
    },
    {
      "SNo.": 2,
      "Report Name": "X-Ray Report",
      "Date": "10-Mar-2025",
      "Download": <CustomButton label={<FaDownload />} onClick={() => alert("Downloading...")} variant="success" />,
      "Share": <CustomButton label={<FaShare />} onClick={() => alert("Sharing...")} variant="primary" />,
      "Action": <CustomButton label={<FaTrash />} onClick={() => alert("Deleting...")} variant="danger" />,
    },
  ];

  return (
    <div className="tableMyReports">
      <div className="my-report-container">
        <CCard className="ccard">
          <CCardBody>
            <p className="text-center"><ContentBaseType heading="My Reports" /></p>
            <div className="table-responsive">
              <DynamicTable columns={columns} data={data} />
              <div className="reportActionButton">
                <input type="file" className="form-control file-upload" onChange={handleFileChange} />
              </div>
            </div>
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
};

export default MyReportContent;
