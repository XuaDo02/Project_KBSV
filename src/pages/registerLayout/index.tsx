import Aside from "@components/layout/components/Aside"
import Header from "@components/layout/components/Header"
import ResgisterLayout from "@components/layout/components/RegisterLayout/ResgisterLayout"

const registerLayout = () => {
    return (
    <div>
        <Header />
        <div className="flex">
          <Aside />
            <ResgisterLayout/>
        </div>
    </div>
          
       
    )
}

export default registerLayout