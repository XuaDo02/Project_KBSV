import { ToastContainer } from "react-toastify";
import Aside from "./components/Aside";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";

function App({ children }: { children: any }): JSX.Element {
  return (
    <>
    <div className=" w-screen text-secondary bg-black overflow-y-auto h-screen">
        <div>
        <Header />
        <div className="flex">
          <Aside />
          <div className="bg-customDark2 m-2 h-screen rounded-md w-screen">
            {children}
          </div>
        </div>
      </div>
    </div>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
    </>
  );
}

export default App;
