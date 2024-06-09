import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

const TitleCard = ({ title, logo, link }) => {
  const imageLink = useBaseUrl(`/logos/${logo}.svg`);
  return (
    <a
      href={link}
      style={{
        padding: "0",
        margin: "0",
      }}
    >
      <div className="titleCardContainer">
        <img
          src={imageLink}
          alt={title}
          style={{
            width: "32px",
            height: "auto",
            borderRadius: "5px",
            padding: "2px",
          }}
        />
        <h2
          className="titleCardTitle"
          style={{
            fontSize: "1.15em",
            marginBottom: "0px",
          }}
        >
          {title}
        </h2>
      </div>
    </a>
  );
};

export default TitleCard;
