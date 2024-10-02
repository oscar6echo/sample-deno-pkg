const randomNb = (min = 1, max = 10): number => {
  /** */
  const i = Math.random();
  const n = Math.floor(i * (max - min)) + min;
  return n;
};

const uri = () => {
  /** */
  const base = "https://reqres.in/api/users";

  const n = randomNb();
  const url = `${base}/${n}`;

  return url;
};

export default uri;
