import React from "react";
import "./ConnectWithUs.css";

export default function connectwithUs() {
  return (
    <div className="connectwithus">
      <div id="H1">
        <h1>Connect With Us</h1>
        <div className="underline"></div>
      </div>

      <div>
        <span className="icons">
          <a href="/#">
            <i class="fab fa-facebook"></i>
          </a>
        </span>
        <span className="icons">
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </span>
        <span className="icons">
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
        </span>
        <span className="icons">
          <a href="#">
            <i class="fab fa-pinterest"></i>
          </a>
        </span>
        <span className="icons">
          <a href="#">
            <i class="fab fa-youtube"></i>
          </a>
        </span>
      </div>
    </div>
  );
}
