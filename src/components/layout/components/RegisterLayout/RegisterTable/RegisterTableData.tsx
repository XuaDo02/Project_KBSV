
import { useState } from "react";
import { TableData } from "src/types/tabledata";
import DialogForm from "../../RegisterDialogForm";

interface RegisterTableDataProps {
    tableData: TableData[];
}

const RegisterTableData: React.FC<RegisterTableDataProps> = ({ tableData }) => {
    const [selectedItem, setSelectedItem] = useState<TableData | null>(null);
    const [showDialog, setShowDialog] = useState(false);

    const handleRegisterClick = (item: TableData) => {
        setSelectedItem(item);
        setShowDialog(true);
    };
    const getStatusDialogRegister = (val: boolean) => {
        setShowDialog(val);
    }

    return (
        <>
            {tableData.map((item, index) => (
                <div className={`flex`}>
                    <div className={`grid grid-cols-12 text-white text-center items-center w-full text-xs  ${index % 2 == 0 ? `bg-neutral-800` : `bg-neutral-900`}`}>
                        <div className="grid col-span-4 grid-cols-8 py-2">
                            <div className="col-span-1">{item.id}</div>
                            <div className="col-span-1">{item.symbol}</div>
                            <div className="col-span-3">{item.slckhq}</div>
                            <div className="col-span-3">{item.slqsh}</div>
                        </div>
                        <div className="grid col-span-4 grid-cols-6">
                            <div className="col-span-1">{item.price}</div>
                            <div className="col-span-1">{item.term}</div>
                            <div className="col-span-2">{item.termdk}</div>
                            <div className="col-span-2">{item.slckcdm}</div>
                        </div>
                        <div className="grid col-span-4 grid-cols-5">
                            <div className="col-span-1">{item.slckdm}</div>
                            <div className="col-span-1">{item.paid}</div>
                            <div className="col-span-2">{item.payable}</div>
                            <div className="col-span-1 h-full flex justify-center items-center text-xs text-yellow-400 underline">
                            <button onClick={() => handleRegisterClick(item)}>Đăng ký</button>
                            </div>
                            {showDialog && selectedItem && <DialogForm selectedItem={selectedItem} sendStatusDialog={getStatusDialogRegister} />}
                        </div>
                    </div>
                </div>

            ))}
        </>
    );
};

export default RegisterTableData;
