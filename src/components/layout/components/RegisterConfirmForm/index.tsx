import { useState } from "react";
import { toast } from "react-toastify";
import { TableData } from "src/types/tabledata";

const pin = "123456";

export default function RegisterConfirmForm({
  selectedItem,
  slckdkm,
  onCancelRegisterConfirmForm
}: {
  selectedItem: TableData;
  slckdkm: string;
  onCancelRegisterConfirmForm: () => void;
}) {
  const [pinCode, setPinCode] = useState("");
  const handlePinCodeChange = (e: any) => {
    setPinCode(e.target.value);
  };
  const handleSubmitPin = () => {
    if (pinCode === pin) {
      toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
      onCancelRegisterConfirmForm();
    } else {
      toast.error("Mã PIN không chính xác. Vui lòng thử lại.");
    }
  };
  return (
    <>
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
            <span className="bg-customDark3 flex justify-end w-full">-</span>
          </div>
          <div className="mb-2 flex items-center py-1">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
              Mã
            </label>
            <span className="bg-customDark3 flex justify-end w-full">
              {selectedItem.id}
            </span>
          </div>
          <div className="mb-2 flex items-center py-1">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
              Giá
            </label>
            <span className="bg-customDark3 flex justify-end w-full">
              {selectedItem.price}
            </span>
          </div>
          <div className="mb-2 flex items-center py-1">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
              SL CK hưởng quyền
            </label>
            <span className="bg-customDark3 flex justify-end w-full">
              {selectedItem.slckhq}
            </span>
          </div>
          <div className="mb-2 flex items-center py-1">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
              SL quyền sở hữu
            </label>
            <span className="bg-customDark3 flex justify-end w-full">
              {selectedItem.slqsh}
            </span>
          </div>
          <div className="mb-2 flex items-center py-1">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
              SL CK đã mua
            </label>
            <span className="bg-customDark3 flex justify-end w-full">
              {selectedItem.slckdm}
            </span>
          </div>
          <div className="mb-2 flex items-center py-1">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
              SL CK còn được mua
            </label>
            <span className="bg-customDark3 flex justify-end w-full">
              {selectedItem.slckcdm}
            </span>
          </div>
          <div className="mb-2 flex items-center py-1">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
              SL CK đăng ký mua
            </label>
            <span className="bg-customDark3 flex justify-end w-full">
              {slckdkm}
            </span>
          </div>
          <div className="mb-2 flex items-center py-1">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
              Tiền mua phải thanh toán
            </label>
            <span className="bg-customDark3 flex justify-end w-full">-</span>
          </div>
          <div className="mt-5">
            <hr className="border-t border-neutral-600 w-full" />
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex">
              <span className="text-sm">Nhập mã</span>
              <img
                src="/images/imgOTP/eye-slash.png"
                className="ml-2 w-4 h-4 mt-1"
              />
            </div>
            <div className="flex">
              <span className="text-sm">Lưu mã</span>
              <img
                src="/images/imgOTP/check box circle.png"
                className="ml-2 w-4 h-4 mt-1"
              />
            </div>
          </div>
          {/* INPUT PIN END */}
          <div className="mt-3">
            <div>
              <input
                type="text"
                placeholder="Nhập mã PIN giao dịch hiện tại"
                className="w-full h-[37px] p-[8px 10px 8px 16px] rounded-[4px] border-1 gap-[130px] bg-customDark3 border-neutral-600"
                onChange={handlePinCodeChange}
              />
            </div>
          </div>
          {/* INPUT PIN START */}
          <div className="mt-3">
            <span className="text-customGrayDark">
              Quý khách vui lòng mở ứng dụng đã đăng ký OTP để lấy mã xác thực
            </span>
          </div>
          <div className="flex justify-center mt-3">
            <button
              onClick={onCancelRegisterConfirmForm}
              className="mr-2 px-4 py-2 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md"
            >
              Huỷ
            </button>
            <button
              onClick={handleSubmitPin}
              className="px-4 py-2 text-sm font-semibold text-customBrown bg-customYellow rounded-md"
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
