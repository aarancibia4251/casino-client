import React from "react";

const Breadcrumb = () => {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a>Home</a></li>
      <li className="breadcrumb-item">Widget</li>
      <li className="breadcrumb-item active">Data</li>
    </ol>
  );
};

export default Breadcrumb;
