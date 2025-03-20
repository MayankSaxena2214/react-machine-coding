import { useState } from "react";

const Rating = ({ starLength = 5 }) => {
  const [hoverValue, setHoverValue] = useState(0);
  const [starValue, setStarValue] = useState(0);
  console.log(hoverValue);

  return (
    <div>
      {new Array(starLength).fill(0).map((item, index) => {
        return (
          <span
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
            onClick={() => setStarValue(index + 1)}
            className={`${
              (hoverValue == 0 && index < starValue) || index < hoverValue
                ? "gold"
                : ""
            }`}
          >
            &#8902;
          </span>
        );
      })}
    </div>
  );
};
export default Rating;