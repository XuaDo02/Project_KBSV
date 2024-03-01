// import { use } from "i18next";
import { useState } from "react";
import { TableData } from "src/types/tabledata";
import RegisterConfirmForm from "../RegisterConfirmForm";

let inputValue = "";
console.log(inputValue);
export default function RegisterDialogForm({
  selectedItem,
  sendStatusRegisterDialog
}: {
  selectedItem: TableData;
  sendStatusRegisterDialog: (val: boolean) => void;
}) {
  // state của confirmform
  const [isConfirmForm, setIsConfirmForm] = useState(false);
  // trạng thái của input
  const [slckdkm, setSlckdm] = useState("");
  // state lỗi
  const [isErrorSlckdkm, setIsErrorSlckdkm] = useState<boolean>(false);

  // state của nút đăng ký
  const [isDisableButton, setIsDisableButton] = useState(false);

  // state loại lỗi của  ô input (1. SLCKDKM <= SKCKCDM) (2. lỗi nhập vào chứa các kí tự đặc biệt)
  const [inputCharacterError, setInputCharacterError] = useState<string>("");

  // sự kiện nút đăng ký (nếu không có lỗi thì chuyển sang form ConfirmForm)
  const handleRegisterClick = () => {
    if (!isErrorSlckdkm) {
      setIsConfirmForm(true);
      setIsDisableButton(false);
      inputValue = "";
    }
  };

  // tắt RegisterDialog
  const handleCancelClick = () => {
    sendStatusRegisterDialog(false);
  };

  const handleChangeSlckdkm = (e: any) => {
    const inputValue = e.target.value;
    const specialCharactersRegex = /[`,.*&%$#@!\-+=?]/;
    if (inputValue > selectedItem.slckcdm) {
      setIsErrorSlckdkm(true);
      setSlckdm("");
      setInputCharacterError(
        "*SL CK đăng ký mua không được vượt quá SL CK còn được mua"
      );
      setIsDisableButton(false);
    } else if (specialCharactersRegex.test(inputValue)) {
      setIsErrorSlckdkm(true);
      setInputCharacterError("*SL không hợp lệ");
      setIsDisableButton(false);
    } else if (inputValue === "") {
      setIsErrorSlckdkm(false); // mới thêm
      setIsDisableButton(false);
    } else {
      setIsErrorSlckdkm(false);
      setSlckdm(inputValue);
      setIsDisableButton(true);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-customDark3 p-6 rounded shadow-md w-1/2 h-auto">
        {/* DialogForm start */}
        {!isConfirmForm ? (
          <>
            <div>
              <h2 className="text-lg font-semibold text-white mb-4 bg-customBlack text-left">
                Đăng ký quyền mua
              </h2>
            </div>
            <div className="mb-2 flex items-center">
              <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                Tiểu khoản
              </label>
              <span className="bg-customDark3 py-1 flex justify-end w-full">
                -
              </span>
            </div>
            <div className="mb-2 flex items-center">
              <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                Mã
              </label>
              <span className="bg-customDark3 py-1 flex justify-end w-full">
                {selectedItem.id}
              </span>
            </div>
            <div className="mb-2 flex items-center">
              <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                Giá
              </label>
              <span className="bg-customDark3 py-1 flex justify-end w-full">
                {selectedItem.price}
              </span>
            </div>
            <div className="mb-2 flex items-center">
              <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                SL CK hưởng quyền
              </label>
              <span className="bg-customDark3 py-1 flex justify-end w-full">
                {selectedItem.slckhq}
              </span>
            </div>
            <div className="mb-2 flex items-center">
              <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                SL quyền sở hữu
              </label>
              <span className="bg-customDark3 py-1 flex justify-end w-full">
                {selectedItem.slqsh}
              </span>
            </div>
            <div className="mb-2 flex items-center">
              <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                SL CK đã mua
              </label>
              <span className="bg-customDark3 py-1 flex justify-end w-full">
                {selectedItem.slckdm}
              </span>
            </div>
            <div className="mb-2 flex items-center">
              <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                SL CK còn được mua
              </label>
              <span className="bg-customDark3 py-1 flex justify-end w-full">
                {selectedItem.slckcdm}
              </span>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                SL CK đăng ký mua
              </label>
              <div className="flex flex-col items-end">
                <input
                  type="text"
                  className="border border-customGray rounded w-40 text-right py-1 bg-customDark3 text-zinc-400 mb-1"
                  placeholder="Nhập số lượng"
                  onChange={handleChangeSlckdkm}
                />
                {isErrorSlckdkm ? (
                  <div className="flex">
                    <div>
                      <img src="/images/danger.png" />
                    </div>
                    <div className="text-customRed">{inputCharacterError}</div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mb-2 flex items-center">
              <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                Tiền mua phải thanh toán
              </label>
              <span className="bg-customDark3 py-1 flex justify-end w-full">
                -
              </span>
            </div>
            <div className="mt-5">
              <hr className="border-t border-neutral-600 w-full" />
            </div>
            <div className="flex justify-center mt-3">
              <button
                onClick={handleCancelClick}
                className="mr-2 px-4 py-2 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md"
              >
                Huỷ
              </button>
              <button
                onClick={handleRegisterClick}
                className={`px-4 py-2 text-sm font-normal rounded-md ${
                  !isDisableButton
                    ? "bg-customGray text-customWhite"
                    : "bg-customYellow text-customDarkGray"
                }`}
              >
                Đăng ký
              </button>
            </div>
          </>
        ) : (
          /* DialogForm end */

          /* ConfirmForm start */
          <RegisterConfirmForm
            selectedItem={selectedItem}
            slckdkm={slckdkm}
            onCancelRegisterConfirmForm={() => setIsConfirmForm(false)}
          />
        )}
        {/* ConfirmForm end */}
      </div>
    </div>
  );
}
