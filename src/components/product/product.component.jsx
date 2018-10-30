import React from "react";
import { mapIcons, capitalize } from '../../lib';

import './style.scss';

const top3Features = ['seats', 'doors', 'gearbox'];

const Product = (props) => {
  console.log(props);
  return (
    <div className="product">
      <div className="product__photo">
        <img src={props.photo} alt="product" />
      </div>
      <div className="product__details">
        <div className="product__details--title">
          {props.brand} {props.model}
        </div>
        <div className="product__details--features">
          {
            top3Features.map((feature) => (
              <div className="product__details--feature">
                <img src={mapIcons(feature)} alt={feature} />
                <p>{`${props.features[feature]} ${capitalize(feature)}`}</p>
              </div>
            ))
          }
        </div>
        <div className="product__details--price">
          <div className="product__details--amount">
            <img src={mapIcons('euro-white')} alt="euro" />
            <p>{props.price['3days']}</p>
          </div>
          <div className="product__details--details">
            <p>price for 3 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
