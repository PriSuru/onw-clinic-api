import React from "react";
import { CCard, CCardBody } from "@coreui/react";
import CustomButton from "../../Components/Buttons/CustomButton";
import DynamicTable from "../../Components/Table/DynamicTable";
import "../../assets/CSS/ReportCSS/MyReportContent.css";
import ContentBaseType from '../../Components/ContentsType/ContentBaseType'

const MyReportContent = () => {
  const columns = ["SNo.", "Report Name", "Date", "Action"];
  const data = [
    {
      "SNo.": 1,
      "Report Name": "Blood Test Report",
      "Date": "12-Mar-2025",
      "Action": <CustomButton label="Download" onClick={() => alert("Downloading...")} variant="success" />,
    },
    {
      "SNo.": 2,
      "Report Name": "X-Ray Report",
      "Date": "10-Mar-2025",
      "Action": <CustomButton label="Download" onClick={() => alert("Downloading...")} variant="success" />,
    },
  ];

  return (
    <div className="tableMyReports">
      <div className="d-flex align-items-center">
        <input type="file" className="form-control file-upload" />
        <CustomButton type="file" label="Upload File" onClick={() => alert("File Uploaded")} variant="primary" />
      </div>
      <div className="my-report-container">
        <CCard className="my-report-card shadow-lg">
          <CCardBody>
            <p className="text-center"><ContentBaseType heading="My Reports" /></p>
            <div className="table-responsive">
              <DynamicTable columns={columns} data={data} />
            </div>
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
};

export default MyReportContent;
