import axios from "axios";

export const getCoinList = async () => {
  return axios
    .get("http://localhost:8000/proxy/ticker_new/KRW")
    .then((response) => {
      console.log(response.data);
      return response.data.tickers;
    })
    .catch((error) => console.error("Error:", error));
};
