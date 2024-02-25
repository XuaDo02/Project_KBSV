import RegisterDropdown from "../RegisterLayout/RegisterFitter";
import RegisterFooter from "../RegisterLayout/RegisterFooter";
import RegisterTableLabel from "../RegisterLayout/RegisterTable/RegisterTableLabel";
import { RegisterBuyTab } from "../Register_buy_tab";

export default function ResgisterEmpty(){
    return(
        <div>
            <div className="ml-2"><RegisterBuyTab/></div>
            <div className="ml-2 mt-1"><RegisterDropdown/></div>
            <hr className="border-t border-neutral-700 mt-4" />
            <div className="mt-2"><RegisterTableLabel/></div>
            <hr className="border-t border-neutral-700 mt-2" />
            <div className="flex justify-center">
                <img src="/images/imgEmpty/cry.png" className="mr-2" />
            </div>
            <div><RegisterFooter/></div>
        </div>
    )

}