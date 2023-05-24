import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "p1",
    title: "Product 1",
  },
  {
    id: "p2",
    title: "Product 2",
  },
  {
    id: "p3",
    title: "Product 3",
  },
];

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((el) => (
          <li key={el.id}>
            <Link to={`/products/${el.title}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
