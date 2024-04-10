import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [showBenefits, setShowBenefits] = useState(false);

  return (
    <header className="w-full bg-white text-blue-900 shadow-md py-4 px-8 flex justify-center items-center overflow-hidden">
      {/* 네비게이션 메뉴 */}
      <span className="text-xl font-bold hover:text-blue-700 whitespace-nowrap block lg:hidden">CoinOne</span>
      <nav className="space-x-6 mr-6 hidden lg:flex">
        <Link href="/">
          <span className="text-xl font-bold hover:text-blue-700 whitespace-nowrap hidden xl:block">CoinOne</span>
        </Link>
        <Link href="/exchange">
          <span className="hover:text-blue-700 whitespace-nowrap">거래소</span>
        </Link>
        <Link href="/simple-trading">
          <span className="hover:text-blue-700 whitespace-nowrap">간편거래</span>
        </Link>
        <Link href="/pro-chart">
          <span className="hover:text-blue-700 whitespace-nowrap">프로차트</span>
        </Link>
        <Link href="/asset">
          <span className="hover:text-blue-700 whitespace-nowrap">자산</span>
        </Link>
        <Link href="/insight">
          <span className="hover:text-blue-700 whitespace-nowrap">인사이트</span>
        </Link>
        <Link href="/plus">
          <span className="hover:text-blue-700 whitespace-nowrap">플러스</span>
        </Link>
        <Link href="/service">
          <span className="hover:text-blue-700 whitespace-nowrap">서비스</span>
        </Link>
      </nav>

      {/* 오른쪽 메뉴 */}
      <div className="items-center space-x-4 hidden lg:flex">
        <button className="hover:text-blue-700 whitespace-nowrap">Reward</button>
        <button className="hover:text-blue-700 whitespace-nowrap">공지사항</button>
        <div>
          <Link href="/signup">
            <span className="hover:text-blue-700 whitespace-nowrap">회원가입</span>
          </Link>
          {showBenefits && <div className="absolute top-0 right-full bg-yellow-500 text-blue-900 font-semibold rounded-full px-2 py-1">혜택 제공 중</div>}
        </div>
        <button className="hover:text-blue-700 whitespace-nowrap">로그인</button>
        <select className="hover:text-blue-700 whitespace-nowrap">
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
