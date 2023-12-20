import React from "react";

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 11 9"
      style={{
        transform: "translateY(.25rem)",
      }}
    >
      <path
        className="card-logo"
        d="M5.078.44a.45.45 0 01.844 0l.929 2.51a.45.45 0 00.422.295h2.867c.45 0 .622.587.242.83L8.168 5.487a.45.45 0 00-.18.536l.87 2.35a.45.45 0 01-.665.535l-2.45-1.564a.45.45 0 00-.484 0l-2.45 1.564a.45.45 0 01-.664-.536l.869-2.35a.45.45 0 00-.18-.535L.617 4.074c-.379-.242-.207-.83.243-.83h2.867a.45.45 0 00.422-.293L5.078.44z"
      ></path>
    </svg>
  );
}

export default Star;
