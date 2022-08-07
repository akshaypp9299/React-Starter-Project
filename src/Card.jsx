import React from "react";
import web from "./images/web.webp";
import { NavLink } from "react-router-dom";


export default function Card(props) {
  return (
    <>
     <div className="col-md-4 col-10 mx-auto">
      <div className="card">
        <img src={web} alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"></p>
          <NavLink to="" className="btn btn-primary">
            Go SomeWhere
          </NavLink>
        </div>
      </div>
      </div>
    </>
  );
}
