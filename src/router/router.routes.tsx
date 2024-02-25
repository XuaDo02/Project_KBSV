import { Home } from "@pages";
import { PATH_BASE, PATH_REGISTER_LAYOUT } from "./router.paths";
import { IRoute } from "@interfaces/route";
import ResgisterEmpty from "@components/layout/components/RegisterEmpty";
import ResgisterLayout from "@components/layout/components/RegisterLayout/ResgisterLayout";

export const routes: IRoute[] = [
  {
    path: PATH_BASE,
    element: <Home />
  },
  // {
  //   path: PATH_REGISTER,
  //   element: <ResgisterLayout/>
  // },
  {
    path: PATH_REGISTER_LAYOUT,
    element: <ResgisterLayout/>
  }
  // {
  //   path: PATH_REGISTER_EMPTY,
  //   element: <ResgisterEmpty/>
  // },
];
