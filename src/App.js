import React from "react";
import PropTypes from "prop-types";

function Food({ name, rating }) {
  return (
    <div>
      <h1>i love {name}</h1>
      <div>this food's rating is {rating} / 5</div>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  { id: 1, name: "kimchi", rating: 3 },
  { id: 2, name: "ramen", rating: 4 },
  { id: 3, name: "doncatsu", rating: 5 },
  { id: 4, name: "bibimbab", rating: 4 },
  { id: 5, name: "smagyopsal", rating: 5 },
  { id: 6, name: "gimbab", rating: 3 },
];

function App() {
  return (
    <div>
      {console.log(
        foodILike.map((dish) => (
          <Food key={dish.id} name={dish.name} rating={dish.rating} />
        ))
      )}
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
