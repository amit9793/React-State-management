import Groceryinput from "./Groceryinput";
import { useState } from "react";
import { nanoid } from "nanoid";
import Groceryitem from "./Grocertlist";

const Grocery = () => {
  const [data, setData] = useState([]);

  const takeinput = (data1) => {
    const payload = {
      title: data1,
      status: false,
      id: nanoid(7),
    };
    setData([...data, payload]);
  };

  const handledelete = (a) => {
    console.log(a);
  };

  return (
    <>
      <Groceryinput getdata={takeinput} />
      {data.map((e) => (
        <Groceryitem key={e.id} {...e} handledelete={handledelete} />
      ))}
    </>
  );
};
// numbers.map((number) => number * 2);
export default Grocery;
