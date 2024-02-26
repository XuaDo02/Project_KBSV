import { useAppSelector } from "@hooks/useStore";
import Aside from "./components/Aside";
import Header from "./components/Header";

function App({ children }: { children: any }): JSX.Element {
  const { theme } = useAppSelector((state) => state);

  return (
    <div
      className=" w-screen text-secondary bg-black overflow-y-auto h-screen"
      data-theme={theme.id}
    >
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
