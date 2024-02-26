import { Home } from "@pages";
import { PATH_BASE, PATH_REGISTER_LAYOUT } from "./router.paths";
import { IRoute } from "@interfaces/route";
import ResgisterLayout from "@components/layout/components/RegisterLayout/ResgisterLayout";

export const routes: IRoute[] = [
  {
    path: PATH_BASE,
    element: <Home />
  },
  {
    path: PATH_REGISTER_LAYOUT,
    element: <ResgisterLayout />
  }
];
