import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { TableData } from "src/types/tabledata";

const pin = "123456";
const typeOTP = "OTP";

export default function RegisterConfirmForm({
  selectedItem,
  slckdkm,
  onCancelRegisterConfirmForm
}: {
  selectedItem: TableData;
  slckdkm: string;
  onCancelRegisterConfirmForm: () => void;
}) {
  const [otp1, setOTP1] = useState("");
  const [otp2, setOTP2] = useState("");
  const [otp3, setOTP3] = useState("");
  const [otp4, setOTP4] = useState("");
  const [otp5, setOTP5] = useState("");
  const [otp6, setOTP6] = useState("");
  const otp1Ref = useRef<HTMLInputElement>(null);
  const otp2Ref = useRef<HTMLInputElement>(null);
  const otp3Ref = useRef<HTMLInputElement>(null);
  const otp4Ref = useRef<HTMLInputElement>(null);
  const otp5Ref = useRef<HTMLInputElement>(null);
  const otp6Ref = useRef<HTMLInputElement>(null);

  const combineOTP = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
  const handleSubmitOTP = () => {
    if (combineOTP === "123456") {
      // alert("Đăng ký thành công!");
      toast.success("Thành công!");
      onCancelRegisterConfirmForm();
    }
  };

  const handleOtpInputOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 1 && otp2Ref.current) {
      otp2Ref.current.focus();
    }
    setOTP1(e.target.value);
  };
  const handleOtpInputTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 1 && otp3Ref.current) {
      otp3Ref.current.focus();
    }
    setOTP2(e.target.value);
  };
  const handleOtpInputThree = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 1 && otp4Ref.current) {
      otp4Ref.current.focus();
    }
    setOTP3(e.target.value);
  };
  const handleOtpInputFour = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 1 && otp5Ref.current) {
      otp5Ref.current.focus();
    }
    setOTP4(e.target.value);
  };
  const handleOtpInputFive = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 1 && otp6Ref.current) {
      otp6Ref.current.focus();
    }
    setOTP5(e.target.value);
  };
  const handleOtpInputSix = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOTP6(e.target.value);
  };

  const [pinCode, setPinCode] = useState("");
  const handlePinCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPinCode(e.target.value);
  };
  const handleSubmitPin = () => {
    if (pinCode === pin) {
      toast.success("");
      onCancelRegisterConfirmForm();
    } else {
      toast.error("Mã PIN không chính xác. Vui lòng thử lại.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center flex-col">
        <div className="bg-customDark3 p-4 rounded shadow-md w-1/2 relative">
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
          {typeOTP === "OTP" ? (
            <div className="otp-field bg-customBlack rounded-lg h-20 mt-3">
              <div className="py-1">
                <input
                  type="text"
                  maxLength={1}
                  ref={otp1Ref}
                  onChange={handleOtpInputOne}
                  className="w-14 h-14 px-1 text-center rounded-md m-2 bg-customDark2 border-2 border-transparent focus:border-customGrayDark focus:outline-none"
                />
                <input
                  type="text"
                  maxLength={1}
                  ref={otp2Ref}
                  onChange={handleOtpInputTwo}
                  className="w-14 h-14 px-1 text-center rounded-md m-2 bg-customDark2 border-2 border-transparent focus:border-customGrayDark focus:outline-none"
                />
                <input
                  type="text"
                  maxLength={1}
                  ref={otp3Ref}
                  onChange={handleOtpInputThree}
                  className="w-14 h-14 px-1 text-center rounded-md m-2 bg-customDark2 border-2 border-transparent focus:border-customGrayDark focus:outline-none"
                />
                <input
                  type="text"
                  maxLength={1}
                  ref={otp4Ref}
                  onChange={handleOtpInputFour}
                  className="w-14 h-14 px-1 text-center rounded-md m-2 bg-customDark2 border-2 border-transparent focus:border-customGrayDark focus:outline-none"
                />
                <input
                  type="text"
                  maxLength={1}
                  ref={otp5Ref}
                  onChange={handleOtpInputFive}
                  className="w-14 h-14 px-1 text-center rounded-md m-2 bg-customDark2 border-2 border-transparent focus:border-customGrayDark focus:outline-none"
                />
                <input
                  type="text"
                  maxLength={1}
                  ref={otp6Ref}
                  onChange={handleOtpInputSix}
                  className="w-14 h-14 px-1 text-center rounded-md m-2 bg-customDark2 border-2 border-transparent focus:border-customGrayDark focus:outline-none"
                />
                <div className="flex justify-center mt-3">
                  <button
                    onClick={onCancelRegisterConfirmForm}
                    className="mr-2 px-4 py-2 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md"
                  >
                    Huỷ
                  </button>
                  <button
                    onClick={handleSubmitOTP}
                    className="px-4 py-2 text-sm font-semibold text-customBrown bg-customYellow rounded-md"
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-3">
              <div>
                <input
                  type="text"
                  placeholder="Nhập mã PIN giao dịch hiện tại"
                  className="w-full h-[37px] p-[8px 10px 8px 16px] rounded-[4px] border-1 gap-[130px] bg-customDark3 border-neutral-600"
                  onChange={handlePinCodeChange}
                />
              </div>
              <div className="mt-3">
                <span className="text-customGrayDark">
                  Quý khách vui lòng mở ứng dụng đã đăng ký OTP để lấy mã xác
                  thực
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
          )}
        </div>
      </div>
    </>
  );
}
