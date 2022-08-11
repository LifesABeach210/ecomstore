import React from "react";
import {
  faFontAwesome,
  faStar as fasFaStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

import {
  faFontAwesomeLogoFull,
  faStar as farFaStar,
  faStarHalf, faStarHalfAlt
} from "@fortawesome/free-regular-svg-icons";

export default function Rating(props) {
  const { rating, numReviews } = props;

  return (
    <div className="rating">
      <span>
        <FontAwesomeIcon
          icon={
            rating >= 1 ? fasFaStar : rating >= 0.5 ? faStarHalfAlt : farFaStar
          }
        />

      
      </span>
      <span>
      <FontAwesomeIcon
          icon={
            rating >= 2 ? fasFaStar : rating >= 1.5 ? faStarHalfAlt : farFaStar
          }
        />
       
      </span>
      <span>
      <FontAwesomeIcon
          icon={
            rating >= 3 ? fasFaStar : rating >= 2.5 ? faStarHalfAlt : farFaStar
          }
        />
      </span>
      <span>
      <FontAwesomeIcon
          icon={
            rating >= 4 ? fasFaStar : rating >= 3.5 ? faStarHalfAlt : farFaStar
          }
        />
      </span>
      <span>
      <FontAwesomeIcon
          icon={
            rating >= 5 ? fasFaStar : rating >= 4.5 ? faStarHalfAlt : farFaStar
          }
        />
      </span>
     
   
     
     
      <span>{numReviews + "Reviews"}</span>
    </div>
  );
}
