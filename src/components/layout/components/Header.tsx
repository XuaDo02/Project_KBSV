export default function Header() {
  return (
    <>
      <div className="text-white p-3 flex justify-between items-center bg-customDark2 h-14">
        <div className="flex items-center ml-5">
          <img src="/images/imgHeader/path20.png" className="mr-2" />
          <h1 className="text-2xl font-mono">KB Securities</h1>
          <button className="ml-10 mt-1 text-sm text-customYellow">
            Tin mới
          </button>

          <div className="ml-80 flex">
            <div className=" ml-96 text-sm mt-3">
              <p>09:53:26 26/12/2023</p>
            </div>
            <div>
              <div className="grid grid-cols-7 text-white text-center items-center w-full text-xs">
                <div className="grid col-span-4 grid-cols-5">
                  <div className="col-span-1 ml-2">
                    <img
                      src="/images/imgHeader/search-normal.png"
                      className="mr-2"
                    />
                  </div>
                  <div className="col-span-1 ml-2">
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
                  <div className="col-span-1 ml-2">
                    <img
                      src="/images/imgHeader/message-question.png"
                      className="mr-2"
                    />
                  </div>
                </div>
                <div className="grid col-span-3 grid-cols-1">
                  <div className="col-span-1 ml-2 flex">
                    <img
                      src="/images/imgHeader/user.png"
                      className="mr-2 w-10 h-10"
                    />
                    <div className="flex flex-col mt-1 text-sm font-semibold text-customGray">
                      <span>Nguyen Van A</span>
                      <span>09O123HFHF22</span>
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
