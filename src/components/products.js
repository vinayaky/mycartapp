import React from "react";

export default function Products(props) {

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col-6">
            {props.product.name}
            <span className="badge bg-dark">₹{props.product.price}</span>
          </div>
          <div className="col-4">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  props.decQuantity(props.index);
                }}
              >
                -
              </button>
              <button type="button" className="btn btn-primary">
                {props.product.quantity}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  props.incQuantity(props.index);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="col-1">
            {props.product.price * props.product.quantity}
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-primary" onClick={()=>{props.productDelete(props.index)}}>
              delete
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
}
