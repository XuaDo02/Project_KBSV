import axios from "axios";
import { useState } from "react";
import { TableData } from "src/types/tabledata";

const query = 'symbol'

export default function RegisterFitter({sendTableData} : {sendTableData : (data: TableData[]) => void}) {
    const [showForm, setShowForm] = useState(false);
    const [stockCodeInput, setStockCodeInput] = useState('');
    const [tableData, setTableData] = useState<TableData[]>([])

    const handleApplyFilter = async () => {
        if (stockCodeInput === 'symbol') {
            console.log("sendTableData:", sendTableData);
            const res = await axios.get(`https://64f015e48a8b66ecf779241a.mockapi.io/api/WTS`);
            console.log('res =>>',res)
            setTableData(res.data);
            sendTableData(res.data);
        }
    }
    return (
        <div>
            <div className=" bg-customDark3 h-9 w-32 rounded-md flex flex-item-center">
                <img className="mt-2 ml-2 w-5 h-5" src="/images/imageMenu/search-normal-new.png" />
                <button className="text-customGrayLight ml-4" 
                onClick={() => { setShowForm(!showForm) }}>
                    Bộ lọc
                </button>
                <img className="mt-2 ml-2 w-5 h-5" src="/images/imageMenu/arrow-down.png" />
            </div>
            {
                showForm && (
                    <div className="flex flex-col absolute bg-customDark3 rounded-md mt-4 z-50 w-96 h-36">
                        <div className="flex mt-3">
                            <label className="text-customGrayDark ml-3 text-sm"> Mã chứng khoán </label>
                            <input className=" bg-customBlack w-44 h-8 rounded-md ml-5 text-customGrayLight text-sm" type="text" placeholder=" Nhập mã chứng khoán"
                                onChange={(e) => setStockCodeInput(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-item justify-end mt-12">
                            <div>
                                <button className="w-24 h-8 text-customGrayLight bg-customGray text-sm rounded-md">
                                    Đóng
                                </button>
                                <button className="w-24 h-8 bg-customYellow text-sm rounded-md m-2 text-customBrown" 
                                onClick={handleApplyFilter}
                                >
                                    Áp dụng
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

