import React from "react";
import "./ContactUs.css";

export default function contactUs() {
  return (
    <div className="contactUs">
      <div className="contactH1">
        <h1>Contact Us</h1>
        <div className="underline"></div>
      </div>
      <div className="spacer"></div>
      <div>
        <h3>{`We Offer Free Shipping & Installation on all orders`}</h3>
      </div>
      <div className="spacer"></div>
      <div>
        <h2>Rentage</h2>
        <p>Email: cs@rentage.in</p>
        <p>Phone: 93344 85851 / 7604092235</p>
      </div>
    </div>
  );
}
