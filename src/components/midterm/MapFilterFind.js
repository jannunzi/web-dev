import React from "react";

const MapFilterFind = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const squares = numbers.map((item) => {return item * item});
  const even = numbers.filter(item => item % 2 === 0);
  const odd = numbers.filter(item => {return item % 2 !== 0});
  const four = numbers.find((item) => {return item === 4});
  const foursIndex = numbers.findIndex((item) => {return item === 4});

  return(
    <div>
      <h2>Map Filter Find examples</h2>
      <ul>
        <li>numbers: {JSON.stringify(numbers)}</li>
        <li>squares: {JSON.stringify(squares)}</li>
        <li>even: {JSON.stringify(even)}</li>
        <li>odd: {JSON.stringify(odd)}</li>
        <li>four: {JSON.stringify(four)}</li>
        <li>foursIndex: {JSON.stringify(foursIndex)}</li>
      </ul>
    </div>
  );
}

export default MapFilterFind;