import { useState } from "react";
import DiningBill from "./components/DiningBill";
import ServiceRating from "./components/ServiceRating";
import Total from "./components/Total";
import Reset from "./components/Reset";

import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [myRating, setMyRating] = useState(0);
  const [yourRating, setYourRating] = useState(0);

  return (
    <>
      <header>
        <h1>How much to tip?</h1>
      </header>

      <DiningBill onBill={setBill} bill={bill} />
      <ServiceRating onRating={setMyRating}>
        <label htmlFor="rating">How was the service? </label>
      </ServiceRating>
      <ServiceRating onRating={setYourRating}>
        <label htmlFor="rating">How did your friend like the service? </label>
      </ServiceRating>
      <Total bill={bill} myRating={myRating} yourRating={yourRating} />
      <Reset />
    </>
  );
}

export default App;
