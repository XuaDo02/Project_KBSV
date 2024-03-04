import { useState } from "react";

export function RegisterBuyTab() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabsData = [
    {
      label: "Đăng ký quyền mua",
      // content:<ResgisterLayout/>
      content: ""
    },
    {
      label: "Lịch sử ",
      content: "Fugiat dolor et quis."
    }
  ];
  return (
    <div>
      <div className="flex space-x-3 border-b text-customWhite text-sm ">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b-2 transition-colors duration-300 ${
                idx === activeTabIndex
                  ? "border-customYellow"
                  : "border-transparent hover:border-yellow-200"
              }`}
              onClick={() => setActiveTabIndex(idx)}
              style={{ fontSize: "15px" }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="py-2">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
}
