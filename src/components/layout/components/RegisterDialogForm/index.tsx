import React from "react";
import { TableData } from "src/types/tabledata";

interface DialogFormProps {
  sendStatusDialog: (val: boolean) => void;
  selectedItem: TableData;
}

const DialogForm: React.FC<DialogFormProps> = ({
  selectedItem,
  sendStatusDialog
}) => {
  const inputFields = [
    { label: "Tiểu khoản", className: "bg-customDark3 py-1" },
    { label: "Mã", className: "bg-customDark3 py-1", value: selectedItem.id },
    {
      label: "Giá",
      className: "bg-customDark3 py-1",
      value: selectedItem.price
    },
    {
      label: "SL CK hưởng quyền",
      className: "bg-customDark3 py-1",
      value: selectedItem.slckhq
    },
    {
      label: "SL quyền sở hữu",
      className: "bg-customDark3 py-1",
      value: selectedItem.slqsh
    },
    {
      label: "SL CK đã mua",
      className: "bg-customDark3 py-1",
      value: selectedItem.slckdm
    },
    {
      label: "SL CK còn được mua",
      className: "bg-customDark3 py-1",
      value: selectedItem.slckcdm
    },
    {
      label: "SL CK đăng ký mua",
      className:
        "border border-customGray rounded text-right py-1 flex bg-customDark3 text-customDark3",
      placeholder: "Nhập số lượng"
    },
    { label: "Tiền mua phải thanh toán", className: "bg-customDark3 py-1" }
  ];

  const handleCancelClick = () => {
    sendStatusDialog(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-customDark3 p-6 rounded shadow-md w-1/2 h-auto">
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 bg-customBlack text-left">
            Đăng ký quyền mua
          </h2>
        </div>
        {inputFields.map((inputField, index) => (
          <div key={index} className="mb-2 flex items-center  ">
            <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4  ">
              {inputField.label}
            </label>
            <input
              className={inputField.className}
              placeholder={inputField.placeholder}
              value={inputField.value}
            />
          </div>
        ))}
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
      </div>
    </div>
  );
};

export default DialogForm;
