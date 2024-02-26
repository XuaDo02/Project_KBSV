// import { use } from "i18next";

export default function RegisterConfirmForm() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-customDark3 p-6 rounded shadow-md w-1/2 h-auto">
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 bg-customBlack text-left">
            Xác nhận đăng ký quyền mua
          </h2>
        </div>
        <div className="mb-2 flex items-center py-1">
          <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
            Tiểu khoản
          </label>
          <span className="bg-customDark3">-</span>
        </div>
        <div className="mb-2 flex items-center py-1">
          <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
            Mã
          </label>
          <span className="bg-customDark3"></span>
        </div>
        <div className="mb-2 flex items-center py-1">
          <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
            Giá
          </label>
          <span className="bg-customDark3"></span>
        </div>
        <div className="mb-2 flex items-center py-1">
          <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
            SL CK hưởng quyền
          </label>
          <span className="bg-customDark3"></span>
        </div>
        <div className="mb-2 flex items-center py-1">
          <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
            SL quyền sở hữu
          </label>
          <span className="bg-customDark3"></span>
        </div>
        <div className="mb-2 flex items-center py-1">
          <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
            SL CK đã mua
          </label>
          <span className="bg-customDark3"></span>
        </div>
        <div className="mb-2 flex items-center py-1">
          <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
            SL CK còn được mua
          </label>
          <span className="bg-customDark3"></span>
        </div>
        <div className="mb-2 flex items-center py-1">
          <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
            SL CK đăng ký mua
          </label>
          <span className="bg-customDark3"></span>
        </div>
        <div className="mb-2 flex items-center py-1">
          <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
            Tiền mua phải thanh toán
          </label>
          <span className="bg-customDark3">-</span>
        </div>
        <div className="mt-5">
          <hr className="border-t border-neutral-600 w-full" />
        </div>
        {/* input otp start */}
        <div className="otp-field">
          <input
            type="text"
            className="w-14 h-14 px-1 text-center rounded-lg m-2 text-white"
          />
          <input
            type="text"
            className="w-14 h-14 px-1 text-center rounded-lg m-2 text-white"
          />
          <input
            type="text"
            className="w-14 h-14 px-1 text-center rounded-lg m-2 text-white"
          />
          <input
            type="text"
            className="w-14 h-14 px-1 text-center rounded-lg m-2 text-white"
          />
          <input
            type="text"
            className="w-14 h-14 px-1 text-center rounded-lg m-2 text-white"
          />
          <input
            type="text"
            className="w-14 h-14 px-1 text-center rounded-lg m-2 text-white"
          />
        </div>

        {/* input otp end */}
        <div className="flex justify-center mt-3">
          <button className="mr-2 px-4 py-2 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md">
            Huỷ
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-customBrown bg-customYellow rounded-md">
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}
