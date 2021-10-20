import React from "react";

const Spreader = () => {

  const a = [1, 2, 3];

  const c = {
    d: 1,
    e: 2,
    a
  };

  const d = {
    f: 3,
    g: 4
  }

  const f = {
    ...c,
    ...d,
    k: 123,
    l: 234,
    d: 321
  }

  const b = [2, ...a, 3, 4, ...a, f];

  return(
    <div>
      <h2>Spreader</h2>
      <ul>
        <li>a = {a.join(',')}</li>
        <li>b = {JSON.stringify(b)}</li>
        <li>c = {JSON.stringify(c)}</li>
        <li>d = {JSON.stringify(d)}</li>
        <li>f = {JSON.stringify(f)}</li>
      </ul>
    </div>
  );
}

export default Spreader;