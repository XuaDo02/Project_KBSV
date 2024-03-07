import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";

export default function RegisterBuyHistory() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownStatus, setIsDropdownStatus] = useState(false);

  const toggleDropdownStatus = () => {
    setIsDropdownStatus(!isDropdownOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="flex pt-3">
        <div className=" h-9 w-52 rounded-md flex item-center border border-customBlack justify-center">
          <button className=" flex items-center">
            <span className="ml-2 text-sm text-customGrayDark">
              Mã chứng khoán:{" "}
            </span>
            <span className="ml-2 text-sm text-customGrayLight">Tất cả</span>
          </button>
        </div>
        <div className=" h-9 w-40 rounded-md flex item-center border border-customBlack mx-3 justify-center">
          <button className=" flex items-center">
            <span className="ml-2 text-sm text-customGrayDark">
              Trạng thái:
            </span>
          </button>
          <button
            className="flex pt-2 text-customGrayLight text-sm ml-2"
            onClick={toggleDropdownStatus}
          >
            Tất cả
            <ArrowDown2 size="22" color="#d8d8d8" className="pl-2" />
          </button>
          {isDropdownStatus && (
            <div className=" absolute bg-customDark3 mt-10 z-50 w-40 h-30 rounded-t-md">
              <div className="  py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm ">Tất cả</label>
              </div>
              <div className="  py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">Chờ duyệt</label>
              </div>
              <div className=" py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">Thành công</label>
              </div>
            </div>
          )}
        </div>
        <div className=" h-9 w-52 rounded-md flex item-center border border-customBlack justify-center">
          <button className=" flex items-center">
            <span className="ml-2 text-sm text-customGrayDark">
              Khoảng thời gian:
            </span>
          </button>
          <button className="flex pt-2" onClick={toggleDropdown}>
            <span className="ml-2 text-sm text-customGrayLight">Tất cả</span>
            <ArrowDown2 size="22" color="#d8d8d8" className="pl-2" />
          </button>
          {isDropdownOpen && (
            <div className=" absolute bg-customDark3 mt-10 z-50 w-52 h-60 rounded-t-md">
              <div className="  py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm ">Tất cả</label>
              </div>
              <div className="  py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">Hôm nay</label>
              </div>
              <div className=" py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">Hôm qua</label>
              </div>
              <div className=" py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">7 ngày trước</label>
              </div>
              <div className=" py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">1 tháng trước</label>
              </div>
              <div className=" py-2 hover:bg-customGray">
                <label className="text-white ml-3 text-sm">Tùy chỉnh</label>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className=" border-neutral-700 mt-5 " />
    </>
  );
}
