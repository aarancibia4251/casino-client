import React from "react";
import Button from "../../atoms/button/Button.component";
import Breadcrumb from "../../atoms/breadcrumb/Breadcrumb.component";

const PageConfiguration = () => {
  return (
    <div className="row page-titles">
      <div className="col-md-5 align-self-center">
        <h3 className="text-themecolor">Widget Data</h3>
      </div>
      <div className="col-md-7 align-self-center">
        <Breadcrumb />
      </div>
      <div>
        <Button className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10">
          <i className="ti-settings text-white"></i>
        </Button>
      </div>
    </div>
  );
};

export default PageConfiguration;
