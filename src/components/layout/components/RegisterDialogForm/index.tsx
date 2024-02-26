// import { use } from "i18next";
import { useState } from "react";
import { TableData } from "src/types/tabledata";

export default function DialogForm({
  selectedItem,
  sendStatusDialog
}: {
  selectedItem: TableData;
  sendStatusDialog: (val: boolean) => void;
}) {
  const handleCancelClick = () => {
    sendStatusDialog(false);
  };

  // trạng thái của input
  const [slckdkm, setSlckdm] = useState("");
  // hiển thị lỗi
  const [isErrorSlckdkm, setIsErrorSlckdkm] = useState<boolean>(false);

  const handleChangeSlckdkm = (e: any) => {
    const inputvalue = e.target.value;
    if (inputvalue > selectedItem.slckcdm) {
      setIsErrorSlckdkm(true);
      setSlckdm("");
      // điều kiện lỗi hiển thị
    } else {
      setIsErrorSlckdkm(false);
      setSlckdm(inputvalue);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-customDark3 p-6 rounded shadow-md w-1/2 h-auto">
        {/* dang ky form start */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 bg-customBlack text-left">
            Đăng ký quyền mua
          </h2>
        </div>
        <div className="mb-2 flex items-center">
          <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
            Tiểu khoản
          </label>
          <span className="bg-customDark3 py-1 flex justify-end w-full">-</span>
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
                <div className="text-customRed">
                  *SL CK đăng ký mua không được vượt quá SL CK còn được mua
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mb-2 flex items-center">
          <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
            Tiền mua phải thanh toán
          </label>
          <span className="bg-customDark3 py-1 flex justify-end w-full">-</span>
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
          <button className="px-4 py-2 text-sm font-normal text-customWhite bg-customGray rounded-md">
            Đăng ký
          </button>
        </div>
        {/* dang ky form end */}

        {/* xac nhận form start */}
      </div>
    </div>
  );
}
