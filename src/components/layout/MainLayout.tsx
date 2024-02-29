import Aside from "./components/Aside";
import Header from "./components/Header";

function App({ children }: { children: any }): JSX.Element {
  return (
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
  );
}

export default App;
