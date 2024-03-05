import { useState } from "react";
import { RegisterBuyTab } from "../Register_buy_tab";
import RegisterFitter from "./RegisterFitter";
// import RegisterFooter from "./RegisterFooter";
import RegisterTableData from "./RegisterTable/RegisterTableData";
import RegisterTableLabel from "./RegisterTable/RegisterTableLabel";
import { TableData } from "src/types/tabledata";
export default function ResgisterLayout() {
  const [tableData, setTableData] = useState<TableData[]>([]);

  const handleTableChange = (data: TableData[]) => {
    setTableData(data);
  };

  return (
    <div className="">
      <div className="ml-2 mt-5">
        <RegisterBuyTab />
      </div>

      <div className="ml-2">
        <RegisterFitter sendTableData={handleTableChange} />
      </div>
      <hr className=" border-neutral-700 mt-4" />
      <div className="mt-3">
        <RegisterTableLabel />
      </div>
      <hr className=" border-neutral-700 mt-4" />
      {tableData.length > 0 ? (
        <div className="">
          <RegisterTableData tableData={tableData} />
        </div>
      ) : (
        <div className="flex justify-center mt-32">
          <div className="text-center">
            <img src="/images/imgEmpty/cry.png" />
            <p className="text-sm font-medium text-customGrayDark ">
              Danh sách trống
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
