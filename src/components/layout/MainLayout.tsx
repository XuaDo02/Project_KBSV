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
          <div className="flex h-2/3">
            <Aside />
            <div className="bg-customDark2 m-2 h-full rounded-md w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        rtl={false}
        theme="light"
      />
    </>
  );
}

export default App;
