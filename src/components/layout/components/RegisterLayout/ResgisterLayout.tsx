import { useState } from "react";
import { RegisterBuyTab } from "../Register_buy_tab";
import RegisterFitter from "./RegisterFitter";
// import RegisterFooter from "./RegisterFooter";
import RegisterTableData from "./RegisterTable/RegisterTableData";
import RegisterTableLabel from "./RegisterTable/RegisterTableLabel";
import { TableData } from "src/types/tabledata";
import Footer from "../Footer";

export default function ResgisterLayout() {
  const [tableData, setTableData] = useState<TableData[]>([]);

  const handleTableChange = (data: TableData[]) => {
    setTableData(data);
  };

  return (
    <div>
      <div className="ml-2 mt-5 h-1/6">
        <RegisterBuyTab />
      </div>

      <div className="ml-2 h-1/6">
        <RegisterFitter sendTableData={handleTableChange} />
      </div>
      <hr className=" border-neutral-700 mt-4" />
      <div className="mt-3 h-1/6">
        <RegisterTableLabel />
      </div>
      <hr className=" border-neutral-700 mt-4" />
      {tableData.length > 0 ? (
        <div className="h-2/6">
          <RegisterTableData tableData={tableData} />
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="text-center">
            <img src="/images/imgEmpty/cry.png" />
            <p className="text-sm font-medium text-customGrayDark ">
              Danh sách trống
            </p>
          </div>
        </div>
      )}
      <div className="ml-2 mt-5 mb-5 h-1/6">
        <Footer />
      </div>
    </div>
  );
}
