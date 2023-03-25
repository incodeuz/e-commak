import { Alert } from "antd";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CardComp from "../components/CardComp";
import Input from "../components/Input";
import { ContextN6 } from "../context/contextApi";

const AllProducts = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [data, setData] = useContext(ContextN6);
  const [isLoading, setIsLoading] = useState(true);

  async function fetcher() {
    try {
      const res = await fetch(
        "https://641e84efad55ae01ccab3810.mockapi.io/products"
      );
      const datas = await res.json();
      setData(datas);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetcher();
  }, [data, setData]);

  if (!data) {
    setTimeout(() => {
      return <h1 className="main-title">Loading...</h1>;
    }, 1000);
  }
  return (
    <>
      {isAdded && (
        <Alert message="Product Deleted Successfully!" type="info" closable />
      )}
      <h1 className="main-title tittle">All Products</h1>

      <div className="d-flex mt-5">
        <div className="sidebar d-flex flex-column">
          <Input
            placeholder={"Search..."}
            name={"search"}
            type={"search"}
            width={"100%"}
            height={"50px"}
          />

          <ul className="ul">
            <li className="li">☞ Arzonlar</li>
            <li className="li">☞ Qimmatlari</li>
            <li className="li">☞ Yangilari</li>
          </ul>
        </div>
        <div className="main-content d-flex flex-wrap justify-content-evenly">
          {isLoading
            ? "Loading..."
            : data.length === 0
            ? "No Products"
            : data?.map((product) => (
                <CardComp
                  key={product.id}
                  isAdded={isAdded}
                  setIsAdded={setIsAdded}
                  {...product}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
