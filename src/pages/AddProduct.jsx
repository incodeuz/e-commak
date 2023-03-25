import { Alert } from "antd";
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const AddProduct = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [values, setValues] = useState({
    title: "",
    price: "",
    image: "",
    desc: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();

    fetch("https://641e84efad55ae01ccab3810.mockapi.io/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    })
      .then((res) => res && setIsAdded(true))
      .catch((err) => console.log(err));
       setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 5000);

    e.target.reset();
  };

  const inputValuesiniOlish = (e) => {
    setValues((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {isAdded && (
        <Alert message="Product Added Successfully!" type="success" closable />
      )}

      <h1 className="main-title mt-3">Add Product</h1>
      <div className="d-flex flex-column mt-3">
        <form onSubmit={formSubmit} className="d-flex flex-column gap-3">
          <Input
            onChange={(e) => inputValuesiniOlish(e)}
            type="text"
            className="form-control"
            placeholder="Enter Image URL"
            name="image"
            height="55px"
          />
          <Input
            onChange={(e) => inputValuesiniOlish(e)}
            type="text"
            className="form-control"
            placeholder="Enter Title"
            name="title"
            height="55px"
          />
          <Input
            onChange={(e) => inputValuesiniOlish(e)}
            type="text"
            className="form-control"
            placeholder="Enter Price"
            name="price"
            height="55px"
          />
          <Input
            onChange={(e) => inputValuesiniOlish(e)}
            type="text"
            className="form-control"
            placeholder="Enter Description"
            name="desc"
            height="55px"
          />

          <Button type="submit">Post Product</Button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
