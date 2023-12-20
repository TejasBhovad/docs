import React from "react";
// import link from docusaurus
import Link from "@docusaurus/Link";

const Card = ({ sem, linkto }) => {
  return (
    // wrap in link
    <Link to={linkto}>
      <div
        className="sem"
        style={{
          // border: "solid 1px #252432",
          backgroundColor: "transparent",
          borderRadius: "4px",
        }}
      >
        <div
          className="icon"
          style={{
            height: "75%",
            width: "100%",
            // backgroundColor: "#141322",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
          }}
        >
          <div
            className="num"
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
              fontFamily: "Helvetica Neue",
              fontWeight: "bold",
              fontSize: "2rem",
              // color: "#fff",
            }}
          >
            {sem
              .toString()
              .replace("1", "I")
              .replace("2", "II")
              .replace("3", "III")
              .replace("4", "IV")
              .replace("5", "V")
              .replace("6", "VI")
              .replace("7", "VII")
              .replace("8", "VIII")}
          </div>
        </div>
        <div
          className=""
          style={{
            height: "25%",
            width: "100%",
            // backgroundColor: "#141322",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Semester {sem}
        </div>
      </div>
    </Link>
  );
};

export default Card;
