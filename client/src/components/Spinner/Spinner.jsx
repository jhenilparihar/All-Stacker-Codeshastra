import React, { useEffect } from "react";
import "./Spinner.css";
const Spinner = () => {

  const func = () => {
    let container = document.querySelector(".container_spin");
    let btn = document.getElementById("spinnn");
    let number = Math.ceil(Math.random() * 10000);

    let flash = document.querySelector(".container_spin div");
    console.log(container);
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 10000);
    console.log(flash)
  };

  return (
    <div className="body1">
      <div class="container_spin">
        <div class="one1">Oops! </div>
        <div class="two2">10 Tokens</div>
        <div class="three3">3 Tokens</div>
        <div class="four4">Spin Again</div>
        <div class="five5">-2 Tokens</div>
        <div class="six6">20 tokens</div>
      </div>
      <span class="mid_middle"></span>
      <button id="spinnn" onClick={func}>Spin</button>
      <div class="stoperrr"></div>
    </div>
  );
};

export default Spinner;
