import "./styles.css";
import { useState } from "react";

const carDB = {
  Toyota: [
    { name: "Fortuner", price: "₹ 32.39 Lakh", rating: "4.4/5" },
    { name: "Innova Crysta", price: "₹ 17.86 Lakh", rating: "4.5/5" },
    { name: "Camry", price: "₹ 44.35 Lakh", rating: "5/5" },
    { name: "Urban Cruiser", price: "₹ 9.02 Lakh", rating: "4.2/5" },
    { name: "Vellfire", price: "₹ 94.35 Lakh", rating: "4.4/5" },
    { name: "Glanza", price: "₹ 6.59 Lakh", rating: "4.5/5" },
    { name: "Hilux", price: "₹ 33.99 Lakh", rating: "2.2/5" }
  ],
  Mahindra: [
    { name: "Thar", price: "₹ 13.53 Lakh", rating: "4.6/5" },
    { name: "XUV700", price: "₹ 24.58 Lakh", rating: "4.4/5" },
    { name: "Scorpio-N", price: "₹ 23.90 Lakh", rating: "4.6/5" },
    { name: "Scorpio CLassic", price: "₹ 11.99 Lakh", rating: "4.2/5" },
    { name: "XUV300", price: "₹ 8.41 Lakh", rating: "4.4/5" },
    { name: "Bolero Neo", price: "₹ 9.29 Lakh", rating: "4.5/5" },
    { name: "KUV100 NXT", price: "₹ 6.21 Lakh", rating: "3.8/5" }
  ],
  Suzuki: [
    { name: "Brezza", price: "₹ 7.99 Lakh", rating: "4.1/5" },
    { name: "Swift", price: "₹ 5.47 Lakh", rating: "4.4/5" },
    { name: "Ciaz", price: "₹ 8.78 Lakh", rating: "4.2/5" },
    { name: "Baleno", price: "₹ 6.23 Lakh", rating: "4.4/5" },
    { name: "Ertiga", price: "₹ 8.35 Lakh", rating: "4.4/5" },
    { name: "Dzire", price: "₹ 6.23 Lakh", rating: "4.6/5" }
  ],
  Volkswagen: [
    { name: "Virtus", price: "₹ 11.22 Lakh", rating: "4.5/5" },
    { name: "Vento", price: "₹ 10.00 Lakh", rating: "4.6/5" },
    { name: "Polo", price: "₹ 6.49 Lakh", rating: "4.5/5" },
    { name: "Taigun", price: "₹ 11.40 Lakh", rating: "4.1/5" },
    { name: "Tiguan", price: "₹ 32.79 Lakh", rating: "5/5" }
  ]
};

export default function App() {
  var [brand, setBrand] = useState("Suzuki");

  function brandHandler(event) {
    console.log(event);
    setBrand(event);
  }

  return (
    <div className="App">
      <h1 className="title">Cars to watch out for!</h1>
      <p className="intro">
        Checkout my favorite Cars. Select a Brand to get started
      </p>
      <div>
        {Object.keys(carDB).map(function brandF(brand) {
          return (
            <button
              className="brand-btn"
              // onClick={() => brandHandler(brand)}
              onClick={function test() {
                brandHandler(brand);
              }}
            >
              {" "}
              {brand}{" "}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        <ul>
          {carDB[brand].map(function title(car) {
            return (
              <li key={car.name} className="list-div">
                <div className="car-name-text">{car.name}</div>{" "}
                <div className="car-detail-text">
                  Starting Price: {car.price}
                </div>
                <div className="car-detail-text">Rating: {car.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
