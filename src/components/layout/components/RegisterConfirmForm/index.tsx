import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { TableData } from "src/types/tabledata";

const typePin = "123456";
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
    } else {
      toast.error("Mã OTP không chính xác. Vui lòng nhập lại.");
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
    handleBackspace(otp2Ref, otp1Ref);
    setOTP2(e.target.value);
  };
  const handleOtpInputThree = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 1 && otp4Ref.current) {
      otp4Ref.current.focus();
    }
    handleBackspace(otp3Ref, otp2Ref);
    setOTP3(e.target.value);
  };
  const handleOtpInputFour = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 1 && otp5Ref.current) {
      otp5Ref.current.focus();
    }
    handleBackspace(otp4Ref, otp3Ref);
    setOTP4(e.target.value);
  };
  const handleOtpInputFive = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 1 && otp6Ref.current) {
      otp6Ref.current.focus();
    }
    handleBackspace(otp5Ref, otp4Ref);
    setOTP5(e.target.value);
  };
  const handleOtpInputSix = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOTP6(e.target.value);
    handleBackspace(otp6Ref, otp5Ref);
  };

  const [pinCode, setPinCode] = useState("");
  const handlePinCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPinCode(e.target.value);
  };

  const handleBackspace = (
    currentRef: React.RefObject<HTMLInputElement>,
    previousRef: React.RefObject<HTMLInputElement>
  ) => {
    if (currentRef.current && currentRef.current.value === "") {
      if (previousRef.current) {
        previousRef.current.focus();
      }
    }
  };
  const handleSubmitPin = () => {
    if (pinCode === typePin) {
      toast.success("");
      onCancelRegisterConfirmForm();
    } else {
      toast.error("Mã PIN không chính xác. Vui lòng thử lại.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-customDark3 absolute top-164 left-435 rounded-8">
          <div className="w-full md:w-[569px] h-[48px] md:px-5 py-5 rounded-tl-8 rounded-tr-8 flex items-center bg-customBlack">
            <h2 className="text-lg font-sans font-semibold tracking-tight text-white text-left">
              Xác nhận đăng ký quyền mua
            </h2>
          </div>
          <div className="mb-2 flex items-center mt-3">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              Tiểu khoản
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              -
            </span>
          </div>
          <div className="mb-2 flex items-center">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              Mã
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              {selectedItem.id}
            </span>
          </div>
          <div className="mb-2 flex items-center">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              Giá
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              {selectedItem.price}
            </span>
          </div>
          <div className="mb-2 flex items-center">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              SL CK hưởng quyền
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              {selectedItem.slckhq}
            </span>
          </div>
          <div className="mb-2 flex items-center">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              SL quyền sở hữu
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              {selectedItem.slqsh}
            </span>
          </div>
          <div className="mb-2 flex items-center">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              SL CK đã mua
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              {selectedItem.slckdm}
            </span>
          </div>
          <div className="mb-2 flex items-center">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              SL CK còn được mua
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              {selectedItem.slckcdm}
            </span>
          </div>
          <div className="mb-2 flex items-center">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              SL CK đăng ký mua
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              {slckdkm}
            </span>
          </div>
          <div className="mb-2 flex items-center">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left px-5">
              Tiền mua phải thanh toán
            </label>
            <span className="bg-customDark3 py-1 flex justify-end w-full px-5">
              -
            </span>
          </div>
          <div className="mt-5">
            <hr className="border-t border-neutral-600 w-full" />
          </div>
          <div className="flex justify-between mt-2 ml-5">
            <div className="flex">
              <span className="text-sm">Nhập mã</span>
              <img
                src="/images/imgOTP/eye-slash.png"
                className="ml-2 w-4 h-4 mt-1"
              />
            </div>
            <div className="flex mr-4">
              <span className="text-sm">Lưu mã</span>
              <img
                src="/images/imgOTP/check box circle.png"
                className="ml-2 w-4 h-4 mt-1"
              />
            </div>
          </div>
          {typeOTP === "OTP" ? (
            <div className=" w-auto h-36 mx-4">
              <div className="otp-field bg-customBlack rounded-lg h-20 mt-3">
                <div className="py-1">
                  <input
                    type="tel"
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
                </div>
                <div>
                  <div className="flex justify-center mt-3">
                    <button
                      onClick={onCancelRegisterConfirmForm}
                      className="w-60 h-10 mr-14 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md"
                    >
                      Huỷ
                    </button>
                    <button
                      onClick={handleSubmitOTP}
                      className="w-60 h-10 rounded-md text-sm font-semibold text-customBrown bg-customYellow"
                    >
                      Xác nhận
                    </button>
                  </div>
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
              <div className="items-center mt-3">
                <button
                  onClick={onCancelRegisterConfirmForm}
                  className="w-44 h-10 mr-2 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md"
                >
                  Huỷ
                </button>
                <button
                  onClick={handleSubmitPin}
                  className="w-44 h-10 mr-2 text-sm font-normal border border-customYellow rounded-md text-customBrown bg-customYellow"
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
