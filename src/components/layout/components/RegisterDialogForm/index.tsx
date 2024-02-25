
const DialogForm = ({sendStatusDialog}: {sendStatusDialog: (val: boolean) => void}) => {

    const handleCancelClick = () => {
        sendStatusDialog(false)
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-neutral-800 p-6 rounded shadow-md w-1/2 h-auto">
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Đăng ký quyền mua</h2>
                </div>
                <div className="mb-2 flex items-center">
                    <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                        Tiểu khoản
                    </label>
                    <input className="bg-neutral-800 py-1"/>
                </div>

                <div className="mb-2 flex items-center">
                    <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                        Mã 
                    </label>
                    <input className="bg-neutral-800 py-1"/>
                </div>
                
                <div className="mb-2 flex items-center">
                    <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                        SL CK hưởng quyền
                    </label>
                    <input className="bg-neutral-800 py-1"/>
                </div>
                <div className="mb-2 flex items-center">
                    <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                        SL quyền sở hữu
                    </label>
                    <input className="bg-neutral-800 py-1"/>
                </div>
                <div className="mb-2 flex items-center">
                    <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                        Giá
                    </label>
                    <input className="bg-neutral-800 py-1"/>
                </div>
                <div className="mb-2 flex items-center">
                    <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                        SL CK đã mua
                    </label>
                    <input className="bg-neutral-800 py-1"/>
                </div>
                <div className="mb-2 flex items-center">
                    <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                        SL CK còn được mua
                    </label>
                    <input className="bg-neutral-800 py-1"/>
                </div>
                <div className="mb-2 flex items-center">
                    <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                        SL CK đăng ký mua
                    </label>
                    <input type="text" className="border border-neutral-500 rounded text-right py-1 flex" placeholder="Nhập số lượng" />
                </div>
                <div className="mb-2 flex items-center">
                    <label className="block text-sm font-medium text-zinc-400 w-1/2 text-left pr-4">
                        Tiền mua phải thanh toán
                    </label>
                    <input className="bg-neutral-800 py-1"/>
                </div>

                <div className="mt-5">
                    <hr className="border-t border-neutral-600 w-full" />
                </div>
                
                <div className="flex justify-center mt-3 ">
                    <button
                        onClick={handleCancelClick}
                        className="mr-2 px-4 py-2 text-sm font-medium text-yellow-500 bg-neutral-800 border border-orange-500 rounded-md"
                    >
                        Huỷ
                    </button>
                    <button
                        className="px-4 py-2 text-sm font-medium text-white bg-neutral-600 rounded-md "
                    >
                        Đăng ký
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DialogForm;
