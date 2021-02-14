import axios from "axios";
import { useState, useEffect } from "react";
import { formatPrice } from "./App.helper";
import moment from "moment";
import "./App.css";

function App() {
  
  const [price, setPrice] = useState(null);
  const ENDPOINT =
    "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=CVS2RSUXXQ7N06LV";

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then((response) => {
        setPrice(response.data);
      })
      .catch((e) => {
        throw Error(`fetch error: ${e}`);
      });
  }, []);

  if (!price) return <div>Loading...Please wait</div>;

  const formattedPrice = formatPrice(
    price["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
  );

  const val = moment(
    price["Realtime Currency Exchange Rate"]["6. Last Refreshed"]
  ).format("DD/MM/YYYY");

  return (
    <div className="App">
      <div className="app-container">
        <h2 className="title">Bitcoin</h2>
        <p className="content">USD$: {formattedPrice}</p>
        <p className="app-data">{val}</p>
      </div>
    </div>
  );
}

export default App;
