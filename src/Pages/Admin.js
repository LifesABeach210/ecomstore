import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Filter from "../components/Filter";

export default function Admin() {
  const [productID, setProductId] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(Number(0));

  return (
    
    
    <div>
      <input
        type="number"
        onChange={(e) => {
          const makeId = e.target.value;
          setProductId(makeId);
        }}
        placeholder="productID"
      />
      <input
        onChange={(e) => {
          const makeTitle = e.target.value;
          setTitle(makeTitle);
        }}
        placeholder="title"
        type="text"
      />
      <input
        onChange={(e) => {
          const makePrice = e.target.value;
          setPrice(makePrice);
        }}
        placeholder="price"
        type="number"
      />
      <input
        onChange={(e) => {
          const makeDescription = e.target.value;
          setDescription(makeDescription);
        }}
        placeholder="description"
        type="text"
      />
      <input
        onChange={(e) => {
          const makeCategory = e.target.value;
          setCategory(makeCategory);
        }}
        placeholder="category"
        type="text"
      />
      <input
        onChange={(e) => {
          const makeImage = e.target.value;
          setImage(makeImage);
        }}
        placeholder="image"
        type="text"
      />
      <input
        onChange={(e) => {
          const makeRating = e.target.value;
          setRating(makeRating);
        }}
        placeholder="rating"
        type="number"
      />
      <Button></Button>
   
   <div><Filter/></div>
  
   
    </div>
  );
}
