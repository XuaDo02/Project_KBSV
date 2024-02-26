export default function Header() {
  return (
    <>
      <div className="text-white p-3 flex justify-between items-center bg-customDark2">
        <div className="flex items-center ml-5">
          <img src="/images/imgHeader/path20.png" className="mr-2" />
          <h1 className="text-2xl font-semibold">KB Securities</h1>
          <button className="ml-10 mt-1 text-sm text-customYellow">
            Tin mới
          </button>
          <div className="ml-96 text-sm">
            <p>09:53:26 26/12/2023</p>
          </div>
          <div className="ml-16">
            <div>
              <div className="grid grid-cols-6 text-white text-center items-center w-full text-xs">
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
                <div className="grid col-span-2 grid-cols-1">
                  <div className="col-span-1 ml-2">
                    <img src="/images/imgHeader/user.png" className="mr-2" />
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
