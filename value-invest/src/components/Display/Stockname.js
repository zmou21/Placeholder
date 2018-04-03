  import React from "react";

  export const Stockname = props => (
    <div className="stock-name">
      <img id="logo" src={props.companyLogo} width="75px" height="75px" alt="logo"/>
      <h1 className="company-name">{props.companyName}
        <i onClick={props.postFavorite} className="favorite far fa-heart"></i>
      </h1>
    </div>
  );
