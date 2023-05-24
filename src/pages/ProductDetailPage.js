import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{id}</p>
    </>
  );
}
