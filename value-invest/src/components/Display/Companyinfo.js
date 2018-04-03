import React from "react";

export const Companyinfo = props => (
  <div className="company-info">
    <ul className="main-list">
      <li className="description-item"><strong className="title-info">Exchange:</strong><br></br> {props.exchange}</li>
      <li className="description-item"><strong>Sector/Industry:</strong><br></br> {props.sector} | {props.industry}</li>
      <li className="description-item"><strong>Description:</strong><br></br> {props.description}</li>
    </ul>
  </div>
);
