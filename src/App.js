import "./styles.css";
import { useState } from "react";

const carDB = {
  Toyota: [
    { name: "Fortuner", price: "₹ 32.39 Lakh" },
    { name: "Innova Crysta", price: "₹ 17.86 Lakh" },
    { name: "Camry", price: "₹ 44.35 Lakh" },
    { name: "Urban Cruiser", price: "₹ 9.02 Lakh" }
  ],
  Mahindra: [
    { name: "Thar", price: "₹ 13.53 Lakh" },
    { name: "XUV700", price: "₹ 24.58 Lakh" },
    { name: "Scorpio-N", price: "₹ 23.90 Lakh" }
  ],
  Suzuki: [
    { name: "Brezza", price: "₹ 7.99 Lakh" },
    { name: "Swift", price: "₹ 5.47 Lakh" },
    { name: "Baleno", price: "₹ 6.23 Lakh" },
    { name: "Ertiga", price: "₹ 8.35 Lakh" }
  ],
  Volkswagen: [
    { name: "Virtus", price: "₹ 11.22 Lakh" },
    { name: "Vento", price: "₹ 10.00 Lakh" },
    { name: "Polo", price: "₹ 6.49 Lakh" }
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
      <h1>Cars to watch out for!</h1>
      <p>Checkout my favorite Cars. Select a Brand to get started</p>
      <div>
        {Object.keys(carDB).map(function brandF(brand) {
          return (
            <button
              // onClick={() => brandHandler(brand)}
              onClick={function test() {
                brandHandler(brand);
              }}
              style={{
                padding: "0.5rem 0.5rem",
                cursor: "pointer",
                margin: "5px",
                borderRadius: "5px"
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
              <li
                key={car.name}
                style={{
                  padding: "1rem",
                  listStyle: "none",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem",
                  textAlign: "left",
                  border: "Solid",
                  borderBlockWidth: "1px"
                }}
              >
                <div style={{ fontSize: "larger" }}>{car.name}</div>{" "}
                <div style={{ fontSize: "Smaller" }}>{car.price}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
