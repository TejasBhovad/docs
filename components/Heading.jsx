// src/components/Heading.js
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Heading = ({ name, description, children }) => {
  const imgSrc = useBaseUrl(`/images/${name}.png`);
  return (
    <div
      style={{
        display: "inline-block",
        height: "150px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: "5px",
      }}
    >
      <img
        src={imgSrc}
        alt={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      />
      <h2
        style={{
          color: "white",
          padding: "12px",
          boxSizing: "border-box",
          paddingBottom: "0px",
          fontWeight: "500",
          //   fontWeight: "regu",
        }}
      >
        {children}
      </h2>
      <p
        style={{
          color: "white",
          paddingTop: "0px",
          paddingBottom: "12px",
          paddingLeft: "12px",
          paddingRight: "12px",
          boxSizing: "border-box",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Heading;
