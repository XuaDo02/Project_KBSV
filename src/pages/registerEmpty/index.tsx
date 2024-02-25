
import Aside from "@components/layout/components/Aside"
import Header from "@components/layout/components/Header"
import ResgisterEmpty from "@components/layout/components/RegisterEmpty"

const registerEmpty = () => {
    return (
    <div>
        <Header />
        <div className="flex">
          <Aside />
            <ResgisterEmpty/>
        </div>
    </div>
          
       
    )
}

export default registerEmpty