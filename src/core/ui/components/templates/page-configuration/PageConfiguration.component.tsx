import React from "react";
import Breadcrumb from "../../atoms/breadcrumb/Breadcrumb.component";

const PageConfiguration = () => {
  return (
    <div className="row page-titles" style={{ backgroundColor: "inherit" }}>
      <div className="col-md-5 align-self-center">
        <h3>Widget Data</h3>
      </div>
      <div className="col-md-7 align-self-center">
        <Breadcrumb />
      </div>
    </div>
  );
};

export default PageConfiguration;
