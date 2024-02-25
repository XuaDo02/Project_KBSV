import { MainLayout } from "@components/layout"
import Aside from "@components/layout/components/Aside"
import Header from "@components/layout/components/Header"
import { RegisterBuyTab } from "@components/layout/components/Register_buy_tab"

const Register = () => {
    return (
    <div>
        <Header />
        <div className="flex">
          <Aside />
            <RegisterBuyTab/>
        </div>
    </div>
          
       
    )
}

export default Register