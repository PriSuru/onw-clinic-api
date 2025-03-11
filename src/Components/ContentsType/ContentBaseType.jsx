import React from "react";

const ContentBaseType = ({ heading, title, content }) => {
  return (
    <div className="dynaminContentText">
      <p className="fs-1">{heading}</p>
      <p className="fs-4">{title}</p>
      <p className="fs-7">{content}</p>
    </div>
  );
};

export default ContentBaseType;
