import Header from "@/components/common/Header";
import HomeSwiper from "@/components/home/HomeSwiper";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  // useEffect(() => {
  //   axios.get("https://api.coinone.co.kr/public/v2/range_units").then((response) => {
  //     console.log("asdasd", response.data);
  //   });
  // }, []);

  // 데이터 담을 곳
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
      .then((response) => response.json())
      .then((json) => {
        console.log("asdasd", json);
        setCoins(json.slice(0, 100)); // 가져온 데이터 1~100위 담기
      });
  }, []);
  return (
    <div className="w-full h-full">
      <Header />
      <HomeSwiper />

      <main className={`w-full h-full`}>{/* 다른 내용 */}</main>
    </div>
  );
}
