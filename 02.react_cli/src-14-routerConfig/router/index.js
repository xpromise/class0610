import Home from "../pages/Home";
import Pins from "../pages/Pins";
import Topics from "../pages/Topics";
import Books from "../pages/Books";
import Events from "../pages/Events";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    title: "首页",
  },
  {
    path: "/pins",
    component: Pins,
    exact: true,
    title: "沸点",
  },
  {
    path: "/topics",
    component: Topics,
    exact: true,
    title: "话题",
  },
  {
    path: "/books",
    component: Books,
    exact: true,
    title: "小册",
  },
  {
    path: "/events",
    component: Events,
    exact: true,
    title: "活动",
  },
];

export default routes;
