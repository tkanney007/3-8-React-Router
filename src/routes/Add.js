import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Add({ handlerAdd }) {
  const navigate = useNavigate();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let { name, quantity, price, discount } = e.target;
          console.log(name.value);
          let myProduct = {
            id: Math.round(Math.random() * 1000).toString(),
            name: name.value,
            quantity: quantity.value,
            price: price.value,
            discount: discount.value,
          };
          handlerAdd(myProduct);
          navigate("/view");
        }}
      >
        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter Product Name"></input>
        <br />
        <label>Quantity:</label>
        <input type="text" name="quantity" placeholder="Enter Quantity"></input>
        <br />
        <label>Price:</label>
        <input type="text" name="price" placeholder="Enter Price"></input>
        <br />
        <label>Discount:</label>
        <input type="text" name="discount" placeholder="Enter Discount"></input>
        <br />
        <button>Add</button>
      </form>
    </>
  );
}
export default Add;
