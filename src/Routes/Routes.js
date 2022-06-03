import { Instructioins } from "../components/Instructions";
import { Game } from "../components/Game";

const routes = [
  {
    component: Instructioins,
    path: "/",
    exact: true,
  },
  {
    component: Game,
    path: "/Game",
    exact: true,
  },
];

export { routes };
