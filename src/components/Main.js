import React from "react";
import NavBar from "./NavBar";
import { getProducts } from "../Auth";
import { useEffect, useState } from "react";
import Product from "./Product";
import Filter from "./Filter";

export default function Main(props) {
  const {
    sortField,
    setSortField,
    sortOrder,
    setSortOrder,
    filterField,
    setFilterField,
    filterValue,
    setFilterValue,
    limit,
    setLimit,
    page,
    setPage,
  } = props;

  const [products, setProducts] = useState([]);
  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`${urlEndpoint}/auth/get-products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJSON = await response.json();

      console.log(responseJSON);

      setProducts(responseJSON.message);
    };
    getProducts();
    return;
  }, [
    sortField,
    setSortField,
    sortOrder,
    setSortOrder,
    filterField,
    setFilterField,
    filterValue,
    setFilterValue,
    limit,
    setLimit,
    page,
    setPage,
  ]); // Want to put stuff like limit or page

  return (
    <div>
      <NavBar />
<div><Filter/></div>
      <main className="block">
        <h2>products</h2>
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
