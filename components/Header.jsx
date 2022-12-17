import React from "react";
import Brand from "../src/assets/brand.svg"

export default function Header(){
  return (
    <nav>
      <img src={Brand} alt="tour brand image" />
      <h3>my travel journal.</h3>
    </nav>
  )
}