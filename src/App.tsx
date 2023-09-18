import { useState } from "react";
import DiningBill from "./components/DiningBill";
import ServiceRating from "./components/ServiceRating";

import Total from "./components/Total";
import Reset from "./components/Reset";
import ShellBar from "./components/ShellBar";

import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [myRating, setMyRating] = useState(0);
  const [yourRating, setYourRating] = useState(0);

  return (
    <>
      <div className="fd-dynamic-page">
        <div className="fd-dynamic-page__title-area ">
          <ShellBar />
          <h1 className="fd-dynamic-page__title fd-dynamic-page__title--wrap fd-margin--sm">
            How much to tip?
          </h1>
        </div>
        <div className="fd-dynamic-page__main-container fd-container sap-flex--row">
          <DiningBill onBill={setBill} bill={bill} />
          <ServiceRating rating={myRating} onRating={setMyRating}>
            <label className="fd-form-label" htmlFor="rating">
              How was the service?{" "}
            </label>
          </ServiceRating>
          <ServiceRating rating={yourRating} onRating={setYourRating}>
            <label className="fd-form-label" htmlFor="rating">
              How did your friend like the service?{" "}
            </label>
          </ServiceRating>
          <Total bill={bill} myRating={myRating} yourRating={yourRating} />
        </div>
        <footer className="fd-dynamic-page__toolbar-container">
          <Reset
            onSetBill={setBill}
            onSetMyRating={setMyRating}
            onSetYourRating={setYourRating}
          />
        </footer>
      </div>
    </>
  );
}

export default App;
