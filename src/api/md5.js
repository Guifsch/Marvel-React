import md5 from "md5";

const md5Transform = () => {
  const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
  const TS = process.env.REACT_APP_MARVEL_TS;
  const md5Value = md5(TS + PRIVATE_KEY + PUBLIC_KEY);

  return md5Value;
};

export const md5Complete = md5Transform();
