import Header from "@/components/common/Header";
import SearchInput from "@/components/common/SearchInput";
import HomeSwiper from "@/components/home/HomeSwiper";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/proxy/ticker_new/KRW")
      .then((response) => {
        console.log(response.data);
        const toplist = response.data.tickers.slice(0, 10);

        console.log(toplist);

        setCoins(toplist);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <main className="w-full h-full">
      <Header />
      {/* <HomeSwiper /> */}

      <section id="rank" className={`mt-8 w-full h-[35rem] flex justify-center items-center bg-red-100`}>
        <div className="mr-[8rem]">
          <h2 className="text-3xl text-primary leading-[3rem]">
            원칙을 지키는
            <br />
            가상자산 거래소 <b>코인원</b>
          </h2>
          <SearchInput value="" className="mt-4" placeholder="가상자산 검색" />
          <div className="flex justify-between">
            <h3 className="mb-2">공지사항</h3>
            <span>더보기</span>
          </div>
          <div>글이 없습니다.</div>
        </div>
        <div className="">
          <h2 className="font-bold mb-2 text-xl">가상 자산 랭킹</h2>
          <div>
            <div className="w-[35rem] shadow-lg">
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-left text-sm">
                    <th className="px-4 py-2">이름</th>
                    <th className="px-4 py-2">현재가</th>
                    <th className="px-4 py-2">등락률</th>
                    <th className="px-4 py-2">거래대금</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin: any, index: number) => (
                    <tr key={index} className="border-b text-sm">
                      <td className="px-4 py-2 font-medium w-2/6">{coin.target_currency}</td>
                      <td className="px-4 py-2 w-1/6">{coin.last}원</td>
                      <td className={`px-4 py-2 w-1/6 `}>{(coin.first / coin.last).toFixed(2)}%</td>
                      <td className="px-4 py-2 w-1/6">{(coin.quote_volume / 1000000).toFixed(1)}백만</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="rewards" className={`w-full h-[30rem] flex justify-center items-center bg-blue-100`}></section>
      <section id="qna" className={`w-full h-[15rem] flex justify-center items-center bg-brown-100`}></section>
      <section id="download" className={`w-full h-[15rem] flex justify-center items-center bg-purple-100`}></section>
      <section id="intro" className={`w-full h-[15rem] flex justify-center items-center bg-slate-400`}></section>
      <footer className={`w-full h-[10rem]`}></footer>
    </main>
  );
}
