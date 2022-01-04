const Groceryitem = ({ title, id, handledelete }) => {
  return (
    <>
      <h1>
        {title} <button onClick={() => handledelete(id)}>delete</button>
      </h1>
    </>
  );
};
export default Groceryitem;
