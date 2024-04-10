import React from "react";

const SearchInput = ({ value, className, placeholder }: { value: string; className: string; placeholder: string }) => {
  return (
    <div>
      <div className={"flex flex-row items-center justify-center h-12 border " + className}>
        <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.84375 2.92212C5.97776 2.92212 2.84375 6.05613 2.84375 9.92212C2.84375 13.7881 5.97776 16.9221 9.84375 16.9221C11.7297 16.9221 13.4414 16.1763 14.7001 14.9635C14.7265 14.9293 14.7553 14.8964 14.7866 14.865C14.818 14.8337 14.8509 14.8048 14.8851 14.7785C16.0979 13.5198 16.8437 11.8081 16.8437 9.92212C16.8437 6.05613 13.7097 2.92212 9.84375 2.92212ZM16.8756 15.5398C18.1073 14.0001 18.8437 12.0471 18.8437 9.92212C18.8437 4.95156 14.8143 0.922119 9.84375 0.922119C4.87319 0.922119 0.84375 4.95156 0.84375 9.92212C0.84375 14.8927 4.87319 18.9221 9.84375 18.9221C11.9688 18.9221 13.9218 18.1856 15.4614 16.954L19.1366 20.6292C19.5272 21.0197 20.1603 21.0197 20.5509 20.6292C20.9414 20.2387 20.9414 19.6055 20.5509 19.215L16.8756 15.5398Z"
            fill="#B0AEBC"
          />
        </svg>

        <input placeholder={placeholder} className="ml-2 flex-1 border-0 bg-transparent outline-none focus:outline-none" type="text" />
      </div>
    </div>
  );
};

export default SearchInput;
