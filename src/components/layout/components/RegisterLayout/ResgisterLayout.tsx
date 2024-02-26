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
    <div>
      <div>
        <RegisterBuyTab />
      </div>

      <div className="ml-2">
        <RegisterFitter sendTableData={handleTableChange} />
      </div>
      <hr className=" border-neutral-700 mt-4" />
      <div className="mt-2">
        <RegisterTableLabel />
      </div>
      <hr className=" border-neutral-700 mt-4" />
      {tableData.length > 0 ? (
        <div>
          <RegisterTableData tableData={tableData} />
        </div>
      ) : (
        <div className="flex justify-center">
          <img src="/images/imgEmpty/cry.png" className="mr-2" />
        </div>
      )}
    </div>
  );
}
