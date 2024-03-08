export default function Header() {
  return (
    <>
      <div className="text-white flex justify-between items-center bg-customDark2 h-14 ">
        <div className="flex items-center ml-5">
          <img src="/images/imgHeader/KB.png" className="mr-2" />
          <button className=" w-16 h-5 mt-1 ml-10 text-sm text-customYellow bg-gradient-to-r from-customGrayDark to-customDark2 rounded-lg hover:from-transparent hover:to-gray-400">
            Tin mới
          </button>

          <div className="ml-80 flex">
            <div className="flex ml-96 text-sm mt-3">
              <p>09:59:59 </p>
              <p className="pr-5 pl-3 text-customGray ">16/01/2023</p>
            </div>
            <div>
              <div className="grid grid-cols-7 items-center w-full text-xs">
                <div className="grid col-span-4 grid-cols-5">
                  <div className="col-span-1 ml-1 border-r border-l border-customBlack">
                    <button>
                      <img
                        src="/images/imgHeader/search-normal.png"
                        className="mx-2"
                      />
                    </button>
                  </div>
                  <div className="col-span-1 ml-2 ">
                    <img src="/images/imgHeader/lock.png" className="mr-2" />
                  </div>
                  <div className="col-span-1 ml-2">
                    <img
                      src="/images/imgHeader/notification.png"
                      className="mr-2"
                    />
                  </div>
                  <div className="col-span-1 ml-2">
                    <img
                      src="/images/imgHeader/setting-2.png"
                      className="mr-2"
                    />
                  </div>
                  <div className="col-span-1 ml-1">
                    <img
                      src="/images/imgHeader/message-question.png"
                      className=" "
                    />
                  </div>
                </div>
                <div className="grid col-span-3 grid-cols-1">
                  <div className="col-span-1 ml-2 flex ">
                    <img
                      src="/images/imgHeader/user.png"
                      className="mr-2 w-10 h-10 "
                    />
                    <div className="flex flex-col mt-1 text-sm font-sans ">
                      <span className="text-customGrayLight">Nguyen Van A</span>
                      <span className="text-customGray">09O123HFHF22</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
