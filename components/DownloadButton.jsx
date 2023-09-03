import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const buttonStyle = {
  backgroundColor: "#0093c2",
  color: "#FFFFFF",
  padding: "10px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  display: "inline-block", // Display the button inline
  margin: "10px 0", // Adjust margin as needed
};

const DownloadButton = ({ filename, children }) => {
  const downloadLink = useBaseUrl(`/assets/${filename}`);
  return (
    <>
      <a href={downloadLink} download style={buttonStyle}>
        {children}
      </a>
    </>
  );
};

export default DownloadButton;
