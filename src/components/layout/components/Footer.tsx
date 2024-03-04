export default function Footer() {
  return (
    <>
      <div className="">
        <div className="flex justify-between">
          <div className="flex flex-item">
            <div>
              <button className="w-24 h-8 text-sm bg-customYellow rounded-md text-customBrown">
                Đặt lệnh
              </button>
            </div>
            <div className="ml-2 ">
              <input className="bg-customDarkGray w-60 h-8 rounded-md" />
            </div>
          </div>
          <div className="flex items-center text-zinc-400">
            <div className=" bg-customDarkGray h-8 w-24 rounded-full">
              <button className="flex items-center text-sm py-1 text-customGrayDark">
                <img
                  className="px-2 mt-1"
                  src="/images/imgFooter/empty-wallet.png"
                />
                Tài sản
              </button>
            </div>
            <div className="ml-2 mr-2 bg-customDarkGray h-8 w-28 rounded-full">
              <button className="flex items-center text-sm py-1 text-customGrayDark">
                <img
                  className="px-2 mt-1"
                  src="/images/imgFooter/receipt-edit.png"
                />
                Danh mục
              </button>
            </div>
            <div className=" bg-customDarkGray h-8 w-24 rounded-full">
              <button className="flex items-center text-sm py-1 text-customGrayDark">
                <img className="px-2 mt-1" src="/images/imgFooter/note-2.png" />
                Sổ lệnh
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
