import React from "react";
import loading from "./loadingPRO.gif";

export default function Loading() {
  return (
    <div>
      <img
        src={loading}
        style={{ width: "200px", margin: "auto", display: "block", marginTop: 30 }}
        alt="Loading..."
      />
    </div>
  );
}
