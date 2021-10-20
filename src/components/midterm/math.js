// implicit return
export const add = (a, b) => a + b;

export const subtract = (a, b) => {
  return a - b;
};

export const multiply = (a, b) => {
  const c = a * b;
  return c;
};

const api = {
  add,
  subtract,
  multiply,
  PI: 3.1415
};

export default api;