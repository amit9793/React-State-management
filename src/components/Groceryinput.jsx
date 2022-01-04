import { useState } from "react";

const Groinput = ({ getdata }) => {
  const [input, setInput] = useState("");

  const handlechange = (e) => {
    setInput(e.target.value);
  };

  const handleclick = () => {
    getdata(input);
  };

  return (
    <>
      <input type="text" placeholder="enter" onChange={handlechange} />;
      <button onClick={handleclick}>Add</button>
    </>
  );
};
export default Groinput;
